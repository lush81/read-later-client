var Reflux = require('reflux');
//var { seq, filter, compose } = require('transducers.js');

var FirebaseStore = require('./FirebaseStore');

var ArticlesActions = require('../action/ArticlesActions');
var FirebaseActions = require('../action/FirebaseActions');

var ArticlesStore = Reflux.createStore({
  listenables: ArticlesActions,

  init() {

    this.listenTo(FirebaseStore, ArticlesActions.receiveArticles);

    this.articles = {};
  },

   onReceiveArticles(articles) {
    this.articles = articles || {};
    this.trigger(this.getArticles());
  },

  getArticles() {
    var articles = this.articles;
   
});

module.exports = ArticlesStore;
