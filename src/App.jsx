
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
function App() {


  return (
   
      <div className='bg-black p-10 w-full font-sans'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Products/> }/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      
      </div>
    
  )
}

export default App
