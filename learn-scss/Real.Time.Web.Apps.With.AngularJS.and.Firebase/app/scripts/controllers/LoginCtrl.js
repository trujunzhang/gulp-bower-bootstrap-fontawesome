(function () {
  'use strict';

  angular
    .module('firebaseApp')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', '$window', '$firebaseAuth', 'FBURL'];

  function LoginCtrl($scope, $window, $firebaseAuth, FBURL) {

    /*jshint validthis: true */
    var vm = this;

    activate();

    ////////////////////////////

    function activate() {

    }

    var fbRef = new Firebase(FBURL);
    $scope.simpleLogin = $firebaseAuth(fbRef);
    $scope.errors = [];

    $scope.loginUser = {
      email: '',
      password: ''
    };

    $scope.login = function () {
      $scope.errors = [];
      var errors = [],
        user = $scope.loginUser,
        authUser = {
          email: user.email,
          password: user.password
        };

      if (user.email == undefined) {

        errors.push('Please enter a valid email');
      }
      if (user.email == '') {
        errors.push('Please enter an email');
      }
      if (user.password == '') {
        errors.push('Please enter an password');
      }
      if (errors.length > 0) {
        $scope.errors = errors;
        return;
      }

      var x = 0;

    };

  }

})();
