import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
import Template from './template/Template';
import BooksCollection from './bookscollection/BooksCollection';
import AddBooksPage from './AddBooks/AddBookPage';




function App() {

  const [books, setBooks] = useState([]);
  const [filteredBooks, setFilteredBooks] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [bookAdded, setbookAdded] = useState(false);

  useEffect(() => {
    // setLoading(true);
    fetch("http://localhost:3000/books")
      .then((response) => response.json())
      .then(books => {
        setBooks(books);
        // setLoading(false);
      });
  }, []);

  function bookwaskAdded(newBook) {
    setBooks([...books, newBook])    
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Template>
          <Routes>
            <Route path="/books" index element={<AddBooksPage onBookAdded={bookwaskAdded} />} />
            <Route path="/" index element={<BooksCollection books={books} setBooks={setBooks} />} />
          </Routes>
        </Template>
      </BrowserRouter>
    </div>
  )
}

export default App;
