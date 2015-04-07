var React = require("react");
var Reflux = require('reflux');

var SearchActions = require('../../action/SearchActions');
var ListArticlesActions = require('../../action/ListArticlesActions');
var SearchStore = require('../../stores/SearchStore');
var ListArticlesStore = require('../../stores/ListArticlesStore');

var SearchComponent = React.createClass({
  mixins: [Reflux.connect(ListArticlesStore)],

 getInitialState() {
    return {search: '' }
  },
  
   onChangeSearch: function(event) {
      //event.preventDefault();
 var value = event.target.value;
    //this.setState({ search: this.refs.search.getDOMNode().value });
      //SearchActions.search(this.refs.search.getDOMNode().value);
     var val = React.findDOMNode(this.refs.search).value.trim();
     console.log('val')
     ListArticlesActions.search(value)
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