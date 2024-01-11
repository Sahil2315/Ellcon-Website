import { Link } from "react-router-dom"
import "./index.css"
function Navbar(){
    return(
        <div className="navbar">
            <Link className="navElements active" to="/">Home</Link>
            <Link className="navElements" to="/services">Services</Link>
            <Link className="navElements" to="/projects">Our Projects</Link>
            <Link className="navElements" to="/aboutus">About Us</Link>
            <Link className="navElements" to="/contact">Contact Us</Link>
        </div>
    )
}


export default Navbar