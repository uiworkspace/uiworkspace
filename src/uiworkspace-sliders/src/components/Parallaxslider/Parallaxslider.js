import React, { useState } from "react";
import styles from "./Parallaxslider.module.scss";

function Parallaxslider(props) {
  const [activeSlide, setactiveSlide] = useState(0);
  const [endofSlider, setendofSlider] = useState(false);
  const [sliderMoving, setsliderMoving] = useState(false);
  const sliderContent = props.content;
  const imagesObject = sliderContent.slides;
  let arrowColor = "white";
  let sliderWidth = "100%";
  let sliderHeight = "100vh";
  let customLeftArrow = "";
  let customRightArrow = "";
  if (sliderContent.length > 0) {
    arrowColor = sliderContent.arrowColor;
  }
  if (sliderContent.width.length > 0) {
    sliderWidth = sliderContent.width;
  }
  if (sliderContent.height.length > 0) {
    sliderHeight = sliderContent.height;
  }
  if (sliderContent.customLeftArrow.length > 0) {
    customLeftArrow = sliderContent.customLeftArrow;
  }
  if (sliderContent.customRightArrow.length > 0) {
    customRightArrow = sliderContent.customRightArrow;
  }
  const svgStyles = {
    fill: arrowColor,
  };
  const slideLength = imagesObject.length;
  function nextSlide() {
    setsliderMoving(true);
    if (sliderMoving) return;
    if (activeSlide === slideLength - 2) {
      setendofSlider(true);
    }
    if (activeSlide === slideLength - 1) {
      return;
    }
    setactiveSlide((prev) => prev + 1);
    setTimeout(() => {
      setsliderMoving(false);
    }, 1000);
  }
  function prevSlide() {
    setsliderMoving(true);
    if (sliderMoving) return;
    if (activeSlide !== slideLength - 2) {
      setendofSlider(false);
    }
    setactiveSlide((prev) => prev - 1);
    setTimeout(() => {
      setsliderMoving(false);
    }, 800);
  }

  return (
    <div
      className={`${styles.slider}`}
      style={{ width: sliderWidth, height: sliderHeight }}
    >
      {imagesObject.map((obj, index) => {
        // let bgImage = {
        //   backgroundImage: `url(${obj.image})`,
        // };
        let slideStyle;
        if (index === activeSlide - 1) {
          //active
          slideStyle = {
            transform: "translateX(-60%)",
            zIndex: index,
          };
        }
        if (index === activeSlide) {
          //active
          slideStyle = {
            transform: "translateX(0)",
            zIndex: index - 1,
          };
        }
        return (
          <div
            key={index}
            className={`${styles.slide} ${
              activeSlide === index && styles.activeSlide
            } ${activeSlide + 1 === index && styles.nextSlide} ${
              activeSlide - 1 === index && styles.prevSlide
            }`}
            style={{ ...slideStyle }}
          >
            <img src={obj.image} alt="" />
          </div>
        );
      })}
      {activeSlide !== 0 && (
        <div className={`${styles.arrow} ${styles.prev}`} onClick={prevSlide}>
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
        </div>
      )}
      {endofSlider !== true && (
        <div className={`${styles.arrow} ${styles.next}`} onClick={nextSlide}>
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
        </div>
      )}
    </div>
  );
}

export default Parallaxslider;
