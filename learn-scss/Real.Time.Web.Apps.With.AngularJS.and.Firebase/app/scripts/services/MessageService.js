(function () {
  'use strict';

  angular
    .module('firebaseApp')
    .service('MessageService', MessageService);

  MessageService.$inject = ['$http', 'FBURL', '$q', '$firebaseArray'];

  function MessageService($http, FBURL, $q, $firebaseArray) {

    /*jshint validthis: true */
    var svc = this;

    var messagesRef = new Firebase(FBURL).child('messages');
    var fireMessage = $firebaseArray(messagesRef);

    var childAdded = function (cb) {
      fireMessage.$watch(function (event) {
        if (event.event == 'child_added') {
          var key = event.key;
          var rec = fireMessage.$getRecord(key);
          console.log("child_added: array's length, " + fireMessage.length + " key: " + key);
          cb.call(this, {
            user: rec.user,
            text: rec.text,
            name: key
          });
        }
      });
    };

    var childAddedxx = function (cb) {
      fireMessage.$watch('child_added', function (data) {
        var val = data.snapshot.value;
        cb.call(this, {
          user: val.user,
          text: val.text,
          name: data.snapshot.name
        });
      });
    };

    var addMessage = function (message) {
      return fireMessage.$add(message);
    };

    var turnMessageOff = function () {
      messagesRef.off();
    };


    var pageNext = function (name, numberOfItems) {
      var deferred = $q.defer();
      var messages = [];

      messagesRef.startAt(null, name).limit(numberOfItems).once('value', function (snapshot) {
        snapshot.forEach(function (snapItem) {
          var itemVal = snapItem.val();
          itemVal.name = snapItem.name();
          messages.push(itemVal);
        });
        deferred.resolve(messages);
      });
      return deferred.promise;
    };

    var pageBack = function (name, numberOfItems) {
      var deferred = $q.defer();
      var messages = [];

      messagesRef.endAt(null, name).limit(numberOfItems).once('value', function (snapshot) {
        snapshot.forEach(function (snapItem) {
          var itemVal = snapItem.val();
          itemVal.name = snapItem.name();
          messages.push(itemVal);
        });
        deferred.resolve(messages);
      });
      return deferred.promise;
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
