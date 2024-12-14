import { createSlice } from "@reduxjs/toolkit";


const initialState=[]
const productSlice=createSlice({
  name:'products',
  initialState,
  reducers:{
  addToCart(state,action){

  },
  removeFromCart(state,action){

  }
  }
})

const {addToCart}=productSlice.actions
export default productSlice.reducer