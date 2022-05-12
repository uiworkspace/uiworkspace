import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HeroplainSliderDemo from "./demos/HeroplainSlider";
import HeroplainDemo from "./demos/Heroplain";
import Intro from "./demos/Intro";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={`nav`}>
          <Link to="/">Home</Link> |&nbsp;
          <Link to="/demos/HeroplainSlider">HeroplainSlider</Link> |&nbsp;
          <Link to="/demos/Heroplain">Heroplain</Link>
        </div>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route
            path="demos/heroplainslider"
            element={<HeroplainSliderDemo />}
          ></Route>
          <Route path="demos/heroplain" element={<HeroplainDemo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
