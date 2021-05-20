import React from "react";
import styles from  "../../modules/PagesFrame.module.css";

const PagesFrame = (props) => {
  return (
    <div className={styles.FramePages}>
      {props.title !== "" ? (
        <p className={styles.PagesFrameTitle}>{props.title}</p>
      ) : null}
      {props.children}
      <p className={styles.FnuggCopyRight}>{props.copyRight}</p>
    </div>
  );
};

export default PagesFrame;
