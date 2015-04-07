var Firebase = require('firebase');
var Reflux = require('reflux');

var FirebaseActions = require('../actions/FirebaseActions');

var f = new Firebase('https://final-project-lush.firebaseio.com/');
var fb = f.child('articles');

var FirebaseStore = Reflux.createStore({
  listenables: FirebaseActions,

  init: function() {
    fb.on('value', FirebaseActions.receiveData);
  },

  onReceiveData: function(snapshot) {
    this.trigger(snapshot.val());
  },

 /* onRemoveItem: function(id) {
    fb.child(id).remove();//**
  },

  onUpdateItem: function(id, value) {
    fb.child(id).update(value);//**
  }*/
});

module.exports = FirebaseStore;