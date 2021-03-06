import Fadeslider from "../uiworkspace-sliders/src/components/Fadeslider/Fadeslider.js";
// import { Fadeslider } from "@uiworkspace/sliders";

function FadesliderDemo() {
  const sliderContent = {
    arrowColor: "white", //optional
    customRightArrow: "", //optional
    customLeftArrow: "", //optional
    width: "100%", //optional
    height: "100vh", //optional
    slides: [
      //required
      {
        image: "/people.jpg",
      },
      {
        image: "/x1.jpg",
      },
      {
        image: "/x2.jpg",
      },
    ],
  };
  return (
    <div>
      <Fadeslider content={sliderContent}></Fadeslider>
    </div>
  );
}

export default FadesliderDemo;
