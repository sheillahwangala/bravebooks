import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { useEffect, useState } from 'react';
// import TopBar from './TopBar/TopBar';
import Template from './template/Template';
import BooksCollection from './bookscollection/BooksCollection';
// import BooksPage from './bookspage/BooksPage';



function App() {

  const [books, setBooks] = useState([]);
  // const [filteredBooks, setFilteredBooks] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [bookAdded, setbookAdded] = useState(false);

  useEffect(() => {
    // setLoading(true);
    fetch("http://localhost:3000/books")
    .then((response) => response.json())
    .then(books => {
      setBooks(books);
      // setLoading(false);
    });
  }, []);



  return (
    <div className="App">
        {/* <BooksPage /> */}
      <BrowserRouter>
      <Template>
        <Routes>
      <Route path="/" index element={<BooksCollection books={books} setBooks={setBooks} />} />
        </Routes>
      </Template>
      </BrowserRouter>
    </div>
  )
}

export default App;
