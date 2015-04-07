var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function start () {
  var xhr = new XMLHttpRequest();
  
  var params = 'url='+'http://swannodette.github.io/2015/03/10/scripting-clojurescript-with-javascript/';
  
  xhr.open('POST', 'http://read-later-server.herokuapp.com/scraper', true);
  xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  xhr.onreadystatechange = '...';
  xhr.send(params);
}
//'url=http://swannodette.github.io/2015/03/10/scripting-clojurescript-with-javascript/'

start();