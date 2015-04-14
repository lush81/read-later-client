var Reflux = require('reflux');

var FirebaseStore = require('./FirebaseStore');
var FilterStore = require('./FilterStore');//*****

var ListArticlesActions = require('../actions/ListArticlesActions');

var ListArticlesStore = Reflux.createStore({
  listenables: ListArticlesActions,

  init: function() {
    this.listenTo(FirebaseStore, this.receiveArticles); 
    this.listenTo(FilterStore, this.showAll); 
     
    this.filtersRead = FilterStore.getFilters();
    this.articles = {};
    
  },
  
  receiveArticles: function(articles) { 
    this.articles = articles || {};
    this.trigger(this.getListArticles());
  },
  
  showAll: function() { 
     this.trigger(this.getListArticles())
  },
  
    
  parseListArticles:function(){
    var articlesArray = [];
    var articlesObj = this.articles;
   var searchArr=[];
    
    for (var key in articlesObj){
        articlesObj[key].id = key;
        articlesArray.push(articlesObj[key]);
    }
   return articlesArray;
  },

  getListArticles: function() {
    var objRead = this.filtersRead;
    var articlesArr=this.parseListArticles();
    var articlesReturn;
    var articlesRead;
       
    if(!objRead.read){
     articlesRead=articlesArr.filter(function(a){
            return a.read !== objRead.read
        }); 
    }else{
      articlesRead=articlesArr
    }
    
    var searchArr=[];            ///*******
   
     if(objRead.text!==''){
       for(var j=0; j<articlesRead.length; j++){
          if (articlesRead[j].title.toUpperCase().indexOf(objRead.text.toUpperCase())!==-1){
             searchArr.push(articlesRead[j]);
          }
        }
      articlesReturn= searchArr;
  
     }else{  articlesReturn=articlesRead;}                             //****
   
    return  articlesReturn;
  },
  
  getArticle: function(id1) {
    var articlesArr= this.parseListArticles();
    var article = articlesArr.filter(function(a){
         return a.id == id1})[0]; 
   
    return article;
   }
  
 });
  
module.exports = ListArticlesStore;