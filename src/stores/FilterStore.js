var Reflux = require('reflux');

var FirebaseStore = require('../stores/FirebaseStore');
var FilterActions = require('../actions/FilterActions');
var ListArticlesActions = require('../actions/ListArticlesActions');

var FilterStore = Reflux.createStore({
  listenables: FilterActions,

  init: function() {
  
    this._filtersRead = {
     read: true,
    }
   
  },
  
  /*onSearch: function(text) {
    this._filters.search = text;
    this.trigger(this._filters);
  },*/

  onReadFilter: function(read) {
      
    this._filtersRead.read = !this._filtersRead.read;
    this.trigger(this._filtersRead);
  },

  getFilters: function() {
    return this._filtersRead;
  }
});

module.exports = FilterStore;