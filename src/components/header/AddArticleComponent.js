var React = require("react");
var _ = require("underscore");
var ToolBarActions = require('../../action/ToolBarActions');

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
                    <h3><a href = "#" onClick = "">Read Now</a></h3>
                </div>
                <div className = "search">
                    <!--<form>-->
                    <input className = "inputUrl" type = "text" placeholder = "http://..." />
                    <button  type = "submit" onClick = {this.addArticle}>+ ADD URL</button>
                    <!--</form>-->
                </div>
        </div>
            )
  }
})


module.exports = AddArticleComponent;