import React from 'react'

export const Content = (props) => {
    var boxStyle = {
        width: "auto",
        height: "auto",
        backgroundColor: "#779B9D",
        color: "white",
    }
    var age = 18;
    var name = "Mayur";
    var isMarried = true;
    var user = {
      name : "Raj",
      city : "Surat"
    }
  return (
    <div style={boxStyle}>
      <h1 style={{color:"green",backgroundColor:"red"}}> Welcome to the World of React...</h1>
      <p> Note-1 : Every tag must have closing tag.</p>
      <p> Note-2 : whatever we write in return, it will only show on Browser.</p>
      <p> Note-3 : At a time we return only one tag.</p>
      <p> Age = {age}</p>
      <p> Name = {name}</p>
      <p>Is Married = {isMarried ? "married" : "un-married"}</p>
      <p>User Name = {user.name}</p>
      <p>User City = {user.city}</p>
      <p>Users Name = {props.users.name}</p>
    </div>
  )
}
