import { useState } from "react";


function Search({ onSearch, textSearch }) {
    const [searchData, setSearchData] = useState({
        searchText: ''
    });

    function handleChange(e) {
        console.log(e.target.name, e.target.value);
        setSearchData({ ...searchData, [e.target.name]: e.target.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSearch(searchData.searchText);
    }

    return (
        <div>
            <form onSubmit={handleSubmit} >
                <input type="text" name="searchText"
                    value={searchData.textSearch}
                    onChange={handleChange}
                    placeholder="Search by title" />
                <button>Search</button>
            </form>
        </div>
    )
}
export default Search;