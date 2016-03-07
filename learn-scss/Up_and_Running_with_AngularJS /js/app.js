var myApp = angular.module('myApp', [
    'ngRoute',
    'artistControllers'
]);

myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/List', {
        templateUrl: 'partials/list.html',
        controller: 'ListController'
    }).otherwise({
        redirectTo: '/List'
    });

}]);
