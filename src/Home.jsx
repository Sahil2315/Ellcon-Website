import "./index.css"
import Img1 from "./assets/homepage1.jpg"

function Home(){
    return(
        <div className="MainDisplay">
            <div className="bigCont">
                Started as <span style={{fontSize: 40, fontWeight: 600, color: "black", marginLeft: 20}}>Lunawat Construction</span>, <br />
                <span style={{fontSize: 40, fontWeight: 600, color: "black", marginRight: 20}}>Ellcon Projects</span>is your gateway to a world where innovation, excellence, and strategic planning converge to redefine the landscape of infrastructure. As a distinguished leader in the field, we specialize in Electrical Engineering, Civil Engineering, and Business Planning, seamlessly integrating these pillars to shape a sustainable and resilient future. Our commitment to cutting-edge solutions and unwavering dedication fuels our passion for excellence in every project we undertake. <br />
                Join us on this journey of innovation and transformation. Together, we are not just building infrastructure; we are crafting a legacy that echoes our commitment to excellence. <br />
                Welcome to Ellcon Projects, where the convergence of expertise in Electrical Engineering, Civil Engineering, and Business Planning sets the stage for a brighter, more connected world.
            </div>
            <div className="bigImg">
                <div className="sideimg"/>
            </div>
        </div>
    )
}

export default Home