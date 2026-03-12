'use client';

import React, { useEffect, useRef } from "react";
import styles from "./MenuItem.module.css";
import { trackEvent } from "@/app/lib/analytics";

interface iMenuItem {
  Title1: any;
  Description1?: any;
  ImagePath?: string;
  Price?: number;
  analyticsItemId?: string;
  analyticsSectionId?: string;
}

export default function MenuItem(props: iMenuItem) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const hasTrackedViewRef = useRef(false);

  useEffect(() => {
    if (!rootRef.current) return;
    if (!props.analyticsItemId || !props.analyticsSectionId) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry?.isIntersecting) return;
        if (hasTrackedViewRef.current) return;

        hasTrackedViewRef.current = true;

        trackEvent("menu_item_view", {
          item_id: props.analyticsItemId,
          section_id: props.analyticsSectionId,
        });
      },
      {
        threshold: 0.6,
      }
    );

    observer.observe(rootRef.current);

    return () => observer.disconnect();
  }, [props.analyticsItemId, props.analyticsSectionId]);

  return (
    <div
      ref={rootRef}
      className={styles.MIDiv}
      id={props.Title1}
      onClick={() => {
        if (!props.analyticsItemId || !props.analyticsSectionId) return;

        trackEvent("menu_item_click", {
          item_id: props.analyticsItemId,
          section_id: props.analyticsSectionId,
        });
      }}
    >
      <h1 className={styles.MITitle1}>{props.Title1}</h1>
      {props.Price && <h2 className={styles.MIPrice}>CA ${props.Price}</h2>}
      <p className={styles.MIDescription1}>{props.Description1}</p>
      <br />
      {props.ImagePath && (
        <div className={styles.MIZoom}>
          <div className={styles.MIImg}>
            <img
              src={props.ImagePath}
              style={{ objectFit: 'contain' }}
              sizes='(max-width: 768px) 35vw, (max-width: 1200px) 35vw, 800px'
              alt={props.analyticsItemId || "menu-item"}
            />
          </div>
        </div>
      )}
    </div>
  );
}