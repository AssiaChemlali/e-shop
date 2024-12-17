import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState={
  products:[],
  loading:false,
  error:null
  
}

export const fetchProducts=createAsyncThunk('product/fetchProducts',async()=>{
  const url="https://fakestoreapi.com/products?limit=6"
  const response=await fetch(url)
  const data=await response.json()
  return data
 })
 

const productSlice=createSlice({
  name:'product',
  initialState,
  reducers:{

  },

  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending,(state)=>{
       state.loading=true;
        state.error=null
    })
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
      state.products=action.payload
      state.loading=false
    })

    builder.addCase(fetchProducts.rejected,(state)=>{
      state.loading=false
       state.error=error.message
    })
  }
})

const  productReducer=productSlice.reducer
export default productReducer