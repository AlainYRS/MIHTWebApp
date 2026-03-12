import React from "react";
import styles from "@/complements/components/BranchComponent/Branch.module.css";
import { trackEvent, trackEventAndThen } from "@/app/lib/analytics";

interface IBranch {
  Name: string;
  Location?: string;
  Phone?: string;
  Address?: string;
  OnlineSells?: string;
  Image?: string;
  setState?: any;
  onClickLink?: string;
  analyticsLocationId?: string;
}

export default function BranchComp(props: IBranch) {
  return (
    <div className={styles.BranchComp} onClick={() => props.setState?.(props.Name)}>
      <h2 className={styles.BranchName}>{props.Name}</h2>

    {props.onClickLink ? (
        <a
            href={props.onClickLink}
            onClick={(e) => {
            e.preventDefault();

            trackEventAndThen(
                "select_location",
                {
                selected_location_id: props.analyticsLocationId,
                },
                () => {
                window.location.href = props.onClickLink!;
                }
            );
            }}
        >
            <img className={styles.Picture} src={props.Image} alt="" />
        </a>
    ) : (
        <img className={styles.Picture} src={props.Image} alt="" />
      )}

      <h3 className={styles.HeadParagraph3}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          className={styles.MenuButtom}
          href={props.Location ? props.Location : ""}
          onClick={() =>
            trackEvent("branch_map_click", {
              selected_location_id: props.analyticsLocationId,
            })
          }
        >
          <u>{props.Address}</u>
        </a>
        <br />
        {props.Phone && (
          <a
            target="_blank"
            rel="noopener noreferrer"
            className={styles.MenuButtom}
            href={"tel:+" + props.Phone.toString()}
            onClick={() =>
              trackEvent("branch_phone_click", {
                selected_location_id: props.analyticsLocationId,
              })
            }
          >
            <u className={styles.PhoneLink}>{props.Phone.toString()}</u>
          </a>
        )}
      </h3>
    </div>
  );
}