import User from "./User.js";
import Book from "./Book.js";
import Booking from "./Booking.js";
import { getIndex } from "../utils/utils.js";

class Library {
  constructor() {
    this.listOfBooks = [];
    this.listOfAvailableBooks = [];
    this.listOfBookings = [];
    this.listOfUsers = [];
  }
  addBookToTheList = function(book) {
    if (!book instanceof Book) throw new Error('Given book must be an instance of Book');
    if (this.checkIfBookExist(book.uuid)) {
      const indexOfBook = getIndex(this.listOfBooks, book.uuid);
      this.listOfBooks[indexOfBook].quantity(1);
    }
    else {
      this.listOfBooks.push(book);
    }
  }
  removeBookFromList = function(bookId) {
    const indexOfBook = getIndex(this.listOfBooks, book.uuid);
    if (checkHowManyCopiesOfBookExist(bookId) > 1) this.listOfBooks[indexOfBook].changeQuantity(-1);
    else this.listOfBooks.splice(indexOfBook, 1);
  }
  checkIfBookExist = function(bookId) {
    if (getIndex(this.listOfBooks, bookId) === -1) return false;
    return true;
  }
  checkHowManyCopiesOfBookExist = function(bookId) {
    if (!this.checkIfBookExist(bookId)) throw new Error ('Given book doesn\'t exist in library');
    const indexOfBook = getIndex(this.listOfBooks, book.uuid);
    return this.listOfBooks[indexOfBook].quantity();
  }
  // User part in library
  addUserToTheList = function(user) {
    if (!user instanceof User) throw new Error('Given user must be an instance of user!');
    if (!checkIfUserExist(user.uuid)) throw new Error('Given user already exist');
    this.listOfUsers.push(user);
  }
  removeUserFromList = function(userId) {
    if (!checkIfUserExist(user.uuid)) throw new Error('Given user doesn\'t exist');
    const indexOfUser = getIndex(this.listOfUsers, userId);
    this.listOfUsers.splice(indexOfUser, 1);
  }
  checkIfUserExist = function(userId) {
    if (getIndex(this.listOfUsers, userId) === -1) return false;
    return true;
  }

}

export default Library;