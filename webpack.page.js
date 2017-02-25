var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: {
    'page': ['./src/components/page.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./build/button.manifest.json')
    }),
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: require('./build/gallery.manifest.json')
    }),
  ]
};
