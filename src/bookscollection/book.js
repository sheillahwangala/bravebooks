// import { useParams } from "react-router-dom";
import './books.css'

function Book({ id, title, image, author, description }) {
    // const params = useParams();

    return (
        <div>
            <div className="booksContainer">
                <img src={image} height={150} alt={title} />
                <h5> {title} </h5>
                <h6> By: {author} </h6>
                <p>{description}</p>
            </div>
        </div>
    );
};
export default Book;
