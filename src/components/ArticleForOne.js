var React = require('react');

var ArticleForOne = React.createClass({

  articleContent:function() {
      return { __html: this.props.article.content }
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

   render() {
    return (
      <div className ="artForOneComp">
        <div>
          <h1><b>{this.props.article.title}</b></h1>
      </div>
      <div>
          <a className = "urlOne" href = {this.props.article.url}> {this.shortUrl()} </a>
        </div>
        <div >
            <div dangerouslySetInnerHTML= {this.articleContent()} />
        </div>
      </div>
    );
  }
});

module.exports = ArticleForOne;