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

MainCtrl.$inject = ['$scope','$timeout'];

function MainCtrl($scope,$timeout) {
  var rootRef = new Firebase("https://resplendent-torch-212.firebaseio.com");
  var messagesRef = rootRef.child('messages');


  /*jshint validthis: true */
  var vm = this;

  $scope.currentUser = null;
  $scope.currentText = null;

  messagesRef.on('value', function(snapshoot){
    $timeout(function(){
      console.log(snapshoot.numChildren());
      var snapshootValue = snapshoot.val();
      $scope.messages = snapshootValue;
    });
  });

  $scope.sendMessage = function() {
    var newMessage = {
      user: $scope.currentUser,
      text: $scope.currentText
    };

    messagesRef.push(newMessage);
  };

}
