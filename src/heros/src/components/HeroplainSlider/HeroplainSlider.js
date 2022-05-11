import React from "react";
import styles from "./HeroplainSlider.module.scss";

function HeroplainSlider(props) {
  const sliderContent = props.content;
  return (
    //https://dev.to/ziratsu/build-a-slider-with-react-4651
    <>
      <article className={styles.article}>
        <div className={styles.containerSlider}>
          {sliderContent.map((obj, index) => {
            return (
              <div className={styles.containerSlide} key={obj.id}>
                <img src={`${obj.image}`} alt="" />
              </div>
            );
          })}
        </div>
      </article>
    </>
  );
}

export default HeroplainSlider;
