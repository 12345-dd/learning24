import React from 'react'
import { StudentList } from './StudentList'

export const Students = () => {
    var students = [
        {
            id:101,
            name:"Mayur",
            age:21,
            marks:95
        },
        {
            id:102,
            name:"Raj",
            age:20,
            marks:80
        },
        {
            id:103,
            name:"Aditya",
            age:18,
            marks:90
        },
        {
            id:104,
            name:"vishal",
            age:22,
            marks:75
        },        
        {
            id:105,
            name:"suresh",
            age:24,
            marks:40
        },        
        {
            id:106,
            name:"Rudra",
            age:19,
            marks:70
        }
    ]

    var deleteStudent = (id) => {
        alert(`Delete Student ID = ${id}`);
    }
  return (
    <div>
        <h1 style={{color:"green"}}>Students</h1>
        <StudentList students={students} del={deleteStudent}/>
    </div>
  )
}
