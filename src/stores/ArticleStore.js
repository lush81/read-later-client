var Reflux = require('reflux');
var extend = require('underscore').extend;

var ToolBarActions = require('../action/ToolBarActions');
var backend = require('../utils/backend');

//var Art = require('../components/Articles');
var Art = require('../components/Art');

var ArticleStore = Reflux.createStore({
  listenables: ToolBarActions,
      
  init() {
    this._article = [];
    // this.listenTo(ToolBarActions.articleAdd,onArticleAdd);
  },
 
   triggerChange() {
    this.trigger(this._article);
  },
  
  /*onReceiveCartData(data) {
    this._article = data;

    this.triggerChange();
  
  },*/

  onArticleAdd(url) {
    console.log("s " +url)
    
var contArt;
     contArt = this.getArticle(url);
    
   // contArt = extend({}, Art, {url:'111'});  
    
    contArt = extend({}, Art,{title:Art[0].title, content: Art[0].content, url: Art[0].url});
    console.log(contArt)
      this._article.push(contArt);
    console.log(this._article)
 backend.add(url);

    this.triggerChange();
   
  },

getArticle(url) {
    return this._article.filter(function(p) { return p.url == url;})[0];
   }
});

 
module.exports = ArticleStore;