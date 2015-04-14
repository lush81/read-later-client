 var React = require("react");
var Reflux = require('reflux');

var ListArticlesStore = require("../stores/ListArticlesStore");

var ArticleForList = require("./ArticleForList");
var HeaderForListArticles = require('./header/HeaderForListArticles');

var ListArticlesComponent = React.createClass({
  mixins: [Reflux.connect(ListArticlesStore, 'articles')],

  getInitialState: function() {
    return {
      articles: ListArticlesStore.getListArticles()
    };
  },

  render: function() {
      var artListArray=[];
      var artListObj = this.state.articles;

      for (var key in artListObj){
        artListArray.push(artListObj[key]);
       }

      var articlesList = artListArray.map(function(article, id){
         return(
           <ArticleForList
              article={article}
              key={id}
              id ={id}/>
         )
      })

    return (
    <div className = "headComp">
      <div className = "head">
         <HeaderForListArticles/>
       </div>
         <div className='content'>
           {articlesList}
         </div>
      </div>
    )
   }
})

module.exports=ListArticlesComponent;