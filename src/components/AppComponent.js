var React = require('react');

var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var FooterComponent = require('./FooterComponent');


var AppComponent = React.createClass({
   render: function() {
    return (
      <div className="app">
          <RouteHandler />
          <FooterComponent />
      </div>
    );
  }
})


module.exports = AppComponent;