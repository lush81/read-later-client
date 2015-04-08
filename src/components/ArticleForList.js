var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

//var LinkToOriginal = require('../LinkToOriginal');//***


var ArticleForList = React.createClass({
   
 shortContent: function(){
   var shortBody = this.props.article.content.substr(0,300)+"...";
    return shortBody;
  },
  
  render: function() {
    console.log(this.props.article)
    return (
      <div className = "content">
      <div className = "article">
           <Link to="oneArticle" params={{articleId: this.props.article.id}}>
                <h1><b>{this.props.article.title}</b></h1>
           </Link>
           <div className = "bodyArticle">{this.shortContent()}</div>
    <!--div className = "bodyArticle">{this.props.article.content}</div>-->
            <div className = "urlArticle"><a href="#" >{this.props.article.url}</a></div>
       </div>
      </div>
   )
  }
})

module.exports=ArticleForList;