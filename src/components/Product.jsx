import React, { useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { addToCart } from '../store/productSlice'

const Product = ({product}) => {
  const dispatch=useDispatch()

  function handleAddToCart(){
    const cartItem={
      id:product.id,
      image:product.image,
      quantity:1
    }
    dispatch(addToCart(cartItem))
    
  }
 
  return (
    <div 
    className='p-3 rounded bg-white flex flex-col items-center' 
    key={product.id}>
      <img src={product.image} alt="" className='h-[200px] mb-5' />
      <button 
      onClick={handleAddToCart}
      className='bg-orange-500 text-white p-2 rounded capitalize'>add to cart</button>
    </div>
  )
}

export default Product
