import { useState } from 'react'
import EllconLogo from './assets/Logo.png'
import marker from './assets/marker.png'
import logotext from './assets/logotext.png'
import LPBD from './assets/LPBD.png'
import Navbar from './Navbar'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function removeCover() {
    const Cover = document.getElementById('cover')
    setTimeout('', 2000);
    Cover.style.display = 'none'
  }
  return (
    <>
    <img className='LPBD' src={LPBD}/>
      <div id="cover">
        <img id='marker' src={marker}/>
        <img id='logotext' src={logotext}/>
      </div>
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
