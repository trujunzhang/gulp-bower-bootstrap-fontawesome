(function() {
  'use strict';

  angular
    .module('firebaseApp')
    .service('MessageService', MessageService);

  MessageService.$inject = ['$http','FBURL'];

  function MessageService($http,FBURL){

    /*jshint validthis: true */
    var svc = this;

    var messagesRef = new Firebase(FBURL).child('messages');

    var childAdded = function(limitNum,cb){
      messagesRef.startAt().limit(limitNum).on('child_added', function(snapshot){
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


    var pageNext = function(name, numberOfItems){
      vardefered = $q.defer();
      var messages = [];

      messagesRef.startAt(null, name).once('value', function(snapshot){

      });

    };

      var pageBack = function(name, numberOfItems){

      };

    return {
      childAdded: childAdded,
      add: addMessage,
      off: turnMessageOff,
      pageNext: pageNext,
      pageBack: pageBack
    };
  }

})();
