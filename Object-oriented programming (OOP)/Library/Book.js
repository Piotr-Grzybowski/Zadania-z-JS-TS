import { Validator } from '../utils/Validator.js';
import { uuidv4 } from '../utils/utils.js';

class Book {
  constructor(title, author, image = '', description, quantity = 1) {
    Validator.isNotEmpty(title, 'Title');
    Validator.isNotEmpty(author, 'Author');
    Validator.isNotEmpty(description, 'Description')

    this.title = title;
    this.author = author;
    this.image = image;
    this.description = description;
    this.uuid = uuidv4();
    this.quantity = quantity;
  }
  set quantity(amount) {
    Validator.isNumber(amount);
    this.quantity += amount;
  }
  get quantity() {
    return this.quantity;
  }
}

export default Book;