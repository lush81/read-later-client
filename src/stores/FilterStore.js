var Reflux = require('reflux');

var FirebaseStore = require('../stores/FirebaseStore');
var FilterActions = require('../actions/FilterActions');
var ListArticlesActions = require('../actions/ListArticlesActions');

var FilterStore = Reflux.createStore({
  listenables: FilterActions,

  init: function() {
      this.filtersReadShow = {
      read: true,
    }
   /*  this.search={
     text : ''
   }*/
  },
 
  showAllFilter: function(readShow) {
   // console.log(readShow)
     this.filtersReadShow.read=readShow;
     this.trigger(this.filtersReadShow);
  },
/*   onSearch: function(value){
     this.search = value;
     this.trigger(this.search);
     
   },*/
  getFilters: function() {
    return this.filtersReadShow;
  },

  /*getSearch:function(){
    return  this.search;
  }*/
  });

module.exports = FilterStore;