import React from 'react'

export const StudentList = (props) => {
    const stuObj = {
        id:107,
        name:"Ashish",
        age:25,
        marks:88
    }
    console.log(props);
  return (
    <div>
        <button onClick={()=>{props.addStudent(stuObj)}} className='btn btn-success'>ADD</button>
        <h1 style={{color:"cyan"}}>Students List</h1>
        <table className='table'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Marks</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.students?.map((s) => {
                        return(
                            <tr>
                                <td>{s.id}</td>
                                <td>{s.name}</td>
                                <td>{s.age}</td>
                                <td>{s.marks}</td>
                                <td>
                                    <button onClick = {()=>{props.del(s.id)}}className='btn btn-danger'>DELETE</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
