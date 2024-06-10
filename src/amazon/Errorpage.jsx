import React from 'react'
import '../assets/css/error.css'
import { Link } from 'react-router-dom'

export const Errorpage = () => {
  return (
    <div className="container">
        <div className="gif">
            <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
        </div>
        <div className="content">
            <h1 className="main-heading">This page is gone.</h1>
            <p>...maybe the page you're looking for is not found or never existed.</p>
            <Link to="https://www.google.co.in/" target="blank">
            <Link to="/">
            <button>
                Back to home <i className="far fa-hand-point-right" />
            </button>
            </Link>
            </Link>
        </div>
    </div>
  )
}
