import React from "react";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";


//Functional Component ; tek bir return işlemi gerçekleştiriyor.
function Navbar({title}) {

    return (
        <nav className="navbar-nav navbar-expand-lg navbar-dark bg-dark mb-4 p-3">
            <a href="/" className="navbar-brand">{title}</a>

            <ul className="navbar-nav ml-auto">
                <li className="navbar-nav active">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="navbar-nav active">
                    <Link to="/add" className="nav-link">Add User</Link>
                </li>
                <li className="navbar-nav active">
                    <Link to="/github" className="nav-link">Project Files</Link>
                </li>
            </ul>
        </nav>
    )
}

Navbar.propTypes = {
    title: PropTypes.string.isRequired
}
Navbar.defaultProps = {
    title: "Default Title"
}


export default Navbar;