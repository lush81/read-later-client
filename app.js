var express = require('express');
var path = require('path'); // модуль для парсинга пути
var bodyParser = require('body-parser');
var app = express();

//app.use(express.logger('dev')); // выводим все запросы со статусами в консоль
app.use(bodyParser()); // стандартный модуль, для парсинга JSON в запросах

app.use(express.static(path.join(__dirname, "public"))); // запуск статического файлового сервера, который смотрит на папку public/ (в нашем случае отдает index.html)

/*app.get('/', function (req, res) {
  res.send('Hello, World!')
})
*/
module.exports = app;

