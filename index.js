module.exports = {
  presets: [
    require('babel-preset-env')
  ],
  plugins: [
    require('babel-plugin-add-module-exports'),
    require('babel-plugin-transform-decorators'),
    require('babel-plugin-transform-export-extensions'),
    require('babel-plugin-transform-function-bind')
  ]
};