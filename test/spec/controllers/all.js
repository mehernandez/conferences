'use strict';

describe('Controller: AllCtrl', function () {

  // load the controller's module
  beforeEach(module('conferencesApp'));

  var AllCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllCtrl = $controller('AllCtrl', {
      $scope: scope
    });
  }));
/*
  it('Deberia eliminar de la base de datos la conferencia', function () {

    var confs = scope.service.conferences;
    for(var i = confs.length -1; i >= 0; i --){
      confs.$remove(i);
    }

    scope.service.createOrUpdate({name:"nombre"}).then(function(){
      scope.eliminar(0,confs[0].$id).then(function(){

      });
    });




    expect(scope.service.conferences.length).toBe(0);
  });

  it('Deberia buscar la conferencia con el nombre hola', function () {

    var confs = scope.service.conferences;
    for(var i = confs.length -1; i >= 0; i --){
      confs.$remove(i);
    }

    scope.service.createOrUpdate({name:"hola"}).then(function(){
      scope.searchy = "ho";
      scope.buscar().then(function(){

      });
    });




    expect(scope.conferences[0].name).toBe('hola');
  });
*/
});
