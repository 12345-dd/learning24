import { Box, Grid } from '@mui/material'
import React from 'react'
import {ApiTable} from "./ApiTable"
import image from "../../components/assets/image/cellphone.webp"
import image1 from "../../components/assets/image/chart.jpg"

export const Dashboard = () => {
  return (
    <Box>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
            <Box
                sx={{
                    backgroundColor: "#E8E8E8",
                    height: "auto",
                    maxWidth: '100%',
                    border: "1px solid white",
                    borderRadius: "16px",
                    margin: "20px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"flex-start",
                    padding:"25px",
                }}
            >
                <h6>Valor da vendas</h6>
                <h4>2000</h4>
            </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Box
                sx={{
                    backgroundColor: "#E8E8E8",
                    height: "auto",
                    maxWidth: '100%', 
                    border: "1px solid white",
                    borderRadius: "16px",
                    margin: "20px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"flex-start",
                    padding:"25px",
                }}
            >
                <h6>Lucro Total</h6>
                <h4>367K</h4>
            </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Box
                sx={{
                    backgroundColor: "#E8E8E8",
                    height: "auto",
                    maxWidth: '100%', 
                    border: "1px solid white",
                    borderRadius: "16px",
                    margin: "20px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    alignItems:"flex-start",
                    padding:"25px"
                }}
            >
                <h6>Quantidadae de vendas</h6>
                <h4>1,156</h4>
            </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
            <Box
                sx={{
                        backgroundColor: "#E8E8E8",
                        height: "auto",
                        maxWidth: '100%', 
                        border: "1px solid white",
                        borderRadius: "16px",
                        margin: "20px",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        alignItems:"flex-start",
                        padding:"25px"
                }}
            >
                <h6>Itens vendidos</h6>
                <h4>239</h4>
            </Box>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={9}>
                <Box
                    sx={{
                    backgroundColor: "#F8F8F8",
                    height: "auto",
                    maxWidth: '100%', 
                    border: "1px solid white",
                    borderRadius: "16px",
                    margin: "20px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    padding:"25px",
                    overflow:"auto",
                    }}
                >
                    <ApiTable/>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={3}>
            <Box
                sx={{
                        backgroundColor: "#F8F8F8",
                        height: "auto",
                        maxWidth: '100%',
                        border: "1px solid white",
                        borderRadius: "16px",
                        margin: "20px",
                        display:"flex",
                        flexDirection:"column",
                        justifyContent:"center",
                        padding:"25px"
                }}
            >
                <img src={image} alt="image1" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
            </Grid>
        </Grid>
        <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
                <Box
                    sx={{
                    backgroundColor: "#F8F8F8",
                    height: "auto",
                    maxWidth: '100%', 
                    border: "1px solid white",
                    borderRadius: "16px",
                    margin: "20px",
                    display:"flex",
                    flexDirection:"column",
                    justifyContent:"center",
                    padding:"25px",
                    overflow:"auto",
                    }}
                >
                    <img src={image1} alt="image2" style={{ maxWidth: '100%', height: 'auto' }} />
                </Box>
            </Grid>
        </Grid>
        
    </Box>
  )
}
