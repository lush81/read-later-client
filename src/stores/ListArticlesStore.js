var Reflux = require('reflux');

var FirebaseStore = require('./FirebaseStore');
var FilterStore = require('./FilterStore');//*****

var FirebaseActions = require('../actions/FirebaseActions');
var ListArticlesActions = require('../actions/ListArticlesActions');

var request = require('superagent');

var ListArticlesStore = Reflux.createStore({
  listenables: ListArticlesActions,

  init: function() {
   // this.listenTo(FilterStore, ListArticlesActions.filterChange);//***
    this.listenTo(FirebaseStore, ListArticlesActions.receiveArticles);//***

  //  this.filters = FilterStore.getFilters();//***
    this.articles = {};
  },

  onFilterChange: function(filters) {
    this.filters = filters;
    this.trigger(this.getArticles())
  },

  onReceiveArticles: function(articles) {
    this.articles = articles || {};
    this.trigger(this.getArticles());
  },

  onAddArticle: function(url) {
    request.post('https://read-later-server.herokuapp.com/scraper').type('form').send({url:url}).end(function(err, res){   
      this.trigger(res['text']);
    }.bind(this))
  },

   getArticle: function(id1) {///*****
     var articlesList=[];
     var articlesListObj = this.articles;
       
      for (var key in articlesListObj){
        articlesListObj[key].id = key;
        articlesList.push(articlesListObj[key]);
       }

     var article = articlesList.filter(function(a){
         return a.id == id1})[0]; 
   
    return article;
   },
  
  getArticles: function() {
    var articles = this.articles;
    console.log("fff"+articles)
    return articles
  } 
   
});





















//var Firebase = require('firebase');
//var fb = new Firebase("https://final-project-lush.firebaseio.com/");


/*var _articles = {};
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
*/
  
module.exports = ListArticlesStore;
