(function () {
  'use strict';

  angular
    .module('firebaseApp')
    .controller('LoginCtrl', LoginCtrl);

  LoginCtrl.$inject = ['$scope', '$rootScope', '$window', '$firebaseAuth', 'FBURL'];

  function LoginCtrl($scope, $rootScope, $window, $firebaseAuth, FBURL) {

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

      var isLoggedIn = $scope.simpleLogin.$getAuth();

      $scope.simpleLogin.$authWithPassword(authUser).then(function (authData) {
        console.log("Logged in as:", authData.uid);
        $rootScope.user = authUser;
        $window.location.href = '/#/main';
      }).catch(function (error) {
        if (error.code == 'EMAIL_TAKEN') {
          $scope.errors.push('Email already registered');
        }
        if (error.code == 'INVALID_EMAIL') {
          $scope.errors.push('The email was invalid');
        }
        if (error.code == 'INVALID_USER') {
          $scope.errors.push('User not found');
        }

        console.error("Error: ", error);
      });
    };

  }

})();
