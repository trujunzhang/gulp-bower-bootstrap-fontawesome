(function() {
  'use strict';

  angular
    .module('firebaseApp')
    .service('MessageService', MessageService);

  MessageService.$inject = ['$http','FBURL'];

  function MessageService($http,FBURL){

    /*jshint validthis: true */
    var svc = this;

    svc.getIndex = getIndex;
    ////////////////////////////

    function getIndex(){

    }

    var messagesRef = new Firebase(FBURL).child('messages');

    var childAdded = function(cb){
      messagesRef.on('child_added', function(snapshot){
        var val = snapshot.val();
        cb.call(this, {
          user: val.user,
          text: val.text,
          name: snapshot.name()
        });
      });
    };

    var addMessage = function(message){
      messagesRef.push(message);
    };

    var turnMessageOff = function(){
      messagesRef.off();
    };

    return {
      childAdded: childAdded,
      add: addMessage,
      off: turnMessageOff
    };
  }

})();
