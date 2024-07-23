import { DataGrid } from '@mui/x-data-grid'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const ApiTable = () => {

    const [users, setusers] = useState([])
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
            width:"150",
            renderCell:(params)=>{
                var color;

                var age = params.value;

                if(age > 60){
                    color="red";
                } else if(age > 30 && age < 60){
                    color="yellow";
                } else {
                    color="blue";
                }
                return(
                    <span style={{color:color}}>
                        {params.value}
                    </span>
                )
            }
        },
        {
            field:"isActive",
            headerName:"status",
            width:"250",
            sortable:false,
            renderCell:(params)=>{
                console.log("type",typeof(params.value));
                console.log("Value",params.value);
                return (
                    <span style={{ color: params.value? 'green' : 'red' }}>
                        {params.value ? "true" : "false"}
                    </span>
                )
            }
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
    <div style={{ height: 400, width: '100%' ,margin:"2px"}}>
    <DataGrid
      rows={users}
      columns={columns}
      getRowId={(row)=>row._id}
      initialState={{
        pagination: { paginationModel: { pageSize: 5 } },

      }}
      pageSizeOptions={[5, 10, 15]}
      autoHeight={users}
    />
  </div>
  )
}
