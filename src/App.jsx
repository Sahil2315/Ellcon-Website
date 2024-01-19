import { useState, useEffect } from 'react'
import EllconLogo from './assets/Logo.png'
import LPBD from './assets/LPBD.png'
import Navbar from './Navbar'
import Home from './Home'
import Services from './Services'
import Projects from './Projects'
import About from './About'
import Contact from './Contact'
import Loader from './Loader'
import './App.css'
import { Routes, Route } from 'react-router-dom'

const tabs = ['Home', 'Services']

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <>
    <img className='LPBD' src={LPBD}/>
    <Loader visible={visible} setVisible={setVisible}/>
      <div className='maindiv'>
        <div className="headline">
          <div className="headbg"></div>
          <img className='logoimg' src={EllconLogo}/>
          <Navbar/>
        </div>
      </div>
      <Routes>
        <Route path='/' element = {<Home/>}/>
        <Route path='/services' element = {<Services/>}/>
        <Route path='/projects' element = {<Projects/>}/>
        <Route path='/aboutus' element = {<About/>}/>
        <Route path='/contact' element = {<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
