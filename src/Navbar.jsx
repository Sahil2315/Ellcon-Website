import { NavLink } from "react-router-dom"
import "./index.css"
let clickToggle = false
function isTouch(){
    const userAgent = navigator.userAgent;
    return userAgent.indexOf('touch') !== -1;
}
function Navbar(){
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
    let navElementPress = () => {
        if(window.innerWidth <= 830){
            clickToggle = true
            btnpress()
        }
    }
    return(
        <div>
            <div id="navbar">
                <NavLink onTouchStart= {isTouch() ? {navElementPress} : null} onClick= {isTouch() ? null : {navElementPress}} className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/">Home</NavLink>
                <NavLink onTouchStart= {isTouch() ? {navElementPress} : null} onClick= {isTouch() ? null : {navElementPress}} className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/services">Services</NavLink>
                <NavLink onTouchStart= {isTouch() ? {navElementPress} : null} onClick= {isTouch() ? null : {navElementPress}} className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/projects">Our Projects</NavLink>
                <NavLink onTouchStart= {isTouch() ? {navElementPress} : null} onClick= {isTouch() ? null : {navElementPress}} className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/aboutus">About Us</NavLink>
                <NavLink onTouchStart= {isTouch() ? {navElementPress} : null} onClick= {isTouch() ? null : {navElementPress}} className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/contact">Contact Us</NavLink>
            </div>
            <div onTouchStart={ isTouch ? btnpress : null } onClick={ isTouch ? null : btnpress } id="navbtn">
                <div id="nbline1"></div>
                <div id="nbline2"></div>
                <div id="nbline3"></div>
            </div> 
        </div>       
    )
}


export default Navbar