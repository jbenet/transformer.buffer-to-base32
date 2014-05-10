var transformer = require('dat-transformer');
var tBuffer = transformer('buffer');
var tBase32 = transformer('base32');
// require any other modules you may need here.
var base32 = require('base32')

module.exports = transformer.Conversion(tBuffer, tBase32, convert);

// this is a synchronous conversion.
function convert(buffer) {
  return base32.encode(buffer);
}
