import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h2 className='text-red-500 bg-black py-8 text-center font-bold'>Hello</h2>
    </>
  )
}

export default App
