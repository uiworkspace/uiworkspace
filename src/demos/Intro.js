import logo from "../logo.svg";
function Intro() {
  const pageStyles = {
    display: "flex",
    width: "100%",
    height: "50vh",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  };
  const imgStyles = {
    width: "30px",
    height: "auto",
    display: "block",
    position: "relative",
  };
  return (
    <div style={pageStyles}>
      <img src={logo} alt="uiworkspace logo" style={imgStyles} />
      <h1>Welcome to uiworkspace 0.1.0 Demos</h1>
    </div>
  );
}

export default Intro;
