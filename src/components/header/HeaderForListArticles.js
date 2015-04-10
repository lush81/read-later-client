var React = require("react");
var Reflux = require('reflux');

var Router = require('react-router');
var Link = Router.Link;

var FilterStore = require('../../stores/FilterStore');
var FilterActions = require('../../actions/FilterActions');
var FirebaseActions = require('../../actions/FirebaseActions');
//var ListArticlesActions = require('../../actions/ListArticlesActions');

var HeaderForListArticles = React.createClass({
   mixins: [Reflux.connect(FilterStore)],

  getInitialState: function() {
     return {
        readShow : FilterStore.getFilters()
     };
  },

  onAddUrlServer: function(e) {
     e.preventDefault();
     var value =React.findDOMNode(this.refs.url).value.trim();
     React.findDOMNode(this.refs.url).value= '';
     FirebaseActions.addArticle(value); 
  },
  
  readShowFilter: function(e) { 
    e.preventDefault();
    this.state.readShow.read = ! this.state.readShow.read;
    FilterActions.showAllFilter(this.state.readShow.read);
  },

  onChangeSearch: function(event) { ////******
   event.preventDefault();
     // var value = event.target.value;
      var value = React.findDOMNode(this.refs.search).value;
    console.log("v "+value)
       FilterActions.search(value);
  },

  render: function() {
     var readState = this.state.readShow.read ? 'Show All' : 'Show "unread" only';

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
           <a className = "showAll" href="#" ref='read' onClick={this.readShowFilter}>{readState}</a>
        </div>
        <div className= "leftHeader">
           <input className="inputSearch" type="text" placeholder="Search" ref='search'  onChange={this.onChangeSearch} />
       </div>
   </div>
  )}
})


module.exports = HeaderForListArticles;