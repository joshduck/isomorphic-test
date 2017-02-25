var express = require('express');
var Page = require('./components/page');
var bundles = require('./bundles');
var html = require('./html');
var app = express();

app.use(express.static('build/bundles'));


app.get('/', function (req, res) {
  var body = ['Hello World!'];

  // Server rendering
  body.push(Page());

  // Simulate requiring multiple isomorphic components as a side-effect of
  // server rendering.
  var bundledModules = [
    bundles.findBundle(require.resolve('./components/button')),
    bundles.findBundle(require.resolve('./components/gallery')),
  ];

  // Render script tags for isomorphic components.
  body = body.concat(bundledModules.map(function(module) { return html.includeBundle(module.bundle); }));

  // Log the module bodies for button and gallery to console, to show that we
  // can correctly reach inside the bundle.
  body = body.concat(bundledModules.map(html.logBundledModule));

  // Simulate a non DLL/component JS, so that we can see it smoothly integrating
  // with the DLL components.
  body.push(html.includeBundle('page.bundle.js'));

  res.send(body.join('\n'));
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
