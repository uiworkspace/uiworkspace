import Parallaxslider from "../uiworkspace-sliders/src/components/Parallaxslider/Parallaxslider.js";
// import { Fadeslider } from "@uiworkspace/sliders";

function Parallaxsliderdemo() {
  const sliderContent = {
    arrowColor: "white", //optional
    customRightArrow: "", //optional
    customLeftArrow: "", //optional
    width: "100%", //optional
    height: "80vh", //optional
    slides: [
      //required
      {
        image: "/images/x.jpg",
      },
      {
        image: "/images/x1.jpg",
      },
      {
        image: "/images/x2.jpg",
      },
    ],
  };
  return (
    <div>
      <Parallaxslider content={sliderContent} />
    </div>
  );
}

export default Parallaxsliderdemo;
