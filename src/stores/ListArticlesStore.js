var Reflux = require('reflux');

var FirebaseStore = require('./FirebaseStore');
var FilterStore = require('./FilterStore');//*****

var ListArticlesActions = require('../actions/ListArticlesActions');

var ListArticlesStore = Reflux.createStore({
  listenables: ListArticlesActions,

  init: function() {
    this.listenTo(FirebaseStore, this.receiveArticles); 
    this.listenTo(FilterStore, this.showAll); 
   // this.listenTo(FilterStore, this.search); 
    
    this.filtersRead = FilterStore.getFilters();
   // this.searchText = FilterStore.getSearch();
    this.articles = {};
    
  },
  
  receiveArticles: function(articles) { 
    //console.log("a  "+JSON.stringify(articles))
    this.articles = articles || {};
    this.trigger(this.getListArticles());
  },
  
  showAll: function(filtersRead) { 
    //console.log("f  "+JSON.stringify(filtersRead))
    this.filtersRead = filtersRead;
    this.trigger(this.getListArticles())
  },
  
 /* search: function(searchText) { 
     console.log('st '+searchText)
    this.searchText.text= searchText;
    this.trigger(this.getListArticles())
  },*/
    
  parseListArticles:function(){
    var articlesArray = [];
    var articlesObj = this.articles;
   
    for (var key in articlesObj){
        articlesObj[key].id = key;
        articlesArray.push(articlesObj[key]);
    }
   return articlesArray;
  },

  getListArticles: function() {
    var objRead = this.filtersRead;
    var articlesArr=this.parseListArticles();
     
     if(objRead.read){
        articlesArr= articlesArr.filter(function(a){
        return a.read !== objRead.read}); 
     }
    
   /* var searchArr=[];
    var objSearch = this.searchText;
    var text = objSearch.text;
    console.log("t "+text)
    
     console.log("1 " +!objSearch.text);
    if(objSearch.text===''){
     console.log(articlesArr)
   // return articlesArr;
     articlesArr=articlesArr;
      
  }else{
   for(var j=0; j<articlesArr.lenght; j++){
     console.log("77  "+articlesArr[j])
        if (articlesArr[j].title.indexof(text)!==-1){
          searchArr.push(articlesArr[j]);
        }
      }
   // return searchArr;
    articlesArr=searchArr;
    console.log(searchArr)
 }*/
   return  articlesArr
    
  },
  
  
  getArticle: function(id1) {
    var articlesArr= this.parseListArticles();
    var article = articlesArr.filter(function(a){
         return a.id == id1})[0]; 
   
    return article;
   }
  
 });
  
module.exports = ListArticlesStore;
