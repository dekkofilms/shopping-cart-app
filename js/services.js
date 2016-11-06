app.service('checkout', function () {
  this.checkoutBag = [];

  this.addToBag = function (image, name, price, ingredients, id, quantity) {
    console.log(id);
    console.log(typeof parseInt(quantity));
    console.log(quantity);

    if (parseInt(quantity) > 0) {
      let newItem = {
        'teaId' : id,
        'name' : name,
        'imageUrl' : image,
        'quantity' : quantity,
        'price' : price,
        'ingredients' : ingredients,
      }
      this.checkoutBag.push(newItem);
    }

    console.log(this.checkoutBag);
  };
});
