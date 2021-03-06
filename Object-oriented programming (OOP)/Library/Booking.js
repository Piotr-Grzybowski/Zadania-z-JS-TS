import User from "./User.js";

class Booking {
  constructor(userId, listOfBooks, finePerDay = 10) {
    if (listOfBooks.length === 0) throw new Error('List of borrowed books can\'t be empty');
    this.user = userId;
    this.listOfBorrowedBooks = listOfBooks;
    this.finePerDay = finePerDay;
    this.dateOfBorrow = new Date();
    this.dateOfReturn = new Date(this.dateOfBorrow.getTime() + (7 * (86400000))); // 86400000 is one day (24 hours) in milliseconds
    this.totalFineToPay = 0;
  }
  addBookToListOfBorrowed = function(bookId) {
    if (!this.dateOfBorrow.getDate() === new Date().getDate()) throw new Error('You can add new books to the booking only in the same day booking started');
    this.listOfBorrowedBooks.push(bookId);
  }
  removeBookFromListOfBorrowed = function(bookId) {
    const indexOfBook = this.getIndexOfBook(bookId);
    this.listOfBorrowedBooks.splice(indexOfBook, 1);
  }
  returnABook = function(bookId) {
    this.removeBookFromListOfBorrowed(bookId);
    const fine = this.calculateFine();
    this.totalFineToPay += fine;
  }
  checkIfBookExist = function(bookId) {
    if (this.listOfBorrowedBooks.indexOf(bookId) !== -1) return true;
    return false;
  }
  getIndexOfBook = function(bookId) {
    if (!this.checkIfBookExist) throw new Error('There is no such a book in this booking!');
    return this.listOfBorrowedBooks.indexOf(bookId);
  }
  calculateFine = function() {
    const today = new Date();
    if (today > this.dateOfReturn) {
      const days = Math.floor((today.getTime() - this.dateOfReturn.getTime()) / 86400000); // 86400000 is one day (24 hours) in milliseconds
      return days * this.finePerDay;
    }
    return 0;
  }
}

export default Booking;