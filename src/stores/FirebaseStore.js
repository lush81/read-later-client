var Firebase = require('firebase');
var Reflux = require('reflux');

var FirebaseActions = require('../actions/FirebaseActions');

var articlesRef = new Firebase('https://final-project-lush.firebaseio.com/');

var FirebaseStore = Reflux.createStore({
  listenables: FirebaseActions,

  init: function() {
    articlesRef.child('articles').on('value', FirebaseActions.receiveData);
  },

  onReceiveData: function(snapshot) {
    this.trigger(snapshot.val());
  },

 /* onRemoveItem: function(id) {
    articlesRef.child(id).remove();//**
  },

  onUpdateItem: function(id, value) {
    articlesRef.child(id).update(value);//**
  }*/
});

module.exports = FirebaseStore;