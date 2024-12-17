import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../store/cartSlice'

const Cart = () => {
  const cart=useSelector(state=>state.cart.cart)
    const totalQantity=useSelector(state=>state.cart.totalQantity)
    const totalAmount=useSelector(state=>state.cart.totalAmount)
  const dispatch=useDispatch()

  function handleRemoveFromCart(id){
    dispatch(removeFromCart(id))
  }

  

  
  return (
    <div className='text-white mt-10'>
      <h2 className='text-white font-bold text-2xl'>Cart</h2>
      <p className='text-xl my-2'>total Items:{totalQantity}</p>
      <p className='text-xl'>Total Amount:{totalAmount.toFixed(2)} $</p>

      <div className='mt-10'>
        {cart.map((item)=>{
          return(
            <div className='flex  items-center  gap-4 border p-4' key={item.id}>

              <img src={item.image} alt="" className='w-[100px] bg-white p-2 rounded mb-2'/>

              <p className='mb-3 text-white'>Qantity: {item.quantity}</p>
              <p className='mb-3 text-white'>price: {item.price}</p>

              <button 
              onClick={()=>handleRemoveFromCart(item.id)}
              className='bg-yellow-500 text-black p-2  rounded-xl capitalize hover:bg-white'>remove</button>

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Cart
