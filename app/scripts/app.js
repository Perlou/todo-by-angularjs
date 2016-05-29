'use strict';

/**
 * @ngdoc overview
 * @name todoByAngularjsApp
 * @description
 * # todoByAngularjsApp
 *
 * Main module of the application.
 */
angular
  .module('todoByAngularjsApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
