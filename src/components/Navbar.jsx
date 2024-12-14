import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router';
const Navbar = () => {
  return (
    <nav className='flex items-center '>
        <h2 className='text-white text-2xl font-bold'>
          <Link to=".">e-shop</Link>
        </h2>
        <Link to="/cart" className='ml-auto flex items-center gap-2'>
          <span className='text-white'><FaShoppingCart /></span>
          <span className='text-white text-base '>Cart(0)</span>
        </Link>
    </nav>
  )
}

export default Navbar
