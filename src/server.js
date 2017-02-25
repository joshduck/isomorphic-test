var express = require('express');
var Page = require('./components/page');
var app = express();

app.use(express.static('build'));

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
