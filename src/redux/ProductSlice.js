import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    products:[],
    isloading:false,
    error:null
}

export const fetchProduct = createAsyncThunk(
    "product/fetchProduct",
    async()=>{
        const res = await axios.get("https://node5.onrender.com/product/getall");
        return res.data.data;
    }
)

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder.addCase(fetchProduct.pending,(state)=>{
            state.isloading = true
        })
        builder.addCase(fetchProduct.fulfilled,(state,action)=>{
            state.isloading = false
            state.products = action.payload
        })
        builder.addCase(fetchProduct.rejected,(state,action)=>{
            state.isloading = false
            state.error = action.payload
        })
    }
})

export default productSlice.reducer;