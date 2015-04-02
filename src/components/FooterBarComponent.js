var React = require("react");
var _ = require("underscore");

//var ProductComponent = require('../components/ProductComponent');

var FooterBarComponent = React.createClass({
  render: function() {
      return (
<div className = "footerComp">
<div className = "footer">
                <span>Bookmarklet</span>
                <a href = "#" onClick = "readLater('flash')">+ Read later</a>
            </div>
        </div>
           )
  }
})
module.exports=FooterBarComponent;