// Scenario

// You are tasked with creating a simple Library Management System using Object-Oriented JavaScript. The system should allow for managing books and members of the library.
// Requirements

// Book Object: Create a Book object. Each book should have properties like title, author, ISBN, and a boolean status to indicate if it's currently checked out or available.

// Member Object: Implement a Member object. Each member should have properties like name, member ID, and a list of books currently checked out.

// Library Object: Create a Library object. This object should be responsible for managing the collection of books and members. It should provide functionality to:
//         Add/remove books from the library.
//         Register/remove members.
//         Check out books to a member (a member can have a limited number of books checked out).
//         Check in books from a member.

//     Inheritance: Implement a specialized type of book, such as ReferenceBook, which cannot be checked out.

//     Encapsulation: Ensure that each object's internal state is only accessible through methods and not directly from outside the object.

//     Polymorphism: Use polymorphism for methods that might behave differently for a ReferenceBook compared to a regular Book.

//     Private Data: Use closures or other techniques to make some of the data private. For example, the list of books a member has checked out should not be directly accessible.

//     Validation: Include basic validation and error handling. For example, prevent a book from being checked out if it's already checked out.

class Book {
  #title;
  #author;
  #isbn;
  #available
  constructor(title, author, isbn, available) {
    this.#title = title;
    this.#author = author;
    this.#isbn = isbn;
    this.#available = available;
  }

  getBookInfo() {
    return {
      title: this.#title,
      author: this.#author,
      isbn: this.#isbn,
      available: this.#available,
    }
  }

  checkin() {
    this.#available = true;
  }

  checkout() {
    this.#available = false;
  }
}

class ReferenceBook extends Book {
  constructor(title, author, isbn) {
    super(title, author, isbn);
    this.checkout = false;
  }

  checkout() {
    return 'this book cannot be checked out'
  }
}

class Member {
  #books;
  #firstName;
  #lastName;
  #id;

  constructor(firstName, lastName, id) {
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#id = id;
    this.#books = [];
  }

  getMemberInfo() {
    return {
      firstName: this.#firstName,
      lastName: this.#lastName,
      id: this.#id,
      books: this.#books,
    }
  }

  borrowBook(book) {
    this.#books.push(book);
  }

  returnBook(title) {
    let idx = this.#books.findIndex(book => {
      book.title === title;
    });

    this.#books.splice(idx, 1);
    return true
  }

  getBooks() {
    return this.#books;
  }
}

class Library {
  #members;
  #books;
  constructor() {
    this.#members = [];
    this.#books = [];
  }

  addBook(title, author, isbn, available) {
    let newBook = new Book(title, author, isbn, available);

    this.#books.push(newBook);

    return true;
  }

  removeBook(title) {
    let idx = this.#books.findIndex(book => {
      return book.getBookInfo().title === title;
    });

    this.#books.splice(idx, 1);
    return 'book removed!';
  }

  registerMember(firstName, lastName, id) {
    if (this.#validMemberInfo(firstName, lastName, id)) {
      let newMember = new Member(firstName, lastName, id);
      this.#members.push(newMember);
      return true;
    } else {
      console.log('invalid user info');
    }
  }

  removeMember(userId) {
    if (this.#validUserId(userId)) {
      let idx = this.#members.findIndex(member => {
        return member.getMemberInfo().id === userId;
      });

      if (idx >= 0) {
        this.#members.splice(idx,1);
        return 'member removed!';
      } else {
        return 'invalid member id'
      }
    }
  }

  getMembers() {
    if (this.#members.length === 0) {
      return 'no members yet'
    } else {
      this.#members.forEach(member => {
        console.log(member.getMemberInfo())
      });
    }
  }

  getBooks() {
    if (this.#books.length === 0) {
      return 'no books'
    }

    this.#books.forEach(book => {
      console.log(book.getBookInfo());
    });
  }

  checkOutBook(userId, bookTitle) {
    const MAX_NUM_OF_BOOKS = 3;
    

    let user = this.#members.filter(member => {
      return member.getMemberInfo().id === userId
    })[0];

    if (!user) {
      return 'invalid user id';
    }


    let book = this.#books.filter(book => {
      return book.getBookInfo().title === bookTitle && book.getBookInfo().available;
    })[0]
    
    if (user.getMemberInfo().books.length <= MAX_NUM_OF_BOOKS - 1) {
      if (book) {
        user.borrowBook(book);
        book.checkout();
        this.removeBook(book.getBookInfo().title);
        return true
      } else {
        return 'book unavailable';
      }
    } else {
      return 'too many books bro'
    }
  }

  checkInBook(userId, bookTitle) {
    let user = this.#members.filter(member => {
      return member.getMemberInfo().id === userId;
    })[0];

    let book = user.getMemberInfo().books.filter(book => {
      return book.getBookInfo().title === bookTitle;
    })[0];

    book.checkin();
    this.#books.push(book);
    user.returnBook(bookTitle);

    return true;
  }

  #validUserId(id) {
    return typeof id === 'number' && id > 0;
  }

  #validName(name) {
    let nameChars = name.match(/[A-Za-z]/g).join('');

    return nameChars.length > 2 && /[A-Z]/.test(nameChars[0]);
  }

  #validMemberInfo(firstName, lastName, userId) {
    return this.#validUserId(userId) && this.#validName(firstName) && this.#validName(lastName)
  }
}

let library = new Library();

library.registerMember('Pedro', 'Gonzalez', 1); // true
library.registerMember('Camilo', 'Cole', 2); // true
library.registerMember('Coco', 'Loco', 3); // true
library.registerMember('Maria', 'Perez', 4); // true

console.log(library.removeMember(3)); // member removed

library.addBook('el dia', 'tu mae', 12345, true); // true
library.addBook('la noche', 'tu pae', 2234, true); // true
library.addBook('lluvia', 'tu abuela', 4588, true); // true
library.addBook('sol', 'tu tia', 8889, true); // true
library.addBook('luna', 'tu prima', 1145, true); // true
library.addBook('cielo', 'tu mae', 7778, true); // true
library.addBook('tierra', 'tu mae', 4445, true); // true

console.log(library.removeBook('tierra'))

console.log(library.getMembers()); // {...}
console.log(library.getBooks()); // {...}

// console.log(library.removeMember(10)); // invalid
// console.log(library.getMembers()); // {...}


// console.log(library.removeMember(1)); // true
// console.log(library.getMembers()); // no members

// console.log(library.removeBook('el dia')) // true
// console.log(library.getBooks()) // no books

console.log(library.checkOutBook(1, 'el dia')); // true
console.log(library.checkOutBook(2, 'el dia')); // book unavailable
console.log(library.checkOutBook(20, 'la noche')); // invalid user id

console.log(library.checkOutBook(2, 'sol')); // true
console.log(library.checkOutBook(2, 'luna')); // true
console.log(library.checkOutBook(2, 'cielo')); // true
console.log(library.checkOutBook(2, 'tierra')); // too many books


library.getBooks(); // only 3 books left

console.log(library.checkInBook(2, 'sol')); // true

library.getBooks(); // 4 books left


// library.getMembers();