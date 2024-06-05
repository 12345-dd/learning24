import React from 'react'
import { StudentList } from './StudentList'

export const Students = () => {
    var students = [
        {
            id:101,
            name:"Mayur",
            age:21
        },
        {
            id:102,
            name:"Raj",
            age:20
        },
        {
            id:103,
            name:"Aditya",
            age:18
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
