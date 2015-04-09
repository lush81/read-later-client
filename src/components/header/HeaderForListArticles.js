var React = require("react");
var Reflux = require('reflux');

var Router = require('react-router');
var Link = Router.Link;

var FilterStore = require('../../stores/FilterStore');
var FilterActions = require('../../actions/FilterActions');
var ListArticlesActions = require('../../actions/ListArticlesActions');

var HeaderForListArticles = React.createClass({
   mixins: [Reflux.connect(FilterStore)],

  getInitialState: function() {
     return {
        readShow : FilterStore.getFilters() // true/false
     };
  },

  onAddUrlServer: function(e) {
    e.preventDefault();
    var value =React.findDOMNode(this.refs.url).value.trim();
    React.findDOMNode(this.refs.url).value= '';
    ListArticlesActions.addArticle(value); //  передаем значение url в ListArticlesStore
    },

  readShowFilter: function(e) { //обрабатываем клик ShowAll
    e.preventDefault();
    console.log("22222222222")
   // ListArticlesActions.showAll(this.state.readShow);// передаем состояние readShow в  ListArticlesStore
    FilterActions.showAllFilter(this.state.readShow.read);// передаем состояние readShow в  ListArticlesStore
  },

  onChangeSearch: function(event) {
    /*  //event.preventDefault();
      var value = event.target.value;
      var val = React.findDOMNode(this.refs.search).value.trim();
     console.log('val')
    // FilterActions.search(value)*/
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
           <a href="#" ref='read' onClick={this.readShowFilter}>{readState}</a>
        </div>
        <div className= "leftHeader">
           <input className="inputSearch" type="text" placeholder="Search" ref='search'  onChange={this.onChangeSearch} />
       </div>
   </div>
  )}
})


module.exports = HeaderForListArticles;