var glob = require('glob');
var path = require('path');

function getBundleFile(manifestFile) {
   return manifestFile.match(/manifests\/(\w+.dll)\.json$/)[1] + '.js';
}

function getBundleModules(manifestFile) {
  var manifestContent = require(manifestFile);
  var bundleFile = getBundleFile(manifestFile);
  var bundleModules = {};

  Object.keys(manifestContent.content).forEach(function(key) {
    var moduleSource = path.resolve(__dirname, '..', key);
    var moduleData = manifestContent.content[key];

    bundleModules[moduleSource] = {
      bundle: bundleFile,
      entry: manifestContent.name,
      id: moduleData.id,
      meta: moduleData.meta
    };
  });

  return bundleModules;
}

// Grab all the manifest files in the build folder, and then build an
// index mapping original source file (resolved) to the bundle information
// for that module.
var buildPath = path.resolve(__dirname, '../build/');
var manifestFiles = glob.sync(buildPath + '/manifests/*.json');
var bundledModules = {};

manifestFiles.forEach(function(manifestFile) {
  Object.assign(bundledModules, getBundleModules(manifestFile));
});

function findBundle(file) {
  return bundledModules[file];
}

module.exports = {
  findBundle
};
