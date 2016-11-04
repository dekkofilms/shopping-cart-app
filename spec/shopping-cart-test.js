describe('shopping cart app', function() {

  beforeEach(function () {
    browser.get('http://localhost:8000');
  });

  it('should connect up with angular', function() {
    expect(element(by.tagName('h1')).getText()).toEqual('Welcome to MEAN Tea!');
  });

  it('should go to home route, when you click the button', function () {
    let homeButton = element(by.linkText('Home'));

    homeButton.click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/')
  });

  it('should go to about route, when you click the button', function () {
    let about = element(by.linkText('About'));

    about.click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/about')
  });

  it('should go to contact route, when you click the button', function () {
    let contact = element(by.linkText('Contact'));

    contact.click();

    expect(browser.getCurrentUrl()).toEqual('http://localhost:8000/#/contact')
  });

  it('should display all the teas in the home page', function () {
    let teas = element.all(by.repeater('tea in view.teas'));

    expect(teas.count()).toEqual(10);
  });

  it('should be able to search by categories of tea', function() {
    let categoryOptions = element.all(by.tagName('option'));

    //get the third option of 'lucid'
    categoryOptions.get(7).click()

    expect(element.all(by.repeater('tea in view.teas')).count()).toEqual(3);
  });

  it('should be able to search by name of tea', function() {
    let searchBar = element(by.model('name'));

    searchBar.sendKeys('Bayard')

    expect(element.all(by.repeater('tea in view.teas')).count()).toEqual(1);
  });

  it('when you add an item, it displays in your Shopping Cart with the right quantity', function () {
    let checkoutButton = element(by.name('cart-button'));
    let addToBag = element.all(by.name('add-to-bag'));
    let quantity = element.all(by.tagName('option'));

    quantity.get(13).click();
    addToBag.get(0).click();

    expect(checkoutButton.getText()).toBe('Checkout | Bag (1)');
  });

});
