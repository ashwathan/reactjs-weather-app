var express = require('express');
var compress = require('compression');

// Create our app
var app = express();

app.use(express.static('public'));

const PORT = process.env.PORT || 3000; 
app.use(compress());
app.use(function(req, res, next){
  if(req.header['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else{
    next();
  }
});

app.listen(PORT, function ( ) {
  console.log('Express server is up on port ' + PORT);
});
