import { uuidv4 } from '../utils/utils.js';

class CartItem {
  constructor(cartItemData) {
    this.name = cartItemData.name;
    this.category = cartItemData.category;
    this.price = cartItemData.price;
    this.discount = cartItemData.discount;
    this.uuid = uuidv4();
    this.amount = cartItemData.amount;
  }
  changePrice = function(newPrice) {
    this.price = newPrice;
  }
  getDiscountAmount = function() {
    return this.price * (this.discount / 100);
  }
  addNewCategory = function(nameOfCategory) {
    this.category = nameOfCategory;
  }
  change = function(key, value) {
    switch(key) {
      case "price":
        this.price = value;
        break;
      case "name":
        this.name = value;
        break;
      case "discount":
        this.discount = value;
        break;
      case "amount":
        this.amount = value;
        break;
    }
  }
}

export default CartItem;