import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const bookInfo = {
    title: '',
    author: '',
    description: '',
    image: ''
}

function AddBook({ onBookAdded }) {
    const [formData, setFormData] = useState(bookInfo);

    const params = useParams();
    const [id, setId] = useState(params.bookid)

    useEffect(() => {
        if (id) {
            fetch(`http://localhost:3000/books/${id}`)
                .then((resp) => resp.json())
                .then(book => {
                    setFormData(book);
                    alert("Book Added Successfully!");
                })
        }
    }, [id]);

    function handleAddBook(e) {
        e.preventDefault();
        console.log(formData);
        fetch(`http://localhost:3000/books${id ? '/' + id : ''}`, {
            body: JSON.stringify(formData),
            method: id ? "PATCH" : "POST",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((resp) => resp.json())
            .then((newBook) => {
                console.log(newBook);
                onBookAdded(newBook);
            });
    }

    function onInputChange(event) {
        console.log(event.target);
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    }

    return (
        <form onSubmit={handleAddBook} >
            <div>
                <input type="text" name="title" placeholder="Title" value={formData.title} onChange={onInputChange} />
            </div>
            <div>
                <input type="text" name="author" placeholder="Author" value={formData.author} onChange={onInputChange} />
            </div>
            <div>
                <textarea rows="5" name="description" placeholder="Description" value={formData.description} onChange={onInputChange}></textarea>
            </div>
            <div>
                <input type="text" name="image" placeholder="image URL" value={formData.image} onChange={onInputChange} />
            </div>
            <br></br>
            <div>
                <button type="button" class="btn btn-primary">Add Book</button>
            </div>
        </form>
    );
}
export default AddBook;