import { DataGrid } from '@mui/x-data-grid'
import React from 'react'

export const TableComponent = () => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 90,
    },
    {
      field: "name",
      headerName: "Name",
      width: 150,
    },
    {
      field: "age",
      headerName: "Age",
      width: 110,
    },
  ];

  const rows = [    
    { id: 1, name: "Mayur", age: 22 },
    { id: 2, name: "Raj", age: 20 },
    { id: 3, name: "Rithvik", age: 26 },
    { id: 4, name: "Rakesh", age: 25 },
    { id: 5, name: "Mohsin", age: 16 },
    { id: 6, name: "Jay", age: 17 },
    { id: 7, name: "Gurbaz", age: 23 },

  ];
  return (
    <div>
      <h1>MUI TABLE</h1>
      <DataGrid rows={rows} columns={columns} sx={{color:"red"}}></DataGrid>
    </div>
  )
}
