var React = require("react");


var ReadUnreadComponent = React.createClass({
  
  render: function() {
      return (
              <div className = "centerHeader">
                    <h3><a className = "showAll" href = "#" onClick = "showAll()">Show All</a></h3>
                </div>
                   
            )
  }
  

})


module.exports = ReadUnreadComponent;