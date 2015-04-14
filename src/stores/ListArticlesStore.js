var Reflux = require('reflux');

var FirebaseStore = require('./FirebaseStore');
var FilterStore = require('./FilterStore');//*****

var ListArticlesActions = require('../actions/ListArticlesActions');

var ListArticlesStore = Reflux.createStore({
  listenables: ListArticlesActions,

  init: function() {
    this.listenTo(FirebaseStore, this.receiveArticles); 
    this.listenTo(FilterStore, this.showAll); 
  // this.listenTo(FilterStore, this.search); //**
    
    this.filtersRead = FilterStore.getFilters();
 //  this.searchText = FilterStore.getSearch();//**
    this.articles = {};
    
  },
  
  receiveArticles: function(articles) { 
    //console.log("a  "+JSON.stringify(articles))
    this.articles = articles || {};
    this.trigger(this.getListArticles());
  },
  
  showAll: function() { 
    //console.log("f  "+JSON.stringify(filtersRead))
  //this.filtersRead = filtersRead;
    this.trigger(this.getListArticles())
  },
  
 /* search: function(searchText) { //*****
   //  console.log('st '+searchText)
    this.searchText.text= searchText;
    this.trigger(this.getListArticles())
  },*/
    
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
  // var objSearch = this.searchText;
    var articlesReturn;
    var articlesRead;
     console.log(JSON.stringify(objRead))
    
    if(!objRead.read){
     articlesRead=articlesArr.filter(function(a){
            return a.read !== objRead.read
        }); 
    //  articlesReturn=articlesRead;
       // return articlesRead;
     
    }else{
      articlesRead=articlesArr
    }
    
    var searchArr=[];            ///*******
   
   // var text = objSearch.text;
   // console.log('t'+objRead.text)
     if(objRead.text!==''){
        console.log('t'+objRead.text)
       console.log('444')
        for(var j=0; j<articlesRead.length; j++){
      //   var text1=text.toUpperCase();
        //  console.log(text1)
         
           if (articlesRead[j].title.toUpperCase().indexOf(objRead.text.toUpperCase())!==-1){
             searchArr.push(articlesRead[j]);
          }
        }
      articlesReturn= searchArr;
  
     }  else{  articlesReturn=articlesRead;}                             //****
   
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