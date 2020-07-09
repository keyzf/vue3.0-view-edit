module.exports = {
  presets:
    [
      [
        "@babel/preset-env",
        {
          "targets": {
            "browsers": ["last 2 versions", "ie >= 7"]
          }
        }
      ]
    ],
  plugins: [
    "@babel/plugin-transform-arrow-functions"
  ]
};