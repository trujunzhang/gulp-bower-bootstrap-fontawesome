/* global Firebase */

'use strict';

/**
 * @ngdoc function
 * @name firebaseApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firebaseApp
 */
var firebaseApp = angular.module('firebaseApp');

firebaseApp.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$scope', '$timeout', 'MessageService'];

function MainCtrl($scope, $timeout, MessageService) {
  var rootRef = new Firebase("https://resplendent-torch-212.firebaseio.com");
  var messagesRef = rootRef.child('messages');
  var titleRef = rootRef.child('title');

  /*jshint validthis: true */
  var vm = this;

  activate();

  ////////////////////////////

  function activate() {

    MessageService.childAdded(function(addedChild){
      console.log("child added from MessageService: ");
      console.log(addedChild);
    });


  }

  $scope.title = null;
  $scope.currentUser = null;
  $scope.currentText = null;
  $scope.messages = [];

  titleRef.once('value', function(snapshoot){
    $scope.title = snapshoot.val();
  });

  messagesRef.on('child_added', function (snapshoot) {
    $timeout(function () {
      var snapshootValue = snapshoot.val();
      console.log("child added:");
      console.log(snapshootValue);
      //$scope.messages = snapshootValue;
      //$scope.messages.push(snapshootValue);
      $scope.messages.push({
        text: snapshootValue.text,
        user: snapshootValue.user,
        name: snapshoot.name()
      });
    });
  });

  messagesRef.on('child_changed', function(snapshoot){
    $timeout(function(){
      var snapshotVal = snapshoot.val();
      //console.log(snapshotVal);
      var message = findMessageByName(snapshoot.name());
      console.log("child_changed");
      console.log(message);
      message.text = snapshotVal.text;
    });
  });

  messagesRef.on('child_removed', function(snapshoot){
    $timeout(function(){
      deleteMessageByName(snapshoot.name());
    });
  });

  function deleteMessageByName(name){
    for(var i=0; i< $scope.messages.length; i++){
      var currenMessage = $scope.messages[i];
      if(currenMessage.name == name){
        $scope.messages.splice(i,1);
        break;
      }
    }
  }


  function findMessageByName(name){
    var messageFound = null;
    for(var i=0; i< $scope.messages.length; i++){
      var currenMessage = $scope.messages[i];
      if(currenMessage.name == name){
        messageFound = currenMessage;
        break;
      }
    }

    return messageFound;
  }

  $scope.sendMessage = function () {
    var newMessage = {
      user: $scope.currentUser,
      text: $scope.currentText
    };

    messagesRef.push(newMessage);
  };

  $scope.turnFeedOff = function(){
    messagesRef.off();
  };

}
