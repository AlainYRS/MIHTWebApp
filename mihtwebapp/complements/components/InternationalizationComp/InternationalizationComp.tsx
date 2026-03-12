'use client'
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";
import styles from "./InternationalizationComp.module.css";
import { useState } from "react";
import { setAnalyticsLocale, trackEvent } from "@/app/lib/analytics";

interface iLanguages {
  language?: string;
  locale?: string;
  icon?: string;
  country?: string;
  alt?: string;
  prioritario?: boolean;
  width?: number;
  height?: number;
  fill?: boolean;
}

interface iInternational {
  Langs: iLanguages[];
  Position?: 'relative' | 'absolute' | 'fixed';
  BackgroundColor?: string;
  Top?: string;
  Bottom?: string;
  Left?: string;
  Right?: string;
  ShowLangs?: 'all' | 'oneBYone';
}

export default function InterComp(props: iInternational) {
  const { setLocale } = useAppContext();
  const [LangIdx, setLangIdx] = useState<number>(0);

  const handleLocaleClick = (locale?: string) => {
    if (!locale) return;

    setAnalyticsLocale(locale);
    trackEvent("select_language", {
      selected_locale: locale,
    });
    setLocale(locale);
  };

  return (
    <div
      className={styles.LangsContainer}
      style={{
        position: props.Position,
        backgroundColor: props.BackgroundColor,
        top: props.Top,
        bottom: props.Bottom,
        left: props.Left,
        right: props.Right,
      }}
    >
      {props.ShowLangs == 'oneBYone' && LangIdx != undefined ? (
        <div
          className={styles.Lngdiv}
          key={LangIdx + 'lng'}
          onClick={() => setLangIdx((LangIdx + 1) % props.Langs.length)}
        >
          {props.Langs.length > 0 && props.Langs[LangIdx] && props.Langs[LangIdx].icon && (
            <Image
              onClick={() => handleLocaleClick(props.Langs[LangIdx].locale)}
              src={props.Langs[LangIdx].icon!}
              width={props.Langs[LangIdx].width}
              height={props.Langs[LangIdx].height}
              priority={props.Langs[LangIdx].prioritario}
              alt={""}
            />
          )}
          {props.Langs[LangIdx].language && (
            <p className={styles.LngLgnd}>{props.Langs[LangIdx].language}</p>
          )}
        </div>
      ) : (
        props.Langs.map((lang, index) => {
          return (
            <div className={styles.Lngdiv} key={index + 'lng'}>
              {lang.icon && (
                <Image
                  onClick={() => handleLocaleClick(lang.locale)}
                  src={lang.icon}
                  width={lang.width}
                  height={lang.height}
                  priority={lang.prioritario}
                  alt={lang.alt ? lang.alt : ""}
                />
              )}
              {lang.language && <p className={styles.LngLgnd}>{lang.language}</p>}
            </div>
          );
        })
      )}
    </div>
  );
}