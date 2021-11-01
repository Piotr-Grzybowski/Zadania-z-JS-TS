import CartItem from "./CartItem.js";
import { uuidv4, getIndex } from '../utils/utils.js';

class Cart {
  constructor(cartData) {
    this.uuid = uuidv4();
    this.discountOnCart = cartData.discountOnCart;
    this.discountCoupon = cartData.discountCoupon;
    this.listOfItems = [];
  }
  addItem = function(item) {
    if (!item instanceof CartItem) throw new Error('Given item must be an instance of CartItem');
    this.listOfItems.push(item);
  }
  removeItem = function(itemId) {
    if (!checkIfItemIsInTheCart(itemId)) throw new Error('Item is not in the cart');
    const itemIndex = getIndex(this.listOfItems, itemId);
    this.listOfItems.splice(itemIndex, 1);
  }
  changeAmountOfItem(itemId, newAmount) {
    if (!checkIfItemIsInTheCart(itemId)) throw new Error('Item is not in the cart');
    const itemIndex = getIndex(this.listOfItems, itemId);
    this.listOfItems[itemIndex].change('amount', newAmount);
  }
  checkIfItemIsInTheCart(itemId) {
    if (getIndex(this.listOfItems, itemId) !== -1) return true;
    return false;
  }
  calculateCartValue = function() {
    const valueOfItems = this.listOfItems.reduce((acc, element) => {
      return acc + ((element.price - element.getDiscountAmount()) * element.amount);
    }, 0);
    if (this.discountCoupon) return (valueOfItems - (valueOfItems * (this.discountOnCart / 100)));
    return valueOfItems;
  }
}