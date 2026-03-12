"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

type MetaPixelTrackerProps = {
  pixelId: string;
};

export default function MetaPixelTracker({
  pixelId,
}: MetaPixelTrackerProps): React.JSX.Element | null {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pixelId) return;
    if (typeof window === "undefined") return;
    if (typeof window.fbq !== "function") return;

    window.fbq("track", "PageView");
  }, [pathname, searchParams, pixelId]);

  return null;
}