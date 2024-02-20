import { useState, useEffect } from 'react'
import marker from './assets/marker.png'
import logotext from './assets/logotext.png'
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
    <div className='LPBD'/>
    <Loader visible={visible} setVisible={setVisible}/>
      <div className='maindiv'>
        <div className="headline">
          <div className="headbg"></div>
          <img className='marker' src={marker}/>
          <img className='logotext' src={logotext}/>
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
