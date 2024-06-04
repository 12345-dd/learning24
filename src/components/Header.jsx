import React from 'react'
import '../assets/css/header.css'

export const Header = (props) => {
  return (
    <div className='header'>
        <h1>Header Component</h1>
        <p>{props.title}</p><br/>
    </div>
  )
}
