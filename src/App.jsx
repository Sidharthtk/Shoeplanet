import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Pages/Home'
import Products from './Components/Products'
import Sale from './Pages/Sale'
import Footer from './Components/Footer'
import Men from './Pages/Men'
import Women from './Pages/Women'
import { Route, Router, Routes } from 'react-router-dom'
import SaleBar from './Components/SaleBar'
import Shoe from './Pages/Shoe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/sale' element={<Sale/>}/>
          <Route path='/men' element={<Men/>}/>
          <Route path='/women' element={<Women/>}/>
          <Route path='/shoe/:id' element={<Shoe/>}/>
          

          
       
        </Routes>



        {/* <Sale/> */}
        {/* <Men/> */}
        {/* <Women /> */}
        {/* <Shoe/> */}

      </div>

    </>
  )
}

export default App
