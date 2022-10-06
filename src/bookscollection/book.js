// import { useParams } from "react-router-dom";
import './books.css'

function Book({ id, title, image, author, description }) {
    // const params = useParams();

    return (
        <div className="booksContainer">
            <div>
                <img src={image} height={150} alt="image" />
                <h5> {title} </h5>
                <h6> By: {author} </h6>
                <p>{description}</p>
            </div>
            <div className="buttons">
                <button type="button" class="btn btn-primary">READ</button>
            </div>
        </div>
    );
};
export default Book;
