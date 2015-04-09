var React = require("react");
var Reflux = require('reflux');
var Router = require('react-router'); 

var HeaderForOneArticle = require('./header/HeaderForOneArticle');

var ArticleForOne = require('./ArticleForOne');

var ListArticlesStore = require('../stores/ListArticlesStore');

var OneArticleComponent = React.createClass({
  mixins: [
    Reflux.listenTo(ListArticlesStore, 'article'),
  ],
 
  getInitialState: function() {
    return {
     article: ListArticlesStore.getArticle(this.context.router.getCurrentParams()['articleId']),
   }
  },
   contextTypes: {
    router: React.PropTypes.func
  },
  

  render() {
    var readState = this.state.article && this.state.article.read ? 'Mark as unread' : 'Mark as read';
   console.log(this.context.router.getCurrentParams()['articleId'])
    return (
      <div className ="oneArtComp" >
        <div className='articleOne'>
     <HeaderForOneArticle/>
      <ArticleForOne article = {this.state.article}/>
        </div>
      </div>
    );
  }
});

module.exports = OneArticleComponent;