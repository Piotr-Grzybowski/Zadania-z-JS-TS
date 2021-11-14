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
    if (this.checkIfBookExistInGivenList(this.listOfBooks, book.uuid)) {
      this.listOfBooks[getIndex(this.listOfBooks, book.uuid)].quantity(book.quantity);
      if (this.checkIfBookExistInGivenList(this.listOfAvailableBooks, book.uuid)) {
        this.listOfBooks[getIndex(this.listOfAvailableBooks, book.uuid)].quantity(book.quantity);
      }
      else this.listOfAvailableBooks.push(book);
    }
    else {
      this.listOfBooks.push(book);
      this.listOfAvailableBooks.push(book);
    }
  }
  removeOneBookFromList = function(list, bookId) {
    const indexOfBook = getIndex(list, bookId);
    if (checkHowManyCopiesOfBookIsInTheList(list, bookId) > 1) list[indexOfBook].changeQuantity(-1);
    else list.splice(indexOfBook, 1);
  }
  // we can use methods to both list of books and list of available books by giving extra parameter 'list'
  checkIfBookExistInTheList = function(list, bookId) {
    if (getIndex(list, bookId) === -1) return false;
    return true;
  }
  checkHowManyCopiesOfBookIsInTheList = function(list, bookId) {
    if (!this.checkIfBookExistInGivenList(list, bookId)) throw new Error ('Given book doesn\'t exist in library');
    const indexOfBook = getIndex(list, book.uuid);
    return list[indexOfBook].quantity();
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
  // Booking part in Library
  createBooking = function(userId, listOfBorrowedBooks) {
    const booking = new Booking(userId, listOfBorrowedBooks);
    booking.listOfBorrowedBooks.forEach(element => {
      const bookIndex = getIndex(this.listOfAvailableBooks, element);
      if (bookIndex === -1) throw new Error('There is no such a book');
      this.removeOneBookFromList(this.listOfAvailableBooks, element);
    })
  }
  removeBooking = function(bookingId) {
    const indexOfBooking = getIndex(this.listOfBookings, bookingId);
    if (indexOfBooking === -1) throw new Error('There is no such a booking');
    if (this.listOfBookings[indexOfBooking].totalFineToPay !== 0) {
      const userIndex = getIndex(this.listOfUsers, this.listOfBookings[indexOfBooking].user);
      if (userIndex === -1) throw new Error('There is no such a user');
      this.listOfUsers[userIndex].fine = this.listOfBookings[indexOfBooking].totalFineToPay;
    }
    this.listOfBookings.splice(indexOfBooking, 1);
  }
  returnABook = function(bookId, bookingId) {
    if (!checkIfBookExistInTheList(this.listOfBooks, bookId)) throw new Error('Such a book does not exist');
    const indexOfBooking = getIndex(this.listOfBookings, bookingId);
    if (indexOfBooking === -1) throw new Error('There is no such a booking');
    this.listOfBookings[indexOfBooking].returnABook(bookId);
    this.updateAvailableBooksList(bookId);
    if (this.listOfBookings[indexOfBooking].listOfBorrowedBooks.length === 0) this.removeBooking(bookingId);
  }
  updateAvailableBooksList = function(bookId) {
    if (this.checkIfBookExistInTheList(this.listOfAvailableBooks, bookId)) {
      const indexOfBook = getIndex(this.listOfAvailableBooks, bookId);
      this.listOfAvailableBooks[indexOfBook].quantity(1);
    }
    else {
      const indexOfBook = getIndex(this.listOfBooks, bookId);
      this.listOfAvailableBooks.push(this.listOfBooks[indexOfBook]);
    }
  }
}

export default Library;