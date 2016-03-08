var artistControllers = angular.module('artistControllers', []);

artistControllers.controller('ListController', ['$scope', '$http', function($scope, $http) {
    $http.get('js/data.json').success(function (data) {
        $scope.artists = data;
        $scope.artistOrder = 'name';
    });
}]);


artistControllers.controller('DetailsController',['$scope','$http','$routeParams', function($scope,$http,$routeParams){
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
}]);
