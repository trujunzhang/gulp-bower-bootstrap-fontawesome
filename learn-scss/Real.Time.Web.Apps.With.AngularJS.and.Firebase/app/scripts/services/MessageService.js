(function() {
  'use strict';

  angular
    .module('firebaseApp')
    .service('MessageService', MessageService);

  MessageService.$inject = ['$http'];

  function MessageService($http,FBURL){

    /*jshint validthis: true */
    var svc = this;

    svc.getIndex = getIndex;
    ////////////////////////////

    function getIndex(){

    }

    var messageRef = new Firebase(FBURL);

    var childAdded = function(){
      
    };
    
    return {
      childAdded: childAdded()
    };
  }

})();
