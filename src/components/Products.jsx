import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import Product from './Product'

const Products = () => {
  const products=useSelector(state=>state.cart.products)
  const loading=useSelector(state=>state.cart.loading)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])



  return (
    <div className='mt-10'>
      {loading && <p className='text-white mb-2'>Loading data ...</p>}
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
