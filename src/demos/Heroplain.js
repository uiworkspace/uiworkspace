// import Heroplain from "../uiworkspace-heros/src/components/Heroplain/Heroplain.js";
import { Heroplain } from "@uiworkspace/heros";

function HeroplainDemo() {
  const heroPlainContent = {
    bgcolor: "white",
    bgimage: "/people.jpg",
    bgimageOverlay: 0.3,
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
