import { NavLink } from "react-router-dom"
import "./index.css"
let toggle = false
function Navbar(){
    let normalLinkStyling = "navElements"
    let activeLinkStyling = "navElements active"
    let btnpress = () => {
        let navbar = document.getElementById("navbar")
        let navbtn = document.getElementById("navbtn")
        let line1 = document.getElementById("nbline1")
        let line2 = document.getElementById("nbline2")
        let line3 = document.getElementById("nbline3")
        
        if(toggle){
            line2.style.opacity = "100%"
            toggle = false
            navbar.style.display = "none"
            line1.style.transform = "rotate(0deg) scaleX(1)"
            line3.style.transform = "rotate(0deg) scaleX(1)"
        }
        else{
            line2.style.opacity = "0%"
            toggle = true
            navbar.style.display = "flex"
            line1.style.transform = "rotate(45deg) scaleX(1.21)"
            line3.style.transform = "rotate(-45deg) scaleX(1.21)"
        }        
    }
    return(
        <div>
            <div id="navbar" className="navbar">
                <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/">Home</NavLink>
                <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/services">Services</NavLink>
                <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/projects">Our Projects</NavLink>
                <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/aboutus">About Us</NavLink>
                <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/contact">Contact Us</NavLink>
            </div>
            <div onClick={btnpress} id="navbtn">
                <div id="nbline1"></div>
                <div id="nbline2"></div>
                <div id="nbline3"></div>
            </div> 
        </div>       
    )
}


export default Navbar