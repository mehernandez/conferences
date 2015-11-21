'use strict';

/**
 * @ngdoc overview
 * @name conferencesApp
 * @description
 * # conferencesApp
 *
 * Main module of the application.
 */
angular
  .module('conferencesApp', [
    'ngRoute',
    'firebase',
    'google-maps'
  ])
  .config(function ($routeProvider) {
    $routeProvider
  /*    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      }) */
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/all', {
        templateUrl: 'views/all.html',
        controller: 'AllCtrl'
      })
      .when('/favorites', {
        templateUrl: 'views/favorites.html',
        controller: 'FavoritesCtrl'
      })
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/new', {
        templateUrl: 'views/new.html',
        controller: 'NewCtrl'
      })
      .when('/show', {
        templateUrl: 'views/show.html',
        controller: 'ShowCtrl'
      })
      .when('/edit', {
        templateUrl: 'views/edit.html',
        controller: 'EditCtrl'
      })
      .otherwise({
        redirectTo: '/login'
      });
  });
