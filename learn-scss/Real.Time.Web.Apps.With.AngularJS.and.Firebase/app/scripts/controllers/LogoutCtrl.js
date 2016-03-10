(function() {
  'use strict';

  angular
    .module('firebaseApp')
    .controller('LogoutCtrl',LogoutCtrl);

  LogoutCtrl.$inject = ['$scope','$window','$firebaseAuth', 'FBURL'];

  function LogoutCtrl($scope,$window,$firebaseAuth,FBURL){

    /*jshint validthis: true */
    var vm = this;

    activate();

    ////////////////////////////

    function activate(){
      //$scope.simpleLogin.$logout();
      $window.location.href = '/#/';
    };

    var fbRef =new Firebase(FBURL);
    $scope.simpleLogin = $firebaseAuth(fbRef);

  }

})();
