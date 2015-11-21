'use strict';

describe('Controller: EditCtrl', function () {

  // load the controller's module
  beforeEach(module('conferencesApp'));

  var EditCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EditCtrl = $controller('EditCtrl', {
      $scope: scope
    });
  }));
/*
  it('Deberia modificar la conferencia', function () {

    var confs = scope.service.conferences;
    for(var i = confs.length -1; i >= 0; i --){
      confs.$remove(i);
    }

    scope.service.createOrUpdate({name:"nombre"}).then(function(){
      scope.conference = scope.conferences[0];
      scope.newx = {name:'nuevo'};

      scope.modificar().then(function(){

      });
    });




    expect(scope.service.conferences[0].name).toBe('nuevo');
  });
*/

});
