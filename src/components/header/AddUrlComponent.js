var React = require("react");
var _ = require("underscore");
//var ToolBarActions = require('../../action/ToolBarActions');
var Router = require('react-router');
var Link = Router.Link;

var AddUrlComponent = React.createClass({
    onAddUrlServer: function(e) {
    e.preventDefault();
      console.log('aa')
    var value = this.refs.url.getDOMNode().value.trim();
    this.refs.url.getDOMNode().value = '';
    this.props.onAddUrlServer(value);
  },
  
  render: function() {
      return (
        <div className = "addArticleComp">
        <div className = "readNow">
                    <Link to="app">Read Now</Link>
                </div>
                <div className = "search">
                    <form onSubmit={this.onAddUrlServer}>
                    <input className = "inputUrl" type = "text" placeholder = "http://..." ref='url'/>
                    <input  type = "submit" value="+ ADD URL"/>
                    </form>
                </div>
        </div>
            )
  }
})


module.exports = AddUrlComponent;