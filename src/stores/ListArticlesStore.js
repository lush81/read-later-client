var Reflux = require('reflux');

//var FirebaseStore = require('./FirebaseStore');
//var FirebaseActions = require('../action/FirebaseActions');

var ListArticlesActions = require('../action/ListArticlesActions');

var Firebase = require('firebase');
var fb = new Firebase("https://final-project-lush.firebaseio.com/");


var _articles = {};
//fb.child("articles").on("value",  function(snapshot) {console.log(snapshot.val());})

var ListArticlesStore = Reflux.createStore({
  listenables: ListArticlesActions,

 init: function() {
    fb.child("articles").on("value", ListArticlesActions.receiveListArticles)
    
  },
 receiveListArticles: function(snapshot) {
    _articles = snapshot.val();
    this.trigger(_articles);
  },

  onSearch(text) {
    alert("111")
     var articlesListObj = this.state.articles;
   
    this._search.search = text;
    this.trigger(this._search);
  }
});

  
module.exports = ListArticlesStore;
