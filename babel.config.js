// For Jest only, not for Prod
if (process.env.NODE_ENV === "test") {
  module.exports = {
    presets: [
      ["@parcel/babel-preset-env", { targets: { node: "current" } }],
      ["@babel/preset-react", { runtime: "automatic" }],
      ["@babel/preset-typescript"],
    ],
  };
}
