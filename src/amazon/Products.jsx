import React from 'react'
import { Link } from 'react-router-dom'

export const Products = () => {
  return (
    <div>
        <h1>Products</h1>
        <ul style={{listStyleType:'none'}}>
            <li>
                <Link to="/products/electronics"><h6>Electronics</h6></Link>
            </li>
            <li>
                <Link to="/products/fashion"><h6>Fashion</h6></Link>
            </li>
        </ul>
        <h1>Product List</h1>
        <ul>
            <li>
                <Link to="/products/details/101">Product-1</Link>
            </li>
            <li>
                <Link to="/products/details/102">Product-2</Link>
            </li>
            <li>
                <Link to="/products/details/103">Product-3</Link>
            </li>
        </ul>
    </div>
  )
}
