### Create structure of data associated with online shopping:

- [ ] Create object Cart that defines shopping cart
- [ ] Create object CartItem which defines an item that we can add to the shopping cart

```javascript
class CartItem {
    // Should have: name, category, price, discount in %, uuid
    // Should let us:
    // - modify price of an item
    // - calculate discount based on price and discount percentage
    // - add product to category
    // - change name, price or discount
}

class Cart {
    // Should have: uuid, list of added items, discount in % for a cart, discount code
    // Should let us:
    // - add and remove items
    // - change amount of an item in cart
    // - calculate value of cart with discounts
}
```