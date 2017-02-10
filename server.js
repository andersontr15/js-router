var express = require('express');
var app = express();
var morgan = require('morgan');

app.use(morgan('dev'));

app.get('*', function(req, res) {
   res.sendFile(__dirname + '/public/index.html');
});

app.listen(7000, function(){
   console.log('Listening on port 7000');
});
