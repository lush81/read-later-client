var React = require("react");
var Reflux = require('reflux');
//var debounce = require('lodash').debounce;

var FilterActions = require('../../actions/FilterActions');
var FilterStore = require('../../stores/FilterStore');

var SearchComponent = React.createClass({
  mixins: [Reflux.connect(FilterStore)],

  getInitialState: function() {
    return FilterStore.getFilters();//***
  },

  /*componentWillMount() {
    this.handleSearchDebounced = debounce(() => {
      FilterActions.search(this.state.search);
    }, 500);
  },*/
  
   onChangeSearch: function(event) {
      //event.preventDefault();
 var value = event.target.value;
    //this.setState({ search: this.refs.search.getDOMNode().value });
      //SearchActions.search(this.refs.search.getDOMNode().value);
     var val = React.findDOMNode(this.refs.search).value.trim();
     console.log('val')
    // FilterActions.search(value)
   },
  
  render: function() {
     return (
       <div className= "leftHeader">
         <!-- <input className = "inputSearch" type = "search" placeholder = "Search" ref='search' value=                 {this.state.search} onKeyUp={this.onChangeSearch} /> -->
         <input className = "inputSearch" type = "text" placeholder = "Search" ref='search'  onChange ={this.onChangeSearch} />
       </div>
      )
  }
})


module.exports = SearchComponent;