var Reflux = require('reflux');

var FilterActions = require('../actions/FilterActions');

var FilterStore = Reflux.createStore({
  listenables: FilterActions,

  init: function() {
    this._filters = {
      read: true,
      search: ''
    }
  },

  onSearch: function(text) {
    this._filters.search = text;
    this.trigger(this._filters);
  },

  onReadFilter: function(read) {
    this._filters.read = !this._filters.read;
    this.trigger(this._filters);
  },

  getFilters: function() {
    return this._filters;
  }
});

module.exports = FilterStore;