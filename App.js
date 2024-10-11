
import './App.css';
import Homepage from './componens/Homepage';
import Navbar from './componens/Navbar';
import 'animate.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProductSceen from './componens/ProductSceen';
import PagenotFaound from './PagenotFaound';
import Shope from './componens/Shope';
import { useState } from 'react';
import data from './componens/Data_5';
import Login from './componens/Login';
import Purchase from './componens/Purchase';
import PaymentScreen from './componens/PaymentPortal';









function App() {


  const [box, setBox] = useState([...data])

  const [cart, setCart] = useState([])

  const [mode, setMode] = useState("light")
  const [img, setImg] = useState("https://cosma.wpengine.com/wp-content/uploads/2021/03/logo.png")

  function ImgTogal() {

    if (img === "https://cosma.wpengine.com/wp-content/uploads/2021/03/logo.png") {

      setImg("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwyiX8gEvf8BIdYGK4nS9yBydMGT2hKgjogDx0CyOflg&s")
    } else {
      setImg("https://cosma.wpengine.com/wp-content/uploads/2021/03/logo.png")
    }

  }

  function togal() {
    if (mode === "light") {

      setMode("dark")
      document.body.style.backgroundColor = "#102C57"
      document.body.style.color = "white"
    } else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "black"
    }
  }
  return (
    <BrowserRouter>

      <Navbar mode={mode} togal={togal} img={img} ImgTogal={ImgTogal} />




      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/Product/:id' element={<ProductSceen cart={cart} setCart={setCart} />} />
        <Route path='/Shope/:id' element={<ProductSceen cart={cart} setCart={setCart} />} />
        <Route path='/shop' element={<Shope box={box} setBox={setBox} />} />
        <Route path='/purchase' element={<Purchase cart={cart}  />} />
        <Route path='/Paymentportal' element={<PaymentScreen/>}/>
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='*' element={<PagenotFaound />} />
      </Routes>





    </BrowserRouter>

  )

}

export default App;




