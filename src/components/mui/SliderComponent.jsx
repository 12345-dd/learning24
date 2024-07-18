import { Slider } from '@mui/material'
import React, { useState } from 'react'

export const SliderComponent = () => {
    const employees = [
        { id: 1, name: 'Mayur', salary: 20000 },
        { id: 2, name: 'Sandeep', salary: 35000 },
        { id: 3, name: 'Rakesh', salary: 45000 },
        { id: 4, name: 'Mukesh', salary: 15000 },
        { id: 4, name: 'Ashish', salary: 10000 },
        { id: 5, name: 'Satish', salary: 30000 },
        { id: 6, name: 'Raj', salary: 50000 },
      ];

      const [salary, setSalary] = useState(10000);

    
      const filteredEmployees = employees.filter(
        employee => employee.salary <= salary
      );
    
  return (
    <div style={{padding:"20px"}}>
      <h2>Employees Salary Using Slider</h2>
      <Slider
        value={salary}
        onChange={(event,newValue)=>{
          setSalary(newValue)
        }}
        valueLabelDisplay="auto"
        min={10000}
        max={50000}
        step={10000}
      />
      <ul style={{listStyleType:"none"}}>
        {filteredEmployees.map(employee => (
          <li>{employee.name} - {employee.salary}</li>
        ))}
      </ul>
    </div>
  )
}
