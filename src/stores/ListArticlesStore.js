var Reflux = require('reflux');

var FirebaseStore = require('./FirebaseStore');
var FilterStore = require('./FilterStore');//*****

var FirebaseActions = require('../actions/FirebaseActions');
var FilterActions = require('../actions/FilterActions');
var ListArticlesActions = require('../actions/ListArticlesActions');

var request = require('superagent');

var ListArticlesStore = Reflux.createStore({
  listenables: ListArticlesActions,

  init: function() {
    this.listenTo(FirebaseStore, this.onReceiveArticles); 
    this.listenTo(FilterStore, this.onShowAll); 
    
   this.filtersRead = FilterStore.getFilters();
   
     this.articles = {};
    
  },
  
  onReceiveArticles: function(articles) {
   this.articles = articles || {};
    this.trigger(this.getListArticles());
  },
  
  parseListArticles:function(){
    var articlesArray = [];
    var articlesObj = this.articles;
   
    for (var key in articlesObj){
      console.log("k "+key)
        articlesObj[key].id = key;
        articlesArray.push(articlesObj[key]);
    }
       
   return articlesArray;
},

   onShowAll: function() { // вызывается по изменению FilterStore
    this.trigger(this.getListArticles())
  },

   getListArticles: function() {
    var obj = this.filtersRead;
    var articlesArr=this.parseListArticles();;
     
     if(obj.read){
          articlesArr= articlesArr.filter(function(a){
          return a.read !== obj.read}); 
     }
      return articlesArr;
 },
  
  //****** для одной статьи*****//
  
  getArticle: function(id1) {///*****
    var articlesArr= this.parseListArticles();
    var article = articlesArr.filter(function(a){
         return a.id == id1})[0]; 
   
    return article;
   }
  
 });
  
module.exports = ListArticlesStore;
