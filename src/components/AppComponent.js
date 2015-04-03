var React = require('react');
var Reflux = require('reflux');
var Router = require('react-router'); 
var RouteHandler = Router.RouteHandler;

var ToolsBarComponent = require('./header/ToolsBarComponent');
var FooterBarComponent = require('./FooterBarComponent');
var ContentArticlesComponent = require('./ContentArticlesComponent');
var articles = require('./Articles');
//var articles = require('./Art');
//var articles = require('../stores/FirebaseStore');
var ArticleStore =  require('../stores/ArticleStore');/////

var AppComponent = React.createClass({
  mixins: [Reflux.connect(ArticleStore, 'articles')],/////
  
  getInitialState: function() {
    return { articles: []}
  },
  
   render: function() {
    return (
      <div className="app">
       
       <ToolsBarComponent  />
       <RouteHandler/>
      <!--<ContentArticlesComponent articles={this.state.articles} />-->
      <FooterBarComponent  />
      </div>
    );
  }
})


module.exports = AppComponent;