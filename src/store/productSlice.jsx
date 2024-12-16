import {  createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts=createAsyncThunk('cart/fetchProducts',async()=>{
 const url="https://fakestoreapi.com/products?limit=6"
 const response=await fetch(url)
 const data=await response.json()
 return data
})


const initialState={
  products:[],
  cart:[],
  loading:false,
}

const cartSlice=createSlice({
  name:'cart',
  initialState,
  reducers:{

    addToCart(state,action){
      const id=action.payload.id
      const index =state.cart.findIndex((item)=>item.id===id)
      if(index===-1){
        state.cart.push(action.payload)
      }else{
        state.cart[index].quantity+=1
      }

    },
    removeFromCart(state,action){
      const id=action.payload
      console.log(id)
      state.cart= state.cart.filter((item)=>item.id!==id  )
    }

  },

  extraReducers:(builder)=>{
    builder.addCase(fetchProducts.pending,(state)=>{
       state.loading=true;
      //  state.error=null
    })
    builder.addCase(fetchProducts.fulfilled,(state,action)=>{
      state.products=action.payload
      state.loading=false
    })

    builder.addCase(fetchProducts.rejected,(state)=>{
      state.loading=false
      // state.error=error.message
    })
  }
})

export const {addToCart,removeFromCart}=cartSlice.actions
const  cartReducer=cartSlice.reducer
export default cartReducer