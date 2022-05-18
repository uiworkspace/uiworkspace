// import Flixslider from "../uiworkspace-sliders/src/components/Flixslider/Flixslider.js";
import { Flixslider } from "@uiworkspace/sliders";

function FlixsliderDemo() {
  const content = {
    offsetPercentage: 4,
    showOffsetOverlay: true,
    transitionSpeed: 0.45,
    mobileslidesPerScreen: 2,
    desktopslidesPerScreen: 3,
    images: [
      {
        imglink: "/photos/photo1.jpg",
      },
      {
        imglink: "/photos/photo2.jpg",
      },
      {
        imglink: "/photos/photo3.jpg",
      },
      {
        imglink: "/photos/photo4.jpg",
      },
      {
        imglink: "/photos/photo5.jpg",
      },
      {
        imglink: "/photos/photo6.jpg",
      },
    ],
  };

  return (
    <div>
      <Flixslider content={content} />
    </div>
  );
}

export default FlixsliderDemo;
