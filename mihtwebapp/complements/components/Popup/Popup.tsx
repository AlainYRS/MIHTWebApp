import React, { useEffect } from "react";
import styles from "./Popup.module.css";

interface iPopup{
  Message: string;
}
function FeedbackPopup (props: iPopup){
  return (
    <div className={styles.Popup}>
      <p>{props.Message}</p>
    </div>
  )
}

export default React.memo(FeedbackPopup)