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
    return (
      <div className ="oneArtComp" >
         <div className = "head"> 
            <HeaderForOneArticle/>
         </div>
          <div className='articleOne'>
            <ArticleForOne article = {this.state.article}/>
        </div>
      </div>
    );
  }
});

module.exports = OneArticleComponent;