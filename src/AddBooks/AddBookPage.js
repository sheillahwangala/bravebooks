import AddBook from "./AddBook";
import { Outlet } from "react-router-dom";


function AddBooksPage() {
    return (
        <>
            <div className='d-inline-block flex-column'>
                <div className='text-cente mx-auto'>Add New Book</div>
                <Outlet />
            </div>
            <AddBook />
        </>
    )
}
export default AddBooksPage;