app.service('checkout', function () {
  this.checkoutBag = [];

  this.addToBag = function (id, quantity) {
    console.log(id);
    console.log(typeof parseInt(quantity));
    console.log(quantity);

    if (parseInt(quantity) > 0) {
      let newItem = {
        'teaId' : id,
        'quantity' : quantity,
      }
      this.checkoutBag.push(newItem);
    }

    console.log(this.checkoutBag);
  };
});
