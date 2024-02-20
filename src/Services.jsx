import "./index.css"

function Services(){
    return(
        <div className="MainDisplay2">
            <div className="head1">
                Our Services
            </div>
            <div className="description1">
                <div className="servicediv"> 
                    <div className="heading2">Civil Works</div> 
                    <ul>
                        <li>Building Construction</li>
                        <li>Foundation Work</li>
                    </ul>
                </div>
                <div className="servicediv"> 
                    <div className="heading2">Electrical Works</div> 
                    <ul>
                        <li>Railway Electrification Works</li>
                        <li>HT & LT External Electrification</li>
                        <li>Sub Station Works</li>
                        <li>Electrical Installation and Maintenance Works</li>
                    </ul>
                </div>
                <div className="servicediv"> 
                    <div className="heading2">Environmental Works</div> 
                    <ul>
                        <li>Water Remediation</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Services