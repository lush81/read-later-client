var React = require("react");
var Reflux = require('reflux');
var Router = require('react-router'); 

var AddUrlComponent = require('./header/AddUrlComponent');

var ArticleForOne = require('./ArticleForOne');

//var OneArticleStore = require('../stores/OneArticleStore');
//var OneArticleActions = require('../stores/OneArticleActions');

var OneArticleStore = require('../stores/ListArticlesStore');
var OneArticleActions = require('../actions/ListArticlesActions');

var OneArticleComponent = React.createClass({
  mixins: [
    Reflux.listenTo(OneArticleStore, 'onArticleUpdate'),
  //  Router.State,
    //Router.Navigation
  ],

  getInitialState: function() {
    return {
    //  article: OneArticleStore.getArticle(this.getParams().id)
       article: OneArticleStore.getArticle(this.id)
    }
  },

  onArticleUpdate: function(articles) {
    this.setState({
      //article: OneArticleStore.getArticle(this.getParams().id)
      article: OneArticleStore.getArticle()
    });
  },

  removeArticle(e) {
    e.preventDefault();
   // OneArticleActions.removeArticle(this.getParams().id, this);
    OneArticleActions.removeArticle();
  },

  changeReadState(e) {
    e.preventDefault();
   // OneArticleActions.changeReadState(this.getParams().id);
     OneArticleActions.changeReadState();
  },

  render() {
    var readState = this.state.article && this.state.article.read ? 'Mark as unread' : 'Mark as read';

    var articlesList=[];
       var articlesListObj = this.state.article;
          console.log(articlesListObj)
        
    
    return (
      <div className ="oneArtComp" >
        
          <div className='article_actions'>
      <AddUrlComponent/>
            <a className='remove' href='#' onClick={this.removeArticle}>Remove</a>
            <a className='read' href='#' onClick={this.changeReadState}>{readState}</a>
          </div>
    
      <div className='main'>
          <div className='article'>
            <ArticleForOne article={this.state.article} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = OneArticleComponent;
