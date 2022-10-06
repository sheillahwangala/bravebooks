import { useEffect, useState } from "react";
import BooksCollection from "../bookscollection/BooksCollection";

function BooksPage () {
    const [allBooks, setAllBooks] = useState([
        
    ]);

    useEffect(() => {
        fetch("http://localhost:3000/books")
        .then((response) => response.json())
        .then((data) => setAllBooks(data));
    }, []);

    return (
        <div>
            <BooksCollection books={allBooks} setAllBooks={setAllBooks} />
        </div>
    )
}
export default BooksPage;