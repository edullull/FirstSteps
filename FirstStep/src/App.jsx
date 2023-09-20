import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Mybutton from './components/MyButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>Este es mi boton</h1>
      <div className="card">
        <Mybutton />
      </div>
     
    </>
  )
}

export default App
