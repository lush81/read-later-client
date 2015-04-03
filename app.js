var express = require('express');
var app = express();

//var Firebase = require('firebase');
//var fb = new Firebase("https://final-project-lush.firebaseio.com/");

app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
     response.render('public/index.html'); 
});

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function start () {
  var xhr = new XMLHttpRequest();
  
  var params = 'url='+'http://swannodette.github.io/2015/03/10/scripting-clojurescript-with-javascript/';
  
  xhr.open('POST', 'http://read-later-server.herokuapp.com/scraper', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  xhr.onreadystatechange = '...';
  xhr.send(params);
}
//'url=http://swannodette.github.io/2015/03/10/scripting-clojurescript-with-javascript/'

start();
module.exports = app;

