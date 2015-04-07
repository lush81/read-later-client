var React = require("react");
var Reflux = require('reflux');

var _ = require("underscore");
var ArticleComponent = require("./ArticleComponent");
var ReadUnreadComponent = require('./header/ReadUnreadComponent');
var SearchComponent = require('./header/SearchComponent');
var ListArticlesStore = require("../stores/ListArticlesStore");


var ContentArticlesComponent = React.createClass({
  mixins: [Reflux.connect(ListArticlesStore, 'articles')],
  
   getInitialState: function() {
    return { articles: {}};
  },
     
  render: function() {

    var articlesList=[];
    
    var articlesListObj = this.state.articles;
    console.log(articlesListObj)
  
 for (var key in articlesListObj){
 articlesListObj[key].id = key;
   articlesList.push(articlesListObj[key]);
  
  }
  
   var articlesList1 = articlesList.map(function(article, index){
     return( 
          
        <ArticleComponent
         article={article}
          key={index}/>
           )
      
    }
)
    return (
    <div className = "contentArticleaComp">
      
         <ReadUnreadComponent />
         <SearchComponent />
     {articlesList1}
      
      </div>
    )
   }                                                    
})

module.exports=ContentArticlesComponent;