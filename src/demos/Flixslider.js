import Flixslider from "../uiworkspace-sliders/src/components/Flixslider/Flixslider.js";
// import { Flixslider } from "@uiworkspace/sliders";

function FlixsliderDemo() {
  const content = {
    offsetPercentage: 4,
    showOffsetOverlay: true,
    transitionSpeed: 0.45,
    mobileslidesPerScreen: 2,
    desktopslidesPerScreen: 3,
    images: [
      {
        imglink: "https://picsum.photos/500/500?grayscale",
      },
      {
        imglink: "https://picsum.photos/500/500?grayscale",
      },
      {
        imglink: "https://picsum.photos/500/500?grayscale",
      },
      {
        imglink: "https://picsum.photos/500/500?grayscale",
      },
      {
        imglink: "https://picsum.photos/500/500?grayscale",
      },
      {
        imglink: "https://picsum.photos/500/500?grayscale",
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
