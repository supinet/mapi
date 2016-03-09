'use strict';

/**
 * @ngdoc overview
 * @name mapiApp
 * @description
 * # mapiApp
 *
 * Main module of the application.
 */
angular
  .module('mapiApp', [
    'ngAnimate',
    'ngCookies',
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/cep', {
        templateUrl: 'views/cep.html',
        controller: 'CepCtrl',
        controllerAs: 'cep'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
