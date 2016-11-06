app.service('checkout', function () {
  this.checkoutBag = [];

  var countID = 0
  this.addToBag = function (image, name, price, ingredients, id, quantity) {

    if (parseInt(quantity) > 0) {
      let newItem = {
        'id' : countID,
        'teaId' : id,
        'name' : name,
        'imageUrl' : image,
        'quantity' : quantity,
        'price' : price,
        'ingredients' : ingredients,
      }
      this.checkoutBag.push(newItem);
      countID++;
    }
    console.log(this.checkoutBag);
  };
});
