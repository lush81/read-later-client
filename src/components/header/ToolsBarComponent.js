var React = require("react");
var _ = require("underscore");
var AddArticleComponent = require('./AddArticleComponent');
var SearchComponent = require('./SearchComponent');
//var art = require('../Articles');
var art = require('../Art');

var ToolsBarComponent = React.createClass({
  render: function() {
      return (
     
      <div className = "ToolBarComp">
      <div className = "headerMain">
          <AddArticleComponent art={art}/>


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