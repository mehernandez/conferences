'use strict';

/**
 * @ngdoc function
 * @name conferencesApp.controller:NewCtrl
 * @description
 * # NewCtrl
 * Controller of the conferencesApp
 */
angular.module('conferencesApp')
  .controller('NewCtrl', function ($scope, $location, conferenceService) {

    $scope.service = conferenceService;

    // data  : conjunto de marcadores
    $scope.newx = {};

    var favs = $scope.service.currentUser.favorites;

    var conferences = $scope.service.conferences;

    //$scope.place = "Javeriana" ;

    $scope.$watch( 'service.currentUser', function() {
      $scope.user = $scope.service.currentUser;


      //console.log($scope.favorites);


    });


    $scope.crear = function(){

        $scope.service.createOrUpdate($scope.newx);

        alert("Conferencia creada exitosamente !")
        $location.path("/favorites");
    }


    $scope.volver = function() {
      $location.path("/favorites");

    };

  });
