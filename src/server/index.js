require("@babel/core").transform("code", {
  plugins: ["@babel/plugin-transform-runtime"]
});

require("@babel/register")({
  ignore: [/(node_modules)/],
  presets: ["@babel/preset-env", "@babel/preset-react"]
});

require("./server.js");
