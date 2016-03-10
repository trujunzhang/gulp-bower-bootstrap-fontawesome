
(function() {
  'use strict';

  angular
    .module('firebaseApp')
    .controller('ChatCtrl',ChatCtrl);

    ChatCtrl.$inject = ['$scope'];

  function ChatCtrl($scope){

    /*jshint validthis: true */
    var vm = this;

    activate();

    ////////////////////////////

    function activate(){

    };

  }

})();
