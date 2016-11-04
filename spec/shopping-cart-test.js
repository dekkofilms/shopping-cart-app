describe('shopping cart app', function() {

  beforeEach(function () {
    browser.get('http://localhost:8000');
  });

  it('should connect up with angular', function() {
    expect(element(by.tagName('h1')).getText()).toEqual('Welcome to MEAN Tea!');
  });

});
