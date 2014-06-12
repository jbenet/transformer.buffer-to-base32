var Conversion = require('transformer-conversion');
var tBuffer = require('transformer.buffer');
var tBase32 = require('transformer.base32');
// require any other modules you may need here.
var base32 = require('base32')

module.exports = Conversion(tBuffer, tBase32, convert);

// this is a synchronous conversion.
function convert(buffer) {
  return base32.encode(buffer);
}
