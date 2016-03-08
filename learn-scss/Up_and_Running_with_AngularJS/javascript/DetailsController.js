(function() {
  'use strict';

  angular
    .module('artistControllers')
    .controller('DetailsController', MyController);

    MyController.$inject = ['$scope','$http','$routeParams'];

  function MyController($scope,$http,$routeParams){

    /*jshint validthis: true */
    var vm = this;

    activate();

    ////////////////////////////

    function activate(){
      var itemId = $routeParams.itemId;
      $http.get('js/data.json').success(function(data){
          $scope.artists = data;
          $scope.whichItem = itemId;
          $scope.item = data[itemId];

          if(itemId > 0){
              $scope.prevItem = Number(itemId) - 1;
          }else{
              $scope.prevItem = $scope.artists.length - 1;
          }

          if(itemId < $scope.artists.length - 1){
              $scope.nextItem = Number(itemId) + 1;
          }else{
              $scope.nextItem = 0;
          }

      });
    }

  }

})();
