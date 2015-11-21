'use strict';

describe('Controller: NewCtrl', function () {

  // load the controller's module
  beforeEach(module('conferencesApp'));

  var NewCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    NewCtrl = $controller('NewCtrl', {
      $scope: scope
    });
  }));

/*
  it('Deberia crear una nueva conferencia', function () {
    inject (function($firebaseArray, $rootScope){

      var service = {};

      service.ref = new Firebase( 'https://conferenciasmax.firebaseio.com' );
      service.conferences = $firebaseArray( service.ref );


    for(var i = service.conferences.length -1; i >= 0; i --){
      service.conferences.$remove(i);
      service.conferences = [];
    }

    var newx = {name:"nombre"};

    service.conferences.$add(newx).then(function(){
      service.conferences.push(newx);


        expect(service.conferences.length).toBe(1);
    });

  });
  });

  */

});
