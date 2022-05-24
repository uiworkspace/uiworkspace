import React, { useState } from "react";
import styles from "./Fadeslider.module.scss";

function Fadeslider(props) {
  let sliderContent;

  let customLeftArrow = "";
  let customRightArrow = "";
  if (props.content.slides) {
    sliderContent = props.content.slides;
  }

  let arrowColor;
  if (props.content.arrowColor) {
    arrowColor = props.content.arrowColor;
  } else {
    arrowColor = "white";
  }

  let width;
  if (props.content.width) {
    width = props.content.width;
  } else {
    width = "100%";
  }

  let height;
  if (props.content.height) {
    height = props.content.height;
  } else {
    height = "100vh";
  }
  if (props.content.customLeftArrow.length > 0) {
    customLeftArrow = props.content.customLeftArrow;
  }
  if (props.content.customRightArrow.length > 0) {
    customRightArrow = props.content.customRightArrow;
  }
  const [slideIndex, setSlideIndex] = useState(1);
  const nextSlide = () => {
    if (slideIndex !== sliderContent.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderContent.length) {
      setSlideIndex(1);
    }
  };
  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderContent.length);
    }
  };
  const svgStyles = {
    fill: arrowColor,
  };
  const sliderStyles = {
    width: width,
    height: height,
  };
  return (
    <>
      <article className={`${styles.article}`} style={sliderStyles}>
        <button
          className={`${styles.arrow} ${styles.next}`}
          onClick={nextSlide}
        >
          {customRightArrow ? (
            <img src={`${customRightArrow}`} alt="Right Arrow" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.2 43.9 12.4 41.05 29.55 23.9 12.4 6.75 15.2 3.9 35.2 23.9Z"
                style={svgStyles}
              />
            </svg>
          )}
        </button>
        <button
          className={`${styles.arrow} ${styles.prev}`}
          onClick={prevSlide}
        >
          {customLeftArrow ? (
            <img src={`${customLeftArrow}`} alt="Left Arrow" />
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 44 0 24 20 4 22.8 6.85 5.65 24 22.8 41.15Z"
                style={svgStyles}
              />
            </svg>
          )}
        </button>
        <div className={styles.containerSlider}>
          {sliderContent.length > 0 ? (
            sliderContent.map((obj, index) => {
              return (
                <div
                  key={index}
                  className={`${styles.containerSlide} ${
                    slideIndex === index + 1 ? styles.activeAnim : ""
                  }`}
                >
                  <img src={`${obj.image}`} alt="" />
                </div>
              );
            })
          ) : (
            <div
              style={{
                width: `100%`,
                height: `100%`,
                display: `flex`,
                alignItems: `center`,
                justifyContent: `center`,
                fontSize: `inherit`,
              }}
            >
              Add a content prop with your slides array as mentioned in the
              docs.
            </div>
          )}
          <div className={styles.content}>{props.children}</div>
        </div>
      </article>
    </>
  );
}

export default Fadeslider;
