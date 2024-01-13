import { NavLink } from "react-router-dom"
import "./index.css"
function Navbar(){

    let normalLinkStyling = "navElements"
    let activeLinkStyling = "navElements active"

    return(
        <div className="navbar">
            <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/">Home</NavLink>
            <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/services">Services</NavLink>
            <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/projects">Our Projects</NavLink>
            <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/aboutus">About Us</NavLink>
            <NavLink className={ ({isActive}) => isActive ? activeLinkStyling : normalLinkStyling } to="/contact">Contact Us</NavLink>
        </div>
    )
}


export default Navbar