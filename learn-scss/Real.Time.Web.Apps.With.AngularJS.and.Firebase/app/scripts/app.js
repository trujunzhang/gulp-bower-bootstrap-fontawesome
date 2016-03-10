'use strict';

/**
 * @ngdoc overview
 * @name firebaseApp
 * @description
 * # firebaseApp
 *
 * Main module of the application.
 */
angular
  .module('firebaseApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'firebase'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FBURL','https://resplendent-torch-212.firebaseio.com')
  .constant('MSGURL','https://resplendent-torch-212.firebaseio.com/messages');
