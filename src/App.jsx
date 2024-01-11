import { useState } from 'react'
import EllconLogo from './assets/Logo.png'
import LPBD from './assets/LPBD.jpg'
import Navbar from './Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <img className='LPBD' src={LPBD}/>
      <div className='maindiv'>
        <div className="headline">
          <div className="headbg"></div>
          <img className='logoimg' src={EllconLogo}/>

          <Navbar/>
        </div>
      </div>
    </>
  )
}

export default App
