var React = require("react");
var _ = require("underscore");
var AddArticleComponent = require('./AddArticleComponent');
var SearchComponent = require('./SearchComponent');
//var art = require('../Articles');
var art = require('../Art');
var ListArticlesActions = require('../../action/ListArticlesActions');

var ToolsBarComponent = React.createClass({
  addArticle(url) {
    ListArticlesActions.addArticle(url);
  },
  
  render: function() {
      return (
     
      <div className = "ToolBarComp">
      <div className = "headerMain">
          <AddArticleComponent onAddUrlServer={this.addArticle}/>
              <!--{this.props.children}-->

                <div className = "centerHeader">
                    <h3><a className = "showAll" href = "#" onClick = "showAll()">Show All</a></h3>
                </div>
                 <SearchComponent />
                
            </div>
            
    </div>
    
            )
  }
})


module.exports = ToolsBarComponent;