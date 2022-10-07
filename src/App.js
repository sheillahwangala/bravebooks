import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Template from './template/Template';
import BooksCollection from './bookscollection/BooksCollection';
import AddBooksPage from './AddBooks/AddBookPage';
import SignIn from './SignIn/SignIn';




function App() {

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then(booksList => {
        setBooks(booksList);
        setFilteredBooks(booksList);
      });
  }, []);

  // function handleSearch(bookTitle) {
  //   const filteredArray = books.filter((book) => {
  //     return book.title.toLowerCase().includes(bookTitle.toLowerCase());
  //   });
  //   setBooks(filteredArray);
  // }

  function bookwaskAdded(newBook) {
    setBooks([...books, newBook])
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Template>
          <Routes>            
            <Route path="/" index element={<BooksCollection books={filteredBooks} setBooks={setBooks}  />} />
            <Route path="/books" index element={<AddBooksPage onBookAdded={bookwaskAdded} />} />
            <Route path="/signin" index element={<SignIn />} />
          </Routes>
        </Template>
      </BrowserRouter>
    </div>
  )
}

export default App;
