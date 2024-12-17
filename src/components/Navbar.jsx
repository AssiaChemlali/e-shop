import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
const Navbar = () => {

  const totalQantity=useSelector(state=>state.cart.totalQantity)
  return (
    <nav className='flex items-center borde-b justify-between'>
        <Link to="/" className='text-white text-2xl font-bold'>e-shop</Link>
        <Link to="/cart" className='flex items-center gap-2'>
          <span className='text-white'><FaShoppingCart /></span>
          <span className='text-white text-base '>Cart({totalQantity})</span>
        </Link>
    </nav>
  )
}

export default Navbar
