var React = require("react");
var Reflux = require('reflux');

var _ = require("underscore");
var ArticleComponent = require("./ArticleComponent");
var ListArticlesStore = require("../stores/ListArticlesStore");


var a = React.createClass({
  mixins: [Reflux.connect(ListArticlesStore, 'articles')],
  
   getInitialState: function() {
    return { articles: []};
  },
  
   
  render: function() {
    var articlesList=[];
    var articlesListObj = this.state.articles;
    
  
 for (var key in articlesListObj){
 articlesListObj[key].id = key;
    articlesList.push(articlesListObj[key]);
  }
   console.log(articlesList)       
    return (
    <div className = "contentArticleaComp">
    <ArticleComponent
         article={articlesList[0]} />
      
      </div>
    )
   }                                                    
})

module.exports=a;