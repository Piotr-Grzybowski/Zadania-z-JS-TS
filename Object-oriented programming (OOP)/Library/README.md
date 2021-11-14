### Create structure of data associated with library:

- [ ] Create object **User**, representation of user
- [ ] Create object **Book**, representation of a book
- [ ] Create object **Booking** which will define action when user borrow some books
- [ ] Create object **Library**
- [ ] we should be able to have more than one copy of a specific book in library

```javascript
class User {
    // Should have: first name, last name, uuid
}

class Book {
    // Should have: title, author, uuid, some image, short description
}

class Booking {
    // Booking should get a user in constructor

    // Should have: date of borrow, date of return which will be seven days from borrow date, list of borrowed books, penalty if book won't be returned on time

    // Functionality:
    // add and remove books to/from list of borrowed books
    // return a book and if it's on time penalty is 0, if not penalty should have some value
    // should calculate penalty depending on penalty value and how many days too late the book was returned
}

class Library {
    // Should have: list of books, list of available books which haven't been borrowed, list of bookings, list of users

    // Functionalities:
    // - add and remove book to/from list of books
    // - borrow book for given user
    // - return borrowed books
    // - create and remove users
}
```