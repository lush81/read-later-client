var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var shortBody;

var ArticleComponent = React.createClass({
   
 shortContent(){
   var shortBody = this.props.article.content.substr(0,300)+"...";
    return shortBody;
  },
  
  render: function() {
      
return (
<div className = "contentComp">
   <div className = "contentMain">
      <div className = "content">
         <div className ="article panel panel-danger">
           <div >
               <Link to="oneArticle" params={{articleId: this.props.article.id}}>
                  <h1><b>{this.props.article.title}</b></h1>
            </Link>
            </div>
           <div className = "bodyArticle">{this.shortContent()} ...</div>
    <!--div className = "bodyArticle">{this.props.article.content}</div>-->
            <div className = "urlArticle"><a href="#"  onClick = {this.b}>{this.props.article.url}</a></div>
         </div>
      </div>
   </div>
</div>
                   )
  }
})

module.exports=ArticleComponent;