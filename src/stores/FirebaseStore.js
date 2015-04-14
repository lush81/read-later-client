var Firebase = require('firebase');
var Reflux = require('reflux');
var request = require('superagent');

var FirebaseActions = require('../actions/FirebaseActions');

var f = new Firebase('https://final-project-lush.firebaseio.com/');
var fb = f.child('articles');

var FirebaseStore = Reflux.createStore({
  listenables: FirebaseActions,

  init: function() {
    fb.on('value', FirebaseActions.receiveArticles);
  },

  receiveArticles: function(snapshot) {
    this.trigger(snapshot.val());
  },

  onRemoveArticle: function(id) {
   // console.log(id)
    fb.child(id+"/").remove();
  },

  onMakeRead: function(id, value) {
    fb.child(id+"/").update(value);
  },
  
  onAddArticle: function(url) { 
    request.post('https://read-later-server.herokuapp.com/scraper')
      .type('form')
      .send({url:url})
      .end()
  },
  
  
});

module.exports = FirebaseStore;