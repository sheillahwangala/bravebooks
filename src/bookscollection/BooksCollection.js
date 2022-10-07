import React from "react";
import Search from "../search/Search";
import Book from "./book";


function BooksCollection({ books }) {
    return (
        <div>
            <br></br> <Search />
            <br></br><h3>My Books Collection.</h3>
            <div className="container">
                {books.map((book) => (
                    <Book
                        key={book.id}
                        id={book.id}
                        image={book.image}
                        title={book.title}
                        author={book.author}
                        description={book.description}
                    />
                ))}
            </div>
        </div>
    );
};
export default BooksCollection;
