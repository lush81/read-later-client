var React = require("react");
var Reflux = require('reflux');
var _ = require("underscore");

var Router = require('react-router');
var Link = Router.Link;

var ListArticlesStore = require('../../stores/ListArticlesStore');
var FirebaseActions = require('../../actions/FirebaseActions');


var HeaderForOneArticle = React.createClass({
   mixins: [Reflux.connect(ListArticlesStore)],
  
  getInitialState: function() {
    return {
      article: ListArticlesStore.getArticle(this.context.router.getCurrentParams()['articleId'])
    };
  },
 
  onAddUrlServer: function(e) {
     e.preventDefault();
     var value =React.findDOMNode(this.refs.url).value.trim();
     React.findDOMNode(this.refs.url).value= '';
     FirebaseActions.addArticle(value); 
  },
  
  
 removeArticle: function(e) {
    var id = this.context.router.getCurrentParams()['articleId'];
    FirebaseActions.removeArticle(id, this.state.article);
 },

  onMakeRead: function(e) {
    e.preventDefault();
    this.state.article.read = !this.state.article.read;
    var id = this.context.router.getCurrentParams()['articleId'];
    FirebaseActions.makeRead(id, this.state.article);
   
  },
   contextTypes: {
    router: React.PropTypes.func
  },
  
  render: function() {
   
  var readState = this.state.article.read  ? 'Mark as unread' : 'Mark as read';
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
           <div className='remove' onClick={this.removeArticle}> <Link to="app" > Remove</Link></div>
           <a className='readComp' href='#' onClick={this.onMakeRead}>{readState}</a>
         </div>
     )
  }
})


module.exports = HeaderForOneArticle;