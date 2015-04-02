var React = require("react");
var _ = require("underscore");
var ArticleComponent = require("./ArticleComponent");
//var ProductComponent = require('../components/ProductComponent');

var ContentArticlesComponent = React.createClass({
  render: function() {
    
   var articlesList = this.props.articles.map(function(article, index){
      return( <ArticleComponent
         article={article}
          key={index}/>
           );
      
    }
)
    return (
    <div className = "contentArticleaComp">
       {articlesList}
      </div>
    )
   }                                                    
})

module.exports=ContentArticlesComponent;