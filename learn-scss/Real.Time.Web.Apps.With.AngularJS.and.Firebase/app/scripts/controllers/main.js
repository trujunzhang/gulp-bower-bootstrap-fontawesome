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
    var childRef = rootRef.child('messages');
    var parentRef = childRef.parent();

    $scope.setMessage = function () {
        rootRef.child('message').set({
            user: 'bob',
            text: 'djzhang'
        });
    }

}
