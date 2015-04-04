//import "!style!css!less!../stylesheets/main1.less";
var React = require('react');
var Router = require('react-router');//****
var DefaultRoute = Router.DefaultRoute;

var AppComponent = require('./components/AppComponent');
var ContentArticlesComponent = require('./components/ContentArticlesComponent');
var comp = require('./components/comp');
//var articles = require('./components/Articles');
//var articles = require('./stores/FirebaseStore');


window.React = React;

var Route = Router.Route;

var routes = (
  <Route name="app" path="/" handler={AppComponent} >
     <Route name="articles" path="/articles/:articleId" handler={comp} />
     <DefaultRoute handler={ContentArticlesComponent}/>
  </Route>
);

Router.run(routes, function (Handler){
  React.render(<Handler />, document.getElementById('app'));
});


/*React.render(
  <AppComponent  articles = {articles}/>,
  document.getElementById('app'));
*/
//Backend.fetch();