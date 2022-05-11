import HeroplainSlider from "./heros/src/components/HeroplainSlider/HeroplainSlider.js";
import "./App.scss";
// import { Heroplain } from "@uiworkspace/heros";

function App() {
  // const heroPlainContent = {
  //   bgcolor: "white",
  //   bgimage: "/people.jpg",
  //   bgimageOverlay: 0.3,
  // };

  const sliderContent = [
    {
      id: 1,
      image: "/people.jpg",
      copy: "Headline 1",
    },
    {
      id: 2,
      image: "/x1.jpg",
      copy: "Headline 2",
    },
  ];
  return (
    <div className="App">
      {/* <Heroplain styles={heroPlainContent}>
        <div className="headline">Explore Your World</div>
      </Heroplain> */}
      <HeroplainSlider content={sliderContent}></HeroplainSlider>
    </div>
  );
}

export default App;
