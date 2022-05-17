import React from "react";
import styles from "./Heroplain.module.scss";

function Heroplain(props) {
  let bgcolor;
  let bgimage;
  let bgimageOverlay;
  let bgcolorDefaultValue = "white";
  let bgimageDefaultValue =
    "https://uiworkspace.com/images/uiw-placeholder1.jpg";
  let bgimageOverlayDefaultValue = 0;

  if (props.styles) {
    if (props.styles.bgcolor) {
      bgcolor = props.styles.bgcolor;
    } else {
      bgcolor = bgcolorDefaultValue;
    }
    if (props.styles.bgimage) {
      bgimage = props.styles.bgimage;
    } else {
      bgimage = bgimageDefaultValue;
    }
    if (props.styles.bgimageOverlay) {
      bgimageOverlay = props.styles.bgimageOverlay;
    } else {
      bgimageOverlay = bgimageOverlayDefaultValue;
    }
  } else if (props.styles === undefined) {
    bgimage = bgimageDefaultValue;
    bgcolor = bgcolorDefaultValue;
    bgimageOverlay = bgimageOverlayDefaultValue;
  }

  const stylesProps = {
    backgroundColor: bgcolor,
    backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, ${bgimageOverlay}), rgba(0, 0, 0, ${bgimageOverlay})), url(${bgimage})`,
  };
  return (
    <>
      <section className={`${styles.section}`} style={stylesProps}>
        <div className={styles.holdcontent}>{props.children}</div>
      </section>
    </>
  );
}

export default Heroplain;
