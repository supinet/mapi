'use strict';

describe('Service: cepService', function () {

  // load the service's module
  beforeEach(module('mapiApp'));

  // instantiate service
  var cepService;
  beforeEach(inject(function (_cepService_) {
    cepService = _cepService_;
  }));

  it('should do something', function () {
    expect(!!cepService).toBe(true);
  });

});
