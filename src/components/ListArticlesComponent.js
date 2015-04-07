var React = require("react");
var Reflux = require('reflux');
var _ = require("underscore");

var ListArticlesStore = require("../stores/ListArticlesStore");

var ArticleForList = require("./ArticleForList");
var ReadComponent = require('./header/ReadComponent');
var SearchComponent = require('./header/SearchComponent');
var AddUrlComponent = require('./header/AddUrlComponent');

var HeaderForListArticles = require('./header/HeaderForListArticles');

var ListArticlesComponent = React.createClass({
  mixins: [Reflux.connect(ListArticlesStore, 'articles')],
  
    getInitialState: function() {
    return {
      articles: ListArticlesStore.getArticles()//******
    };
  },
     
  render: function() {
      var articlesList=[];
       var articlesListObj = this.state.articles;
          console.log(articlesListObj)
  
       for (var key in articlesListObj){
          articlesListObj[key].id = key;
          articlesList.push(articlesListObj[key]);
       }
  console.log("lc   " +  articlesList)
      var articlesList1 = articlesList.map(function(article, id){
         return( 
           <ArticleForList
              article={article}
              key={id}
              id ={id}/>
         )
      }
     )
   
    
    return (
    <div className = "listArticlesComp">
      <div className = "head">
         <HeaderForListArticles/>
       </div>
        <div className='main-container'>
          <div className='main'>
           {articlesList1}
          </div>
      </div>
    </div>
    )
   }                                                    
})

module.exports=ListArticlesComponent;