// import Fadeslider from "../uiworkspace-sliders/src/components/Fadeslider/Fadeslider.js";
import { Fadeslider } from "@uiworkspace/sliders";

function FadesliderDemo() {
  const sliderContent = {
    arrowColor: "white",
    width: "100%",
    height: "100vh",
    slides: [
      {
        id: 1,
        image: "/people.jpg",
      },
      {
        id: 2,
        image: "/x1.jpg",
      },
      {
        id: 3,
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
