'use strict';

/**
 * @ngdoc function
 * @name conferencesApp.controller:ShowCtrl
 * @description
 * # ShowCtrl
 * Controller of the conferencesApp
 */
angular.module('conferencesApp')
  .controller('ShowCtrl',[ '$scope', '$location', 'conferenceService', 'googleMaps'
  , function ($scope, $location, conferenceService, googleMap) {

    $scope.service = conferenceService;

    // data  : conjunto de marcadores
  $scope.data = [];

  //$scope.place = "Javeriana" ;

  $scope.$watch( 'service.currentConference', function() {
      $scope.conference = $scope.service.currentConference;
      $scope.comments = $scope.conference.comments;
      $scope.tags = $scope.conference.tags;

    });

    // place : nombre del lugar a buscar
    $scope.place = $scope.service.currentConference.place;


  // search() : busca el lugar y actualiza el mapa
  $scope.search = function(){



        // ejecuta geocode
    googleMap.getGeoCoder().geocode({
      address:$scope.place

    }, function (results, status) {

      // muestra en consola el primer resultado
      var lat = results[ 0 ].geometry.location.lat(),
          lng = results[ 0 ].geometry.location.lng();
      console.log( lat, lng );

      // usa $scope.$apply() debido a que esta función se ejecuta
      // en el alcance del servicio "google-maps". Al ejecutar
      // $apply, el controlador es notificado de los cambios
      $scope.$apply(function(){
        // asigna el resultado a $scope.data
        $scope.data = results;
      });

    });
  };

    $scope.volver = function() {
      $location.path("/login");

    };

      // ejecuta una primera búsqueda
       $scope.search();
        console.log($scope.data);

  }]);
