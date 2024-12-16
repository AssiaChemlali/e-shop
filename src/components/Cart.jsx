import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromCart } from '../store/productSlice'

const Cart = () => {
  const cart=useSelector(state=>state.cart.cart)
  const dispatch=useDispatch()

  const [totalPrice,setTotalPrice]=useState(0)

  function handleRemoveFromCart(id){
    dispatch(removeFromCart(id))
  }

  useEffect(()=>{
    const totalcart=cart.reduce((acc,curr)=>acc + curr.price,0)
    setTotalPrice(totalcart)
  },[cart])


  
  return (
    <div className='text-white mt-10'>
      <h2 className='text-white font-bold text-2xl'>Cart</h2>
      <p className='text-xl my-2'>total Items:{cart?.length}</p>
      <p className='text-xl'>Total Amount:{totalPrice} $</p>

      <div className='mt-10'>
        {cart.map((item)=>{
          return(
            <div className='flex  items-center  gap-4 border p-4' key={item.id}>

              <img src={item.image} alt="" className='w-[100px] bg-white p-2 rounded mb-2'/>

              <p className='mb-3 text-white'>Qantity: {item.quantity}</p>

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
