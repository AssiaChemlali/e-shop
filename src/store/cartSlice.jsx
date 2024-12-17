import {  createSlice } from "@reduxjs/toolkit";



const initialState={
  cart:[],
  totalQantity:0,
  totalAmount:0
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
        state.totalQantity+=1
      }else{
        state.cart[index].quantity+=1
        state.totalQantity+=1
      }
      state.totalAmount+=action.payload.price
    },
    removeFromCart(state,action){
      const index =state.cart.findIndex((item)=>item.id===action.payload)

      state.totalQantity-=state.cart[index].quantity
       state.totalAmount-=state.cart[index].price* state.cart[index].quantity
      state.cart.splice(index,1)
    }

  },

 
})

export const {addToCart,removeFromCart}=cartSlice.actions
const  cartReducer=cartSlice.reducer
export default cartReducer