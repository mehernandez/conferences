'use strict';

/**
 * @ngdoc function
 * @name conferencesApp.controller:EditCtrl
 * @description
 * # EditCtrl
 * Controller of the conferencesApp
 */
angular.module('conferencesApp')
  .controller('EditCtrl', function ($scope, $location, conferenceService) {


        $scope.service = conferenceService;


        $scope.$watch( 'service.currentConference', function() {
          $scope.conference = $scope.service.currentConference;
          $scope.newx = JSON.parse(JSON.stringify($scope.conference));
        });


        $scope.modificar = function(){

            $scope.conference.name = $scope.newx.name;
            $scope.conference.description = $scope.newx.description;
            $scope.conference.place = $scope.newx.place;
            $scope.conference.deadline = $scope.newx.deadline;
            $scope.conference.notification = $scope.newx.notification;
            $scope.conference.event = $scope.newx.event;


            $scope.service.createOrUpdate($scope.conference);

            alert("Conferencia modificada exitosamente !")
            $location.path("/all");
        }


        $scope.volver = function() {
          $location.path("/all");

        };

  });
