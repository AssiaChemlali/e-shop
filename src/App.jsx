
import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Cart from './components/Cart'
function App() {


  return (
    <BrowserRouter>
      <div className='bg-black p-10 w-full h-full font-sans'>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Products/> }/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      
      </div>
    </BrowserRouter>
  )
}

export default App
