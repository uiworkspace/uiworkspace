import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import FadesliderDemo from "./demos/Fadeslider";
import HeroplainDemo from "./demos/Heroplain";
import FlixsliderDemo from "./demos/Flixslider";
import Intro from "./demos/Intro";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className={`nav`}>
          <Link to="/">Home</Link> |&nbsp;
          <Link to="/demos/fadeslider">Fadeslider</Link> |&nbsp;
          <Link to="/demos/flixslider">Flixslider</Link> |&nbsp;
          <Link to="/demos/heroplain">Heroplain</Link>
        </div>
        <Routes>
          <Route path="/" element={<Intro />}></Route>
          <Route path="demos/fadeslider" element={<FadesliderDemo />}></Route>
          <Route path="demos/flixslider" element={<FlixsliderDemo />}></Route>
          <Route path="demos/heroplain" element={<HeroplainDemo />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
