var React = require("react");
var Reflux = require('reflux');

var FilterStore = require('../../stores/FilterStore');
var FilterActions = require('../../actions/FilterActions');

var ReadUnreadComponent = React.createClass({
  mixins: [Reflux.connect(FilterStore)],

  getInitialState: function() {
    return FilterStore.getFilters();
  },
  readFilter: function(e) {
    e.preventDefault();
    FilterActions.readFilter(this.state.read);//***
  },
  render: function() {
   var content = this.state.read ? 'Show All' : 'Show "unread" only';
    return (
       <div className = "readComp">
         <a href="#" onClick={this.readFilter}>{content}</a>
       </div>
   )
  }
})


module.exports = ReadUnreadComponent;