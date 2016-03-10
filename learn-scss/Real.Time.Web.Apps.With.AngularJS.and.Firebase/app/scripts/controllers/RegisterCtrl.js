(function() {
  'use strict';

  angular
    .module('firebaseApp')
    .controller('RegisterCtrl',RegisterCtrl);

  RegisterCtrl.$inject = ['$scope','$window','$firebaseAuth', 'FBURL'];

  function RegisterCtrl($scope,$window,$firebaseAuth,FBURL){

    /*jshint validthis: true */
    var vm = this;
    var fbRef = new Firebase(FBURL);
    $scope.errors =[];
    $scope.simpleLogin = $firebaseAuth(fbRef);
    $scope.registerUser = {
      email: '',
      password:'',
      confirmPassword:''
    };

    $scope.register = function(){
      var errors = [],
          user = $scope.registerUser,
          authUser = {
            email: user.email,
            password:user.password
          };

      if(user.email == ''){
        errors.push('Please enter an email');
      }
      if(user.password == ""){
        errors.push('Passwordd must not be blank');
      }
      else if(user.password != user.confirmPassword){
        errors.push('Passwords must match');
      }
      if(errors.length > 0){
        $scope.errors = errors;
        return;
      }

      $scope.simpleLogin.$createUser(authUser).then(function(userData) {
        console.log("User " + userData.uid + " created successfully!");
        return $scope.simpleLogin.$authWithPassword(authUser);
      }).then(function(authData) {
        console.log("Logged in as:", authData.uid);
        $window.location.href = '/#/home';
      }).catch(function(error) {
        console.error("Error: ", error);
      });
    };

    activate();

    ////////////////////////////

    function activate(){

    };



  }

})();
