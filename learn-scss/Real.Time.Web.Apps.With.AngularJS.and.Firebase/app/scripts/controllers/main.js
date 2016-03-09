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
  /*jshint validthis: true */
  var vm = this;

  activate();

  ////////////////////////////

  function activate() {
    MessageService.childAdded(function(addedChild){
      $timeout(function () {
        $scope.messages.push(addedChild);
      });
      //console.log("child added from MessageService: ");
      //console.log(addedChild);
    });
  }

  $scope.currentUser = null;
  $scope.currentText = null;
  $scope.messages = [];

  $scope.sendMessage = function () {
    var newMessage = {
      user: $scope.currentUser,
      text: $scope.currentText
    };

    MessageService.add(newMessage);
  };

  $scope.turnFeedOff = function(){
    MessageService.off();
  };

}
