import { Box } from '@mui/material'
import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ApiTable = () => {

    const [users, setusers] = useState()
    const columns = [
        {
            field:"_id",
            headerName:"ID",
            width:"250"
        },
        {
            field:"name",
            headerName:"Name",
            width:"250"
        },
        {
            field:"email",
            headerName:"E-mail",
            width:"250"
        },
        {
            field:"age",
            headerName:"Age",
            width:"150"
        },
        {
            field:"isActive",
            headerName:"status",
            width:"250",
            sortable:false,
            
        },
    ]

    const getUsers = async() => {
        const res = await axios.get("https://node5.onrender.com/user/user");
        setusers(res.data.data);
    }

    useEffect(() => {
        getUsers();
    }, [])
    

  return (
    <Box sx={{ height: 400, width: '100%' }}>
    <DataGrid
      rows={users}
      columns={columns}
      getRowId={(row)=>row._id}
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },

      }}
      pageSizeOptions={[5, 10, 25]}
    />
  </Box>
  )
}
