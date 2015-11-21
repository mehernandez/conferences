'use strict';

/**
 * @ngdoc function
 * @name conferencesApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the conferencesApp
 */
angular.module('conferencesApp')
  .controller('LoginCtrl', function ($scope, conferenceService, $firebaseArray, $location, $filter) {

    $scope.service = conferenceService;

    $scope.users = $scope.service.users;

    $scope.usr = "Mark";
    $scope.pass = "hola";


    $scope.$watch( 'service.conferences', function(){
      $scope.conferences = $scope.service.conferences;


    });


    $scope.showConference = function ( conf ) {
      conferenceService.setCurrentConference ( conf );
      $location.path('/show');

      //console.log(conf.$id);
    };

    $scope.login = function(){

        var obj = false;

        var todavia = true;

        for (var i = 0; i < $scope.users.length && todavia; i ++){

            var idx = $scope.users[i].$id;

            obj = $scope.users.$getRecord(idx);

            if($scope.usr == obj.user && $scope.pass == obj.password){


                $scope.service.setCurrentUser(obj);


                todavia = false;

                $location.path('/favorites');

            }

        }
        if(todavia){
            alert("Usuario y/o clave incorrectos");
        }

    }

    //$scope.conferences = $filter('orderBy')($scope.conferences, '+event', false);


  });
