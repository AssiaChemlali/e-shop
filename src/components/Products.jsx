import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../store/productSlice'
import Product from './Product'

const Products = () => {
  const products=useSelector(state=>state.product.products)
  const loading=useSelector(state=>state.product.loading)
  const error=useSelector(state=>state.product.error)
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(fetchProducts())
  },[dispatch])



  return (
    <div className='mt-10'>
      {error && <p className='text-white mb-2'>{error}</p>}
      {loading && <p className='text-white mb-2 '>Loading data ...</p>}
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
