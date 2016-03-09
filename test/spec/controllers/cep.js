'use strict';

describe('Controller: CepCtrl', function () {

  // load the controller's module
  beforeEach(module('mapiApp'));

  var CepCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CepCtrl = $controller('CepCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CepCtrl.awesomeThings.length).toBe(3);
  });
});
