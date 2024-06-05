import React from 'react'

export const MapDemo = () => {
    var users = ["ram","shyam","Aditya","Ruthvik"];
    var employees = [
        {
            id:101,
            name:"Vaibhav"
        },
        {
            id:102,
            name:"Sonu"
        }
    ]
  return (
    <div>
        <h1 style={{color:"blue"}}>MapDemo</h1>
        <ul>
            {
                users.map((u) => {
                    return <li>{u}</li>
                })
            }
        </ul>
        
        <ul>
            {
                employees.map((emp) => {
                    return(
                        <li>{emp.id} {emp.name}</li>
                    )
                })
            }
        </ul>
    </div>
  )
}
