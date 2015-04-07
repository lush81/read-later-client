var React = require("react");
var Reflux = require('reflux');
var _ = require("underscore");

var Router = require('react-router');
var Link = Router.Link;


var FilterStore = require('../../stores/FilterStore');
var FilterActions = require('../../actions/FilterActions');
var ListArticlesActions = require('../../actions/ListArticlesActions');

var HeaderForListArticles = React.createClass({
   mixins: [Reflux.connect(FilterStore)],

  getInitialState: function() {
    return FilterStore.getFilters();
  },
  readFilter: function(e) {
   // e.preventDefault();
   var value = e.target.value;
     var val7 = this.refs.read.getDOMNode().value;
    FilterActions.readFilter(this.state.read);//***
 console.log(val7)
  },
  onAddUrlServer: function(e) {
    e.preventDefault();
      console.log('aa')
    var value = this.refs.url.getDOMNode().value.trim();
    this.refs.url.getDOMNode().value = '';
      console.log(value)
      ListArticlesActions.addArticle(value);
    },
  onChangeSearch: function(event) {
      //event.preventDefault();
 var value = event.target.value;
    //this.setState({ search: this.refs.search.getDOMNode().value });
      //SearchActions.search(this.refs.search.getDOMNode().value);
     var val = React.findDOMNode(this.refs.search).value.trim();
     console.log('val')
    // FilterActions.search(value)
   },
  
  render: function() {
     var content = this.state.read ? 'Show All' : 'Show "unread" only';
      return (
        <div className = "headerMain">
          <div className = "addArticleComp">
            <div className = "readNow">
               <Link to="app">Read Now</Link>
            </div>
            <div className = "search">
               <form onSubmit={this.onAddUrlServer}>
                 <input className = "inputUrl" type = "text" placeholder = "http://..." ref='url'/>
                 <input  className = "addUrl" type = "submit" value="+ ADD URL"/>
               </form>
            </div>
         </div>
        <div className = "readComp">
           <a href="#" ref='read' onClick={this.readFilter}>{content}</a>
        </div>
        <div className= "leftHeader">
         <!-- <input className = "inputSearch" type = "search" placeholder = "Search" ref='search' value=                 {this.state.search} onKeyUp={this.onChangeSearch} /> -->
           <input className = "inputSearch" type = "text" placeholder = "Search" ref='search'  onChange ={this.onChangeSearch} />
       </div>
   </div>
            )
  }
})


module.exports = HeaderForListArticles;