
import { Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
function App() {


  return (
   
      <div className='bg-black p-10 container h-screen font-sans'>
        <Navbar/>
        <Products/> 
        
        <Routes>
          <Route path="." element={<App/>}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      
      </div>
    
  )
}

export default App
