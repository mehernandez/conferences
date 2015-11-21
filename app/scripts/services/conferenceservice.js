'use strict';

/**
 * @ngdoc service
 * @name conferencesApp.conferenceService
 * @description
 * # conferenceService
 * Service in the conferencesApp.
 */
angular.module('conferencesApp')
  .service('conferenceService', function ($firebaseArray) {
    // AngularJS will instantiate a singleton by calling "new" on this function

    var service = { };

    service.ref = new Firebase( 'https://conferenciasmax.firebaseio.com' );

    service.ref2 = new Firebase('https://usuarios-conf.firebaseio.com');

    service.conferences = $firebaseArray( service.ref );

    service.users = $firebaseArray(service.ref2);

    service.newConference = function() {
      return {
        id            : "",
        name          : "",
        description   : "",
        place         : "",
        deadline      : "",
        notification  : "",
        event         : ""
      };
    }


    service.addConference = function ( conf ) {
        service.conferences.$add( conf );
    };

    service.newConference = function () {
      return {
        id            : "",
        name          : "",
        description   : "",
        place         : "",
        deadline      : "",
        notification  : "",
        event         : ""
      };
    }

    service.currentConference = service.newConference();

    service.currentUser = {};

    service.setCurrentConference = function ( conf ) {
      service.currentConference = conf;
    }

    service.setCurrentUser = function ( us ) {
      service.currentUser = us;
    }

    service.createOrUpdate = function( conf ) {
      if ( typeof conf.$id == 'undefined' ) {
        service.conferences.$add( conf );
      } else {
        service.conferences.$save( conf );
      }
    };

    service.createOrUpdateUser = function( conf ) {
      if ( typeof conf.$id == 'undefined' ) {
        service.users.$add( conf );
      } else {
        service.users.$save( conf );
      }
    };

    service.conferences.$watch( function(event) {
      console.log(event);
    });

    return service;
  });
