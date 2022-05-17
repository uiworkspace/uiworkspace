import Heroplain from "../uiworkspace-core/src/components/Heroplain/Heroplain.js";
// import { Heroplain } from "@uiworkspace/core";

function HeroplainDemo() {
  const heroPlainContent = {
    bgimage: "/people.jpg",
    bgcolor: "white", //optional
    bgimageOverlay: 0.2, //optional
  };

  return (
    <div>
      <Heroplain styles={heroPlainContent}>
        <div className="headline">Explore Your World</div>
      </Heroplain>
    </div>
  );
}

export default HeroplainDemo;
