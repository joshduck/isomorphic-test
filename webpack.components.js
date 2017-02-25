var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'button': ['./src/components/button.js'],
    'gallery': ['./src/components/gallery.js'],
  },
  output: {
    filename: '[name].dll.js',
    path: path.resolve(__dirname, 'build/bundles'),
    library: "[name]_[hash]"
  },
  plugins: [
    new webpack.DllPlugin({
        path: path.join(__dirname, "build/manifests", "[name].dll.json"),
        name: "[name]_[hash]"
    })
  ]
};
