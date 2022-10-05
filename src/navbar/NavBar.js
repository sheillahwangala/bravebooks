import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <ul>
            <NavLink to="/">Books</NavLink>
            <NavLink to="/addBooks" >Add Books</NavLink>
        </ul>
    );
};

export default NavBar;