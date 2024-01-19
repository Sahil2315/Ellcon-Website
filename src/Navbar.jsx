import { NavLink, useLocation } from "react-router-dom"
import "./index.css"
import { useEffect, useRef } from 'react'

let clickToggle = false

function Navbar(){
  const location = useLocation()
  let navbarRef = useRef()
  let navBtnRef = useRef()

    let elseWhereClick = (event) => {
        if(event.target != navbarRef.current && event.target != navBtnRef.current && clickToggle == true){
            shutNav()
        }
    }
    useEffect(() => {
        document.addEventListener('click', elseWhereClick)
        return () => document.removeEventListener('click', elseWhereClick)
    }, [])
    useEffect(() => {
        shutNav()
    }, [location])

    let normalLinkStyling = "navElements"
    let activeLinkStyling = "navElements active"
    let btnpress = () => {
        let navbar = document.getElementById("navbar")
        let navbtn = document.getElementById("navbtn")
        let line1 = document.getElementById("nbline1")
        let line2 = document.getElementById("nbline2")
        let line3 = document.getElementById("nbline3")
        let navE = document.querySelectorAll('.navElements')
        if(clickToggle){
            line2.style.opacity = "100%"
            clickToggle = false
            navbar.style.height = "0px"
            line1.style.transform = "rotate(0deg) scaleX(1)"
            line3.style.transform = "rotate(0deg) scaleX(1)"
        }
        else{
            line2.style.opacity = "0%"
            clickToggle = true
            navbar.style.height = "330px"
            line1.style.transform = "rotate(45deg) scaleX(1.21)"
            line3.style.transform = "rotate(-45deg) scaleX(1.21)"
        }        
    }
    let shutNav = () => {
        if(window.innerWidth <= 830){
            clickToggle = true
            btnpress()
        }
    }

    return(
        <div>
            <div ref = {navbarRef} id="navbar">
                <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/">Home</NavLink>
                <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/services">Services</NavLink>
                <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/projects">Our Projects</NavLink>
                <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/aboutus">About Us</NavLink> 
                <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/contact">Contact Us</NavLink>
            </div>
            <div ref={navBtnRef} onClick={ btnpress } id="navbtn">
                <div id="nbline1"></div>
                <div id="nbline2"></div>
                <div id="nbline3"></div>
            </div> 
        </div>       
    )
}


export default Navbar