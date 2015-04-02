var express = require('express');
//var path = require('path'); // модуль для парсинга пути
//var bodyParser = require('body-parser');
var app = express();

//app.use(express.logger('dev')); // выводим все запросы со статусами в консоль
//app.use(bodyParser()); // стандартный модуль, для парсинга JSON в запросах

//app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)

/*app.get('/', function (req, res) {
  res.send('Hello, World!')
})
*/


//app.set('port', (process.env.PORT || 4000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
     response.render('public/index.html'); 
});

//app.listen(app.get('port'), function() {
 // console.log("Node app is running at localhost:" + app.get('port'));
//});

module.exports = app;

