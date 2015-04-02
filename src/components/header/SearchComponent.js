var React = require("react");
var _ = require("underscore");
var art = require('../Art');

var SearchComponent = React.createClass({
   getInitialState: function() {
      return {
          color: 'white',
         border: 'none',
      };
  },
  
  
  render: function() {
      return (
                     <div className= "leftHeader">
             <input className = "inputSearch" type = "search" placeholder = "Search" onClick = {this.search} style={{backgroundColor: this.state.color, border: this.state.border}} />
                </div>
                   
            )
  },
  search: function(){
    this.setState({
      color:'red',
        border: '1px'
      /* border-radius: '20px',
       border-style: 'solid',
      border-color:'gainsboro'*/
      });
  }
})


module.exports = SearchComponent;