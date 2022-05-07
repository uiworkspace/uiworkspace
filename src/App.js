import Heroplain from "./heros/src/components/Heroplain/Heroplain.js";
import "./App.scss";
// import { Heroplain } from "@uiworkspace/heros";

function App() {
  const heroPlainContent = {
    bgcolor: "white",
    bgimage: "/people.jpg",
    bgimageOverlay: 0.3,
  };
  return (
    <div className="App">
      <Heroplain styles={heroPlainContent}>
        <div className="headline">Explore Your World</div>
      </Heroplain>
    </div>
  );
}

export default App;
