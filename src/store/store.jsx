import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './productSlice'
const  store=configureStore({
  reducer:{
    cart:cartReducer
  }
})

export default store