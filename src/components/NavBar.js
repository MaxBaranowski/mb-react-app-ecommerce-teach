import React, { Component } from 'react';
import { Link } from "react-router-dom";

class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
                    <ul className="navbar-nav align-item-center">
                        <li className="nav-item ml-5">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item ml-5">
                            <Link className="nav-link" to="/details">Details</Link>
                        </li>
                    </ul>
                    <Link className="ml-auto" to="/cart">Cart</Link>
                </nav>
            </div>
        );
    }
}

export default NavBar;