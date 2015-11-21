'use strict';

/**
 * @ngdoc function
 * @name conferencesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the conferencesApp
 */
angular.module('conferencesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
