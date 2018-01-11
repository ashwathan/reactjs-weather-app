var express = require('express');
var compress = require('compression');

// Create our app
var app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 3000; 
//app.use(compress({filter: shouldCompress}))

function shouldCompress (req, res) {
  if (req.headers['x-no-compression']) {
    // don't compress responses with this request header
    console.log("No compression");
    return false
  }

  // fallback to standard filter function
  return compress.filter(req, res)
}

app.listen(PORT, function ( ) {
  console.log('Express server is up on port ' + PORT);
});
