(function() {
  'use strict';

  angular
    .module('firebaseApp')
    .controller('LoginCtrl',LoginCtrl);

    LoginCtrl.$inject = ['$scope'];

  function LoginCtrl($scope){

    /*jshint validthis: true */
    var vm = this;

    activate();

    ////////////////////////////

    function activate(){

    };

  }

})();
