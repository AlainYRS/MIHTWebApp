export type TrackParams = Record<string, string | number | boolean | undefined | null>;

const UTM_STORAGE_KEY = "ht:utm";
const LOCALE_STORAGE_KEY = "ht:locale";

type UTMContext = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
};

function hasAnyUtm(value: UTMContext) {
  return Boolean(
    value.utm_source ||
      value.utm_medium ||
      value.utm_campaign ||
      value.utm_term ||
      value.utm_content
  );
}

function readCurrentUtm(): UTMContext {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);

  return {
    utm_source: params.get("utm_source") || undefined,
    utm_medium: params.get("utm_medium") || undefined,
    utm_campaign: params.get("utm_campaign") || undefined,
    utm_term: params.get("utm_term") || undefined,
    utm_content: params.get("utm_content") || undefined,
  };
}

function readStoredUtm(): UTMContext {
  if (typeof window === "undefined") return {};

  const raw = window.sessionStorage.getItem(UTM_STORAGE_KEY);
  if (!raw) return {};

  try {
    return JSON.parse(raw) as UTMContext;
  } catch {
    return {};
  }
}

function persistUtmContext() {
  if (typeof window === "undefined") return;

  const current = readCurrentUtm();
  if (!hasAnyUtm(current)) return;

  window.sessionStorage.setItem(UTM_STORAGE_KEY, JSON.stringify(current));
}

function getLocationIdFromPathname(pathname: string) {
  if (pathname.startsWith("/Leamington")) return "leamington";
  if (pathname.startsWith("/Windsor")) return "windsor";
  return "home";
}

function getStoredLocale() {
  if (typeof window === "undefined") return undefined;
  return window.sessionStorage.getItem(LOCALE_STORAGE_KEY) || undefined;
}

function isDebugMode() {
  if (typeof window === "undefined") return false;
  return new URLSearchParams(window.location.search).get("debug_mode") === "true";
}

export function setAnalyticsLocale(locale: string) {
  if (typeof window === "undefined") return;
  window.sessionStorage.setItem(LOCALE_STORAGE_KEY, locale);
}

function buildPayload(params: TrackParams = {}) {
  const pathname = window.location.pathname;
  const utm = { ...readStoredUtm(), ...readCurrentUtm() };

  return {
    debug_mode: isDebugMode(),
    page_path: pathname,
    location_id: getLocationIdFromPathname(pathname),
    locale: getStoredLocale(),
    transport_type: "beacon",
    ...utm,
    ...params,
  };
}

export function trackEvent(eventName: string, params: TrackParams = {}) {
  if (typeof window === "undefined") return;

  persistUtmContext();

  const gtag = (window as any).gtag;
  if (typeof gtag !== "function") return;

  gtag("event", eventName, buildPayload(params));
}

export function trackEventAndThen(
  eventName: string,
  params: TrackParams = {},
  after: () => void,
  timeoutMs = 250
) {
  if (typeof window === "undefined") {
    after();
    return;
  }

  persistUtmContext();

  const gtag = (window as any).gtag;
  let done = false;

  const finish = () => {
    if (done) return;
    done = true;
    after();
  };

  if (typeof gtag !== "function") {
    finish();
    return;
  }

  gtag("event", eventName, {
    ...buildPayload(params),
    event_callback: finish,
    event_timeout: timeoutMs,
  });

  window.setTimeout(finish, timeoutMs);
}