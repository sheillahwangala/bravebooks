import { useParams } from "react-router-dom";

function Book ({id, title, image, author, description}) {
    const params = useParams();

    return (
        <div>
            <img src={image} height={150} />
            <h2> {title} </h2>
            <h4> {author} </h4>
            <p>{description}</p>
            <button type="button" onClick={like} >Like | {likes}</button>
        </div>
    );
};
export default Book;