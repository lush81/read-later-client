var React = require('react');

var Router = require('react-router'); 
var RouteHandler = Router.RouteHandler;

var FooterBarComponent = require('./FooterComponent');


var AppComponent = React.createClass({
 
   render: function() {
    return (
      <div className="app">
          <RouteHandler />
          <FooterBarComponent />
      </div>
    );
  }
})


module.exports = AppComponent;