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
      .when('/chat',{
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })
      .when('/login',{
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/logout',{
        template: 'Logging out ...',
        controller: 'LogoutCtrl'
      })
      .when('/register', {
        templateUrl: 'views/register.html',
        controller: 'RegisterCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .constant('FBURL','https://resplendent-torch-212.firebaseio.com')
  .constant('MSGURL','https://resplendent-torch-212.firebaseio.com/messages');
