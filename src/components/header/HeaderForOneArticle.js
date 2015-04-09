var React = require("react");
var Reflux = require('reflux');
var _ = require("underscore");

var Router = require('react-router');
var Link = Router.Link;

var ListArticlesStore = require('../../stores/ListArticlesStore');
var FilterStore = require('../../stores/FilterStore');

var FirebaseActions = require('../../actions/FirebaseActions');
var FilterActions = require('../../actions/FilterActions');
var ListArticlesActions = require('../../actions/ListArticlesActions');

var HeaderForOneArticle = React.createClass({
   mixins: [Reflux.connect(ListArticlesStore)],
  // mixins: [Reflux.connect(ListArticlesStore, 'onChangeRead')],
  getInitialState: function() {
    return {
      //readState:FilterStore.getMakeReadFilters()
      read: ListArticlesStore.getArticle(this.context.router.getCurrentParams()['articleId']).read
    };
  },
 /*  onChangeRead(article) {
    this.setState({
      read: ListArticlesStore.getArticle(this.context.router.getCurrentParams()['articleId']).read
    });
  },*/
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
    ListArticlesActions.removeArticle(this.context.router.getCurrentParams()['articleId']);
   //FirebaseActions.removeArticle(this.context.router.getCurrentParams()['articleId']);
  },

  makeRead: function(e) {
    e.preventDefault();
   // OneArticleActions.changeReadState(this.getParams().id);
    console.log("1111  " + (this.context.router.getCurrentParams()['articleId']));
  ListArticlesActions.makeRead(this.context.router.getCurrentParams()['articleId']);
      // FirebaseActions.makeReadFirebase(this.context.router.getCurrentParams()['articleId'], this.readState);
  },
   contextTypes: {
    router: React.PropTypes.func
  },
  
  render: function() {
  //  var atricleArr =this.state.article;
    //var art = atricleArr.read
    console.log("ww"+ this.state.read)
  var readState = this.state.read  ? 'Mark as unread' : 'Mark as read';
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
           <a className='readComp' href='#' onClick={this.makeRead}>{readState}</a>
          
</div>
            )
  }
})


module.exports = HeaderForOneArticle;