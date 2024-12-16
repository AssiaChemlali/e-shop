import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import Product from './Product'

const Products = () => {
  const products=useSelector(state=>state.cart.products)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])

// console.log(products)

  return (
    <div className='mt-10'>
      <div className='grid sm:grid-cols-3 gap-3'>
        {
          products.map((product)=>{
            return (
              <Product product={product} key={product.id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Products
