'use strict';

/**
 * @ngdoc function
 * @name conferencesApp.controller:FavoritesCtrl
 * @description
 * # FavoritesCtrl
 * Controller of the conferencesApp
 */
angular.module('conferencesApp')
  .controller('FavoritesCtrl', [ '$scope', '$location', 'conferenceService', 'googleMaps'
  , function ($scope, $location, conferenceService, googleMap) {

    $scope.service = conferenceService;

    // data  : conjunto de marcadores
    $scope.data = [];

    console.log($scope.service.currentUser);

    var favs = $scope.service.currentUser.favorites;

    if(favs){}
    else{
      favs = [];
    }

    var conferences = $scope.service.conferences;

    //$scope.place = "Javeriana" ;

    $scope.$watch( 'service.currentUser', function() {
      $scope.user = $scope.service.currentUser;

      $scope.favorites = [];


        for(var i=0;i< favs.length; i++){
            var obj = conferences.$getRecord(favs[i]);
            //obj.id = favs[i];
          $scope.favorites.push(obj);
          $scope.search(obj.place);
        }




    });

    // place : nombre del lugar a buscar
    $scope.place = $scope.service.currentConference.place;


    // search() : busca el lugar y actualiza el mapa
    $scope.search = function(plac){

        // ejecuta geocode
    googleMap.getGeoCoder().geocode({
      address: plac

    }, function (results, status) {

      // muestra en consola el primer resultado
      var lat = results[ 0 ].geometry.location.lat(),
          lng = results[ 0 ].geometry.location.lng();
      console.log( lat, lng );



      // usa $scope.$apply() debido a que esta función se ejecuta
      // en el alcance del servicio "google-maps". Al ejecutar
      // $apply, el controlador es notificado de los cambios

      var dat = $scope.data;

      results.push.apply(results , dat);

      $scope.$apply(function(){
        // asigna el resultado a $scope.data

        $scope.data = results;
        console.log($scope.data);
      });

    });
    };

    $scope.new = function(){
        $location.path("/new");
    }


    $scope.volver = function() {

      $location.path("/login");

    };

       $scope.all = function() {
      $location.path("/all");

    };

    $scope.eliminar = function(id){
      var favs = $scope.user.favorites;

      if(favs){
        for(var i=0; i < favs.length; i ++){
          if(favs[i] == id){
            favs.splice(i, 1);
            $scope.favorites.splice(i,1);
            $scope.service.createOrUpdateUser($scope.user);

          }
        }
      }
    }


  }]);
