'use strict';

describe('Controller: ShowCtrl', function () {

  // load the controller's module
  beforeEach(module('conferencesApp'));

  var ShowCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ShowCtrl = $controller('ShowCtrl', {
      $scope: scope
    });
  }));


});
