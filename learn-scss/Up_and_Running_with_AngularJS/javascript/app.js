(function () {
    'use strict';

    var myApp = angular.module('myApp', [
        'ngRoute',
        'artistControllers'
    ]);


    myApp.config(['$routeProvider', appRouteProvider]);
    //myApp.config(appRouteProvider);

    //appRouteProvider.$inject = ['$routeProvider'];

    function appRouteProvider($routeProvider) {
        $routeProvider.when('/List', {
            templateUrl: 'partials/list.html',
            controller: 'ListController'
        }).when('/details/:itemId', {
                templateUrl: 'partials/details.html',
                controller: 'DetailsController'
            })
            .otherwise({
                redirectTo: '/List'
            });
    }

})();
