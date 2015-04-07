var React = require("react");
var Reflux = require('reflux');
var Router = require('react-router'); 

var HeaderForOneArticle = require('./header/HeaderForOneArticle');

var ArticleForOne = require('./ArticleForOne');

//var OneArticleStore = require('../stores/OneArticleStore');
//var OneArticleActions = require('../stores/OneArticleActions');

var OneArticleStore = require('../stores/ListArticlesStore');
var OneArticleActions = require('../actions/ListArticlesActions');

var OneArticleComponent = React.createClass({
  mixins: [
    Reflux.listenTo(OneArticleStore, 'article'),
  //  Router.State,
    //Router.Navigation
  ],
 
  getInitialState: function() {
    return {
     article: OneArticleStore.getArticle(this.context.router.getCurrentParams()['articleId']),
   }
  },
   contextTypes: {
    router: React.PropTypes.func
  },
  

  render() {
    var readState = this.state.article && this.state.article.read ? 'Mark as unread' : 'Mark as read';
   
    return (
      <div className ="oneArtComp" >
        <div className='article_actions'>
     <HeaderForOneArticle/>
      <ArticleForOne article = {this.state.article}/>
        </div>
      </div>
    );
  }
});

module.exports = OneArticleComponent;
