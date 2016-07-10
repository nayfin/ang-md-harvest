describe(`HomeController`, function() {

  beforeEach(module(`Home`));

  it(`should create 3 cards that describe parts of site`, inject(function($controller) {
    var scope = {};
    var ctrl = $controller(`HomeController`, {$scope: scope});

    expect(scope.nav.length).toBe(3);
  }));

});
