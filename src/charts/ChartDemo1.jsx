import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Box } from "@mui/material";

ChartJS.register(ArcElement, Tooltip, Legend,CategoryScale,LinearScale,BarElement);

export const ChartDemo1 = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales for 2020 (M)",
        data: [3, 2, 2, 1, 5, 6],
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
      },
    ],
  };
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <Pie data={data} /> 
    </Box>
  );
};