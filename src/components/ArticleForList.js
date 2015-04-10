var React = require('react');
var Router = require('react-router');
var Link = Router.Link;

var ArticleForList = React.createClass({

 shortContent: function(){
    var context = this.props.article.content;
    var replaceSymbol = /<[^>]+>/g;
    context = context.replace(replaceSymbol, "");
    var shortBody = context.substr(0,300)+"...";

    return shortBody;
  },

  shortUrl:function(){
    var urlFull = this.props.article.url;

    var regExpLong = new RegExp("\/*[A-Za-z0-9]+.[A-Za-z0-9.]+\/");
    var domain;
        if (regExpLong.test(urlFull.trim())) {
            var domainObj = regExpLong.exec(urlFull.trim());
            domain = domainObj[0];
        } else {
          domain =  urlFull;
        }
    var replaceSymbol = /\//g;
    domain = domain.replace(replaceSymbol, "");

    return domain;
  },

  render: function() {
   return (
      <!--<div className = "content">-->
      <div className = "article">
           <Link to="oneArticle" params={{articleId: this.props.article.id}}>
                <h2><b>{this.props.article.title}</b></h2>
           </Link>
            <div className = "bodyArticle">{this.shortContent()}</div>
            <div className = "urlArticle"><a href={this.props.article.url} >{this.shortUrl()}</a></div>
       </div>
    <!-- </div>-->
   )
  }
})

module.exports=ArticleForList;