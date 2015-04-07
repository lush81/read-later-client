var Reflux = require('reflux');
var SearchActions = require('../action/SearchActions');
var ListArticlesStore = require("../stores/ListArticlesStore");

var SearchStore = Reflux.createStore({
  mixins: [Reflux.connect(ListArticlesStore, 'articles')],
  
   getInitialState: function() {
    return { articles: []};
  },
  
  listenables: SearchActions,

 init() {
    this._search = {
    search: ''
    }
  },

  onSearch(text) {
    alert("111")
     var articlesListObj = this.state.articles;
   
    this._search.search = text;
    this.trigger(this._search);
  },

   getFilters() {
    return this._search;
  }
});

module.exports = SearchStore;