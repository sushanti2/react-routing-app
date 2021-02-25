import React from 'react';
import {Link} from 'react-router-dom';

let Navbar = () => {
    return(
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark navbar-expand-sm font-weight-bold">
                <div className="container px-3">
                    <ul className="navbar-nav ">
                        <li className="nav-item px-2">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/employees" className="nav-link">Employees</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/stocks" className="nav-link">Stocks</Link>
                        </li>
                        <li className="nav-item px-2">
                            <Link to="/about" className="nav-link">About</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </React.Fragment>
    )
};

export default Navbar;