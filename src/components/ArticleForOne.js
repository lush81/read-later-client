var React = require('react');
//var Highlight = require('react-highlight');
//var LinkToOriginal = require('../LinkToOriginal');

var ArticleForOne = React.createClass({
   render() {
    return (
      <div className ="artForOneComp">
        <div>
          <h1>{this.props.article.title}</h1>
          <p> {this.props.article.url} </p>
        </div>

        <div>
          {this.props.article.content}
        </div>
      </div>
    );
  }
});

module.exports = ArticleForOne;