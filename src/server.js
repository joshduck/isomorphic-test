var express = require('express');
var Page = require('./components/page');
var app = express();

app.use(express.static('build'));

function printManifestInfo(name) {
  var manifest = require('../build/' + name + '.manifest.json');
  console.log('Bundle: ' + name);
  console.log('Source: /' + name + '.dll.js');
  console.log('Interface: window.' + manifest.name + '(<module id>)');
  console.log('Module contents:');
  Object.keys(manifest.content).forEach(function(src, i) {
    console.log(' <' + manifest.content[src].id + '> ' + src);
  });
  console.log('');
}

printManifestInfo('button');
printManifestInfo('gallery');

app.get('/', function (req, res) {
  res.send('Hello World!' + Page() +
    '<script type="text/javascript" src="/button.dll.js"></script>' +
    '<script type="text/javascript" src="/gallery.dll.js"></script>' +
    '<script type="text/javascript" src="/page.bundle.js"></script>'
  );
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
