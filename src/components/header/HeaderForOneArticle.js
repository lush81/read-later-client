var React = require("react");
var Reflux = require('reflux');
var _ = require("underscore");

var Router = require('react-router');
var Link = Router.Link;


var FilterStore = require('../../stores/FilterStore');
var FilterActions = require('../../actions/FilterActions');
var OneArticleActions = require('../../actions/ListArticlesActions');
var HeaderForOneArticle = React.createClass({
   mixins: [Reflux.connect(FilterStore)],

  getInitialState: function() {
    return FilterStore.getFilters();
  },
  
  onAddUrlServer: function(e) {
    e.preventDefault();
      console.log('aa')
    var value = this.refs.url.getDOMNode().value.trim();
    this.refs.url.getDOMNode().value = '';
    this.props.onAddUrlServer(value);
  },
 removeArticle: function(e) {
    e.preventDefault();
   // OneArticleActions.removeArticle(this.getParams().id, this);
    OneArticleActions.removeArticle();
  },

  changeReadState: function(e) {
    e.preventDefault();
   // OneArticleActions.changeReadState(this.getParams().id);
     OneArticleActions.changeReadState();
  },
  
  render: function() {
  var readState = this.state.article && this.state.article.read ? 'Mark as unread' : 'Mark as read';
      return (
        <div className = "headerMain">
         <div className = "addArticleComp">
           <div className = "readNow">
              <Link to="app">Read Now</Link>
           </div>
           <div className = "search">
              <form onSubmit={this.onAddUrlServer}>
                 <input className = "inputUrl" type = "text" placeholder = "http://..." ref='url'/>
                 <input className = "addUrl" type = "submit" value="+ ADD URL"/>
              </form>
           </div>
        </div>
           <a className='remove' href='#' onClick={this.removeArticle}>Remove</a>
           <a className='readComp' href='#' onClick={this.changeReadState}>{readState}</a>
</div>
            )
  }
})


module.exports = HeaderForOneArticle;