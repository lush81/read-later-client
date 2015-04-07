var React = require("react");


var MarkAsReadComponent = React.createClass({
  
  render: function() {
      return (
              <div className = "centerHeader">
                    <h3><a className = "markAsRead" href = "#" onClick = "showAll()">Make as read</a></h3>
                </div>
              
            )
  }
  

})


module.exports = MarkAsReadComponent;