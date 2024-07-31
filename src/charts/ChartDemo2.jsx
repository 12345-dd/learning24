import { Box } from '@mui/material'
import axios from 'axios'
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement } from "chart.js";
import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);

export const ChartDemo2 = () => {
    const [users, setusers] = useState([])

    const getUsers = async() => {
        const res = await axios.get("https://node5.onrender.com/user/user");
        console.log("Users Data" , res.data.data);
        setusers(res.data.data);
    }

    useEffect(() => {
      getUsers();

    }, [])

    const data = {
        labels: users?.map((user)=> user.name),
        datasets:[
            {
                label : "User Data",
                data: users?.map((user) => user.age),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)'
                  ],
                  borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                  ],
                borderWidth: 1,
            }
        ]
    }
    
  return (
    <Box sx={{height:"100%",width:"100%"}}>
        <Bar data={data}/>
    </Box>
  )
}
