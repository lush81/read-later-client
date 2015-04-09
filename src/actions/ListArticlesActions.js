var Reflux = require('reflux');

module.exports = Reflux.createActions([
  'receiveArticles',// получение списка статьей
  'addArticle', // добавление статьи через UrlAdd
  'showAll',
  'removeArticle',// удаление статьи (одна статья)
  'makeRead' // изменение прочит/непрочит (одна статья)
]);