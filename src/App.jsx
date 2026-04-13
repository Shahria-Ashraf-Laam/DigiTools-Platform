import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import Banner from './components/Banner';

function App() {
  const [selectType, setSelectType] = useState("products")
  const [carts, setCarts] = useState([])

  return (
    <>

    <Navbar carts={carts} setCarts={setCarts} cartCount={carts.length}></Navbar>

    <Banner></Banner>
    </>
  )
}

export default App
