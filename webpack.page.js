var path = require('path');
var webpack = require('webpack');
var glob = require('glob');

module.exports = {
  entry: {
    'page': ['./src/components/page.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build/bundles')
  },
  plugins: glob.sync(path.resolve(__dirname, 'build/manifests/*.json')).map(function(file) {
    return new webpack.DllReferencePlugin({
      context: '.',
      manifest: require(path.resolve(__dirname, file))
    });
  })
};
