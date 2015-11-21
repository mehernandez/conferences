'use strict';

/**
 * @ngdoc function
 * @name conferencesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the conferencesApp
 */
angular.module('conferencesApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
