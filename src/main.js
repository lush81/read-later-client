var React = require('react');

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var AppComponent = require('./components/AppComponent');
var ListArticlesComponent = require('./components/ListArticlesComponent');
var OneArticleComponent = require('./components/OneArticleComponent');



var routes = (
  <Route name="app" path="/" handler={AppComponent} >
     <Route name="oneArticle" path="/articles/:articleId" handler={OneArticleComponent} />
     <DefaultRoute handler={ListArticlesComponent}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler){
  React.render(<Handler />, document.getElementById('app'));
});

