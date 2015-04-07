var React = require("react");
var _ = require("underscore");

var FooterComponent = React.createClass({
  render: function() {
      return (
       <div className = "footerComp">
              <div className = "footer">
                <span>Bookmarklet</span>
                <a href = "#" >+ Read later</a>
            </div>
        </div>
           )
  }
})
module.exports=FooterComponent;