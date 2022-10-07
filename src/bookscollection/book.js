import './books.css'

function Book({ book, setBooks, title, image, author, description }) {

    function handleDelete () {
        fetch(`http://localhost:3000/books/${book.id}`, {
            method: "DELETE",
        })
        .then((resp) => resp.json())
        .then(() => {
            setBooks((books) => books.filter((selectBook) => selectBook.id !== book.id));
        });
    }

    return (
        <div className="booksContainer">
            <div>
                <img src={image} height={130} alt="book" />
                <h5> {title} </h5>
                <h6> By: {author} </h6>
                <p>{description}</p>
            </div>
            <div className="d-grid gap-2 d-md-flex justify-content-md-between">
                <button className="btn btn-primary" type="button">Read</button>
                <button className="btn btn-secondary" type="button" onClick={handleDelete} >Delete</button>
            </div>
        </div>
    );
};
export default Book;
