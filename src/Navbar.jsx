import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd",height:"75px"}}>
        <Link className="navbar-brand" to="#">
            Navbar
        </Link>
        <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
            <li className="nav-item active">
                <Link className="nav-link" to="/">
                    Home
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/products">
                    Products
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/formdemo1">
                    FormDemo1
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/formdemo2">
                    FormDemo2
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/apidemo1">
                    ApiDemo1
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/apidemo2">
                    ApiDemo2
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/apidemo3">
                    ApiDemo3
                </Link>
            </li>
            <li className="nav-item active">
                <Link className="nav-link" to="/google">
                    Google
                </Link>
            </li>
            </ul>
        </div>
     </nav>

    </div>
  )
}
