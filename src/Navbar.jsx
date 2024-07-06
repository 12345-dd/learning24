import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setTheme } from './redux/ThemeSlice'

export const Navbar = () => {
    const cartState = useSelector((state)=>{
        return state.cart.cart
    })
    console.log(cartState.length);

    const bankState = useSelector((state)=>{
        return state.bank.balance;
    })
    console.log(bankState);

    const dispatch = useDispatch();
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light" style={{backgroundColor: "#e3f2fd",height:"75px"}}>
    <button onClick={()=>{dispatch(setTheme("dark"))}}>change theme</button>
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
            <li class="nav-item active">
                <Link class="nav-link" to="/books">
                books {
                    cartState.length
                }
                </Link>
                
             </li>
             <li className="nav-item active">
                <Link className="nav-link" to="/bank">
                    Balance {bankState}
                </Link>
            </li>
            </ul>
        </div>
     </nav>

    </div>
  )
}
