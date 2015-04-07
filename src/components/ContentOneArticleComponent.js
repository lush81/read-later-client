var React = require("react");
var Reflux = require('reflux');
var Router = require('react-router');
var Link = Router.Link;

var _ = require("underscore");
//var ArticleComponent = require("./ArticleComponent");
var RemoveComponent = require('./header/RemoveComponent');
var MarkAsReadComponent = require('./header/MarkAsReadComponent');
var ListArticlesStore = require("../stores/ListArticlesStore");
var comp = require('./comp');

var ContentOneArticleComponent = React.createClass({
  mixins: [Reflux.connect(ListArticlesStore, 'articles')],
  
 getInitialState: function() {
    return { articles: {}};
  },
  /*shortContent(){
   var shortBody = this.state.articles.content.substr(0,300)+"...";
    return shortBody;
  },*/
   
  render: function() {

    console.log('dd'+this.props.params);
    var articlesList=[];
   var articlesListObj = this.state.articles;
   console.log(articlesListObj);
  
 for (var key in articlesListObj){
 articlesListObj[key].id = key;
    articlesList.push(articlesListObj[key]);
  }
  
  
    var oneArticle = articlesList[1];
   // var t = oneArticle.title;
 //  var a = function(){return <comp article={oneArticle}/>}
    console.log(oneArticle);

    var isLoaded=false;
    //if ('undefined'!=oneArticle[title]) {console.log("oneArticle[title]");}
    setTimeout(function(){
      isLoaded=true;
      var loadedObject = oneArticle;
      //var title = oneArticle['title'];
      console.log(oneArticle['title'])}, 100);
    return (
    <div className = "contentArticleaComp">
      
         <RemoveComponent />
         <MarkAsReadComponent />
         <div className = "contentMain">
      <div className = "content">
         <div className ="article panel panel-danger">
           <div >
               <a className = "titleArticle" href = "#" onClick = {this.a}>
                  <h1><b>{oneArticle}</b></h1>
               </a>
            </div>
           <div className = "bodyArticle">bbbb</div>
    <!--div className = "bodyArticle">{this.props.article.content}</div>-->
            <div className = "urlArticle"><a href="#"  onClick = {this.b}>vvv</a></div>
         </div>
      </div>
   </div>
       
           
      </div>
    )
   }                                                    
})

module.exports=ContentOneArticleComponent;