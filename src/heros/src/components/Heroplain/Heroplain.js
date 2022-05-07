import React from "react";
import styles from "./Heroplain.module.scss";

function Heroplain(props) {
  return (
    <>
      <section
        className={`${styles.section}`}
        style={{ backgroundColor: props.bgcolor }}
      >
        <div className={styles.holdcontent}>{props.children}</div>
      </section>
    </>
  );
}

export default Heroplain;
