var React = require("react");


var RemoveComponent = React.createClass({
  
  render: function() {
      return (
              <div className = "centerHeader">
                    <h3><a className = "remove" href = "#" onClick = "showAll()">Remove</a></h3>
                </div>
              
            )
  }
  

})


module.exports = RemoveComponent;