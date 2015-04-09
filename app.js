var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
     response.render('public/index.html'); 
});


module.exports = app;

