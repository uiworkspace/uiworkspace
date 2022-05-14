'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');
var _slicedToArray = require('@babel/runtime/helpers/slicedToArray');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var _slicedToArray__default = /*#__PURE__*/_interopDefaultLegacy(_slicedToArray);

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z$1 = ".Heroplain-module_section__FEAG6 {\n  width: 100%;\n  height: 100vh;\n  background-size: cover;\n  background-position: center;\n}\n.Heroplain-module_section__FEAG6 .Heroplain-module_holdcontent__yv14A {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}";
var styles$1 = {"section":"Heroplain-module_section__FEAG6","holdcontent":"Heroplain-module_holdcontent__yv14A"};
styleInject(css_248z$1);

function Heroplain(props) {
  var bgcolor;
  var bgimage;
  var bgimageOverlay;
  var bgcolorDefaultValue = "white";
  var bgimageDefaultValue = "https://uiworkspace.com/images/uiw-placeholder1.jpg";
  var bgimageOverlayDefaultValue = 0.3;

  if (props.styles) {
    if (props.styles.bgcolor) {
      bgcolor = props.styles.bgcolor;
    } else {
      bgcolor = bgcolorDefaultValue;
    }

    if (props.styles.bgimage) {
      bgimage = props.styles.bgimage;
    } else {
      bgimage = bgimageDefaultValue;
    }

    if (props.styles.bgimageOverlay) {
      bgimageOverlay = props.styles.bgimageOverlay;
    } else {
      bgimageOverlay = bgimageOverlayDefaultValue;
    }
  } else if (props.styles === undefined) {
    bgimage = bgimageDefaultValue;
    bgcolor = bgcolorDefaultValue;
    bgimageOverlay = bgimageOverlayDefaultValue;
  }

  var stylesProps = {
    backgroundColor: bgcolor,
    backgroundImage: "linear-gradient(to bottom, rgba(0, 0, 0, ".concat(bgimageOverlay, "), rgba(0, 0, 0, ").concat(bgimageOverlay, ")), url(").concat(bgimage, ")")
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("section", {
    className: "".concat(styles$1.section),
    style: stylesProps
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles$1.holdcontent
  }, props.children)));
}

var css_248z = ".HeroplainSlider-module_article__uWQbR {\n  width: 100%;\n  height: 100vh;\n  position: relative;\n}\n.HeroplainSlider-module_article__uWQbR .HeroplainSlider-module_arrow__HnKkX {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  z-index: 5;\n  background: none;\n  color: inherit;\n  border: none;\n  padding: 0;\n  font: inherit;\n  cursor: pointer;\n  outline: inherit;\n  width: 48px;\n  height: 48px;\n}\n.HeroplainSlider-module_article__uWQbR .HeroplainSlider-module_arrow__HnKkX.HeroplainSlider-module_prev__28QiH {\n  left: 0.7rem;\n}\n.HeroplainSlider-module_article__uWQbR .HeroplainSlider-module_arrow__HnKkX.HeroplainSlider-module_next__-Tu0T {\n  right: 0rem;\n}\n.HeroplainSlider-module_article__uWQbR .HeroplainSlider-module_arrow__HnKkX svg {\n  position: relative;\n}\n.HeroplainSlider-module_article__uWQbR .HeroplainSlider-module_containerSlider__h9QAB {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: hidden;\n}\n.HeroplainSlider-module_article__uWQbR .HeroplainSlider-module_containerSlider__h9QAB .HeroplainSlider-module_containerSlide__fT0hh {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  opacity: 0;\n  transition: opacity ease-in-out 0.4s;\n}\n.HeroplainSlider-module_article__uWQbR .HeroplainSlider-module_containerSlider__h9QAB .HeroplainSlider-module_containerSlide__fT0hh.HeroplainSlider-module_activeAnim__tNJhv {\n  opacity: 1;\n}\n.HeroplainSlider-module_article__uWQbR .HeroplainSlider-module_containerSlider__h9QAB .HeroplainSlider-module_containerSlide__fT0hh img {\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}";
var styles = {"article":"HeroplainSlider-module_article__uWQbR","arrow":"HeroplainSlider-module_arrow__HnKkX","prev":"HeroplainSlider-module_prev__28QiH","next":"HeroplainSlider-module_next__-Tu0T","containerSlider":"HeroplainSlider-module_containerSlider__h9QAB","containerSlide":"HeroplainSlider-module_containerSlide__fT0hh","activeAnim":"HeroplainSlider-module_activeAnim__tNJhv"};
styleInject(css_248z);

function HeroplainSlider(props) {
  var sliderContent;

  if (props.content.slides) {
    sliderContent = props.content.slides;
  }

  var arrowColor;

  if (props.content.arrowColor) {
    arrowColor = props.content.arrowColor;
  } else {
    arrowColor = "white";
  }

  var width;

  if (props.content.width) {
    width = props.content.width;
  } else {
    width = "100%";
  }

  var height;

  if (props.content.height) {
    height = props.content.height;
  } else {
    height = "100vh";
  }

  var _useState = React.useState(1),
      _useState2 = _slicedToArray__default["default"](_useState, 2),
      slideIndex = _useState2[0],
      setSlideIndex = _useState2[1];

  var nextSlide = function nextSlide() {
    if (slideIndex !== sliderContent.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === sliderContent.length) {
      setSlideIndex(1);
    }
  };

  var prevSlide = function prevSlide() {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(sliderContent.length);
    }
  };

  var svgStyles = {
    fill: arrowColor
  };
  var sliderStyles = {
    width: width,
    height: height
  };
  return /*#__PURE__*/React__default["default"].createElement(React__default["default"].Fragment, null, /*#__PURE__*/React__default["default"].createElement("article", {
    className: "".concat(styles.article),
    style: sliderStyles
  }, /*#__PURE__*/React__default["default"].createElement("button", {
    className: "".concat(styles.arrow, " ").concat(styles.next),
    onClick: nextSlide
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M15.2 43.9 12.4 41.05 29.55 23.9 12.4 6.75 15.2 3.9 35.2 23.9Z",
    style: svgStyles
  }))), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "".concat(styles.arrow, " ").concat(styles.prev),
    onClick: prevSlide
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    d: "M20 44 0 24 20 4 22.8 6.85 5.65 24 22.8 41.15Z",
    style: svgStyles
  }))), /*#__PURE__*/React__default["default"].createElement("div", {
    className: styles.containerSlider
  }, sliderContent.length > 0 ? sliderContent.map(function (obj, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: obj.id,
      className: "".concat(styles.containerSlide, " ").concat(slideIndex === index + 1 ? styles.activeAnim : "")
    }, /*#__PURE__*/React__default["default"].createElement("img", {
      src: "".concat(obj.image),
      alt: ""
    }));
  }) : /*#__PURE__*/React__default["default"].createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "inherit"
    }
  }, "Add a content prop with your slides array as mentioned in the docs."))));
}

exports.Heroplain = Heroplain;
exports.HeroplainSlider = HeroplainSlider;
