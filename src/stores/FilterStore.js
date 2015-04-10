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
  },
 
  onShowAllFilter: function(readShow) {// получили значение readShow (true/false)  из HeaderForListArticles
     this.filtersReadShow.read = !readShow;
     console.log("r " +this.filtersReadShow.read)
    this.trigger(this.filtersReadShow);
  },
    
     getFilters: function() {
   return this.filtersReadShow;
    
  }

  });

module.exports = FilterStore;