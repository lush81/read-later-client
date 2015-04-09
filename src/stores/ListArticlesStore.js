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
   // console.log(articlesArray)
  },

   onAddArticle: function(url) { // получили url из HeaderForListArticles
    request.post('https://read-later-server.herokuapp.com/scraper')
      .type('form')
      .send({url:url})
      .end(function(err, res){
      this.trigger(res['text']);
    }.bind(this))
  },

  onShowAll: function(readShow) { // получили состояние readShow из FilterStore
   console.log("55" +readShow)
    this.filtersRead = readShow;
    this.trigger(this.getListArticles())
  },

   getListArticles: function() {
    // var artic = this.articles;
     
    var obj = this.filtersRead;
    // console.log("obj "+this.filtersRead)
     var articlesArr= this.parseListArticles();
     var artic = articlesArr.filter(function(a){
         return a.read != obj.read}); 
   
   return artic;
    
  },
  
  //****** для одной статьи*****//
  
  getArticle: function(id1) {///*****
    var articlesArr= this.parseListArticles();
    //console.log("55 "+JSON.stringify(articlesArr))
   console.log( articlesArr[0].id)
     var article = articlesArr.filter(function(a){
         return a.id == id1})[0]; 
   
    return article;
   },
  
  onRemoveArticle:function(id) {
    FirebaseActions.removeArticle(id);
  },

  onMakeRead: function(id) {
   // console.log("id " +JSON.stringify(id))
   /* var arr=[]
    for(var key in id){
      id[key].id = key;
      arr.push(id[key])
    }
    console.log("arr "+arr)*/
    var article = this.getArticle(id);
    console.log("aaaaaa "+JSON.stringify(article))
    article.read = !article.read;
    FirebaseActions.makeReadFirebase(id, article);
   
  }


});
  
module.exports = ListArticlesStore;
