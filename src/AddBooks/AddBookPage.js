import AddBook from "./AddBook";
import { Outlet } from "react-router-dom";


function AddBooksPage() {
    return (
        <>
            <div className='d-inline-block flex-column'>
                <h3 className='text-cente mx-auto'>Add New Book</h3>
                <Outlet />
            </div>
            <AddBook />
        </>
    )
}
export default AddBooksPage;