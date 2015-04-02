//import "!style!css!less!../stylesheets/main1.less";
var React = require('react');
//var Router = require('react-router');//****

var AppComponent = require('./components/AppComponent');
var articles = require('./components/Articles');
//var Backend = require('./utils/backendSync');

window.React = React;


/*var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={App} >
    <Route name="articles" path="articles" handler={articles} />
   
  </Route>
);

Router.run(routes, function (Handler){
  React.render(<Handler />, document.getElementById('app'));
});
*/

React.render(
  <AppComponent  articles = {articles}/>,
  document.getElementById('app'));

//Backend.fetch();