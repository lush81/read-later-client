var Firebase = require('firebase');
var Reflux = require('reflux');

var FirebaseActions = require('../action/FirebaseActions');

var articlesFb= new Firebase("https://final-project-lush.firebaseio.com/").child('articles');

var FirebaseStore = Reflux.createStore({
  listenables: FirebaseActions,

  init() {
    articlesFb.on('value', FirebaseActions.receiveData);
  },

  onReceiveData(snapshot) {
    this.trigger(snapshot.val());
    console.log( typeof snapshot.val());
  }

 /* onRemoveItem(id) {
    articlesFb.child(id).remove();
  },

  onUpdateItem(id, value) {
    articlesFb.child(id).update(value);
  }*/
});

module.exports = FirebaseStore;