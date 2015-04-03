var Reflux = require('reflux');
var { into, filter, compose, map, take } = require('transducers.js');

var FirebaseStore = require('./FirebaseStore');
var FirebaseActions = require('../actions/FirebaseActions');

var OneArticleActions = require('../actions/OneArticleActions');

var OneArticleStore = Reflux.createStore({
  listenables: OneArticleActions,

  init() {
    this.listenTo(FirebaseStore, OneArticleActions.receiveArticle);
    this.articles = {};
  },

  onReceiveArticle(articles) {
    this.articles = articles || {};
    this.trigger();                  // Do not pass data to event
  },

 });

module.exports = OneArticleStore;
