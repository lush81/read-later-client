var Reflux = require('reflux');

var FirebaseStore = require('../stores/FirebaseStore');
var FilterActions = require('../actions/FilterActions');
var ListArticlesActions = require('../actions/ListArticlesActions');

var FilterStore = Reflux.createStore({
  listenables: FilterActions,

  init: function() {
      this.filtersReadShow = {
      read: true,
      text : ''
    }
  /* this.search={   //****
     text : ''
   }*/
  },
 
  showAllFilter: function(value) {
    this.filtersReadShow.read=value;
     this.trigger(this.filtersReadShow);
  },
 onSearch: function(value){  //****
    this.filtersReadShow.text = value;
     this.trigger(this.filtersReadShow);
  },
  getFilters: function() {
    return this.filtersReadShow;
  },

 /*getSearch:function(){   //****
    return  this.search;
  }*/
  });

module.exports = FilterStore;