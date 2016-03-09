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

MainCtrl.$inject = ['$scope'];

function MainCtrl($scope) {
  var rootRef = new Firebase("https://resplendent-torch-212.firebaseio.com");
  var childRef = rootRef.child('message');
  var parentRef = childRef.parent();

  /*jshint validthis: true */
  var vm = this;

  childRef.on('value', function(snapshoot){
    var snapshootValue = snapshoot.val();
    console.log(snapshootValue);
    $scope.message = snapshootValue;
  });

  $scope.$watch('message.text',function(newValue){
    // console.log(newValue);
    childRef.update({
      text: newValue
    });
  });

  $scope.setMessage = function () {
    childRef.set({
      user: 'bob',
      text: 'djzhang'
    });
  };

  $scope.updateMessage = function () {
    childRef.update({
      text: 'wanghao'
    });
  };

  $scope.deleteMessage = function () {
    childRef.remove();
  };

}
