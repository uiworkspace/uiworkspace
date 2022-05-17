import { useState, useEffect } from "react";
import styles from "./Flixslider.module.scss";
import Slide from "./components/Slide";
function Flixslider(props) {
  const imagesData = props.content.images;
  let mobileslidesPerScreen = 2;
  let desktopslidesPerScreen = 3;
  let offsetPercentage = 4;
  let showOffsetOverlay = true;
  let transitionSpeed = 0.45;
  mobileslidesPerScreen = props.content.mobileslidesPerScreen;
  desktopslidesPerScreen = props.content.desktopslidesPerScreen;
  offsetPercentage = props.content.offsetPercentage;
  transitionSpeed = props.content.transitionSpeed;
  showOffsetOverlay = props.content.showOffsetOverlay;

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [pushPercent, setpushPercent] = useState(0);
  const showDebug = false;
  let slidesPerScreen;
  if (windowWidth < 768) {
    slidesPerScreen = mobileslidesPerScreen;
  } else {
    slidesPerScreen = desktopslidesPerScreen;
  }
  const [firstSlideRow, setfirstSlideRow] = useState(true);
  const [lastSlideRow, setlastSlideRow] = useState(false);
  const images = imagesData;
  const totalImages = imagesData.length;
  const percentofScreen = 100 / slidesPerScreen;
  const slideCountAllowed = Math.trunc(totalImages / slidesPerScreen);
  const [slideCount, setslideCount] = useState(0);
  function handleNext() {
    setfirstSlideRow(false);
    if (slideCountAllowed - slideCount === 2) {
      setlastSlideRow(true);
    }
    if (!lastSlideRow) {
      if (slideCount !== slideCountAllowed) {
        setslideCount((prev) => prev + 1);
        setpushPercent(pushPercent + 100);
      }
    }
  }
  function handlePrev() {
    setlastSlideRow(false);
    if (slideCount <= 1) {
      setfirstSlideRow(true);
    }

    if (slideCount !== 0) {
      setslideCount((prev) => prev - 1);
      setpushPercent(pushPercent + -100);
    }
  }

  useEffect(() => {
    function handleResize() {
      //reset everything on resize since slide function depends on amount of slides
      setWindowWidth(window.innerWidth);
      setpushPercent(0);
      setfirstSlideRow(true);
      setlastSlideRow(false);
      setslideCount(0);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.App}>
      {showDebug && (
        <div>
          width size:
          {windowWidth}
          {slideCountAllowed - slideCount}
          first: {firstSlideRow.toString()} | Last: {lastSlideRow.toString()}
          <div>
            {slideCount}:{slideCountAllowed}
          </div>
        </div>
      )}

      <div
        className={styles.sliderContainer}
        style={{ padding: `0 ${offsetPercentage}%` }}
      >
        <div className={styles.sliderMask}>
          <div
            className={styles.slides}
            style={{
              transform: "translate3d(-" + pushPercent + "%, 0px, 0px)",
              transition: `transform ${transitionSpeed}s`,
            }}
          >
            {images.map((item, index) => {
              return (
                <Slide
                  key={index}
                  imglink={item.imglink}
                  percentofScreen={percentofScreen}
                />
              );
            })}
          </div>
        </div>
        {!firstSlideRow && (
          <span
            className={`${styles.prev} ${styles.arrow} ${
              showOffsetOverlay === false && styles.removeoffset
            }`}
            onClick={handlePrev}
            style={{ width: `${offsetPercentage}%` }}
          ></span>
        )}
        {!lastSlideRow && (
          <span
            className={`${styles.next} ${styles.arrow} ${
              showOffsetOverlay === false && styles.removeoffset
            }`}
            onClick={handleNext}
            style={{ width: `${offsetPercentage}%` }}
          ></span>
        )}
      </div>
    </div>
  );
}

export default Flixslider;
