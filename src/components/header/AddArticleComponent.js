var React = require("react");
var _ = require("underscore");
var ToolBarActions = require('../../action/ToolBarActions');
var Router = require('react-router');
var Link = Router.Link;

var AddArticleComponent = React.createClass({
  addArticle: function(event) {
    event.preventDefault();
      ToolBarActions.articleAdd(this.props.art[0].url);
      //ToolBarActions.articleAdd(this.props.art.url);
   
    console.log(this.props.art[0].url);
  },
  
  render: function() {
      return (
        <div className = "addArticleComp">
        <div className = "readNow">
                    <Link to="app">Read Now</Link>
                </div>
                <div className = "search">
                    <form onSubmit={this.onAddUrlServer}>
                    <input className = "inputUrl" type = "text" placeholder = "http://..." />
                    <button  type = "submit"  onClick = {this.addArticle}>+ ADD URL</button>
                    </form>
                </div>
        </div>
            )
  }
})


module.exports = AddArticleComponent;