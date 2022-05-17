import styles from "rollup-plugin-styles";
const autoprefixer = require("autoprefixer");
import { terser } from "rollup-plugin-terser";
import babel from "@rollup/plugin-babel";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";

// the entry point for the library
const input = "src/index.js";

//
var MODE = [
  {
    fomart: "cjs",
  },
  {
    fomart: "esm",
  },
  {
    fomart: "umd",
  },
];

var config = [];

MODE.map((m) => {
  var conf = {
    input: input,
    output: {
      // then name of your package
      name: "uiworkspace",
      file: `dist/index.${m.fomart}.js`,
      format: m.fomart,
      exports: "auto",
    },
    // this externelizes react to prevent rollup from compiling it
    external: ["react", /@babel\/runtime/],
    plugins: [
      postcss({
        extract: false,
        modules: true,
        use: ["sass"],
      }),
      // these are babel comfigurations
      babel({
        exclude: "node_modules/**",
        plugins: ["@babel/transform-runtime"],
        babelHelpers: "runtime",
      }),
      // this adds sourcemaps
      //   sourcemaps(),
      // this adds support for styles
      styles({
        postcss: {
          plugins: [autoprefixer()],
        },
      }),
      copy({
        targets: [
          { src: "./dist/", dest: "../../../uiworkspace-dist/sliders/" },
          { src: "./package.json", dest: "../../../uiworkspace-dist/sliders/" },
          { src: "./README.md", dest: "../../../uiworkspace-dist/sliders/" },
        ],
      }),
    ],
  };
  config.push(conf);
});

export default [...config];
