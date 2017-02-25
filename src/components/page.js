const Gallery = require('./gallery');
const Button = require('./button');

module.exports = function() {
  return 'Page with ' + Button() + ' ' + Gallery();
}
