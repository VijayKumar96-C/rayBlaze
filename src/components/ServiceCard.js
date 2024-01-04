import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpa, faHouse, faBusinessTime, faRing, faTv, faAngleDown } from "@fortawesome/free-solid-svg-icons"

function ServiceCard() {
    return(
        <div className="serviceCardContainer" >
            <div className="downArrow" >
                <FontAwesomeIcon icon={faAngleDown} />
            </div>
            <div className="serviceIcons flexRow" >
                <span><FontAwesomeIcon className="servIcons" icon={faTv} /><p>Appliance Repair</p></span>
                <span><FontAwesomeIcon icon={faSpa} className="servIcons"/><p>Beauty and Spa</p></span>
                <span> <FontAwesomeIcon icon={faHouse} className="servIcons"/><p>Home Cleaning & Repairs</p></span>
               <span><FontAwesomeIcon icon={faBusinessTime} className="servIcons"/><p>Business & Taxes</p></span>
                <span> <FontAwesomeIcon icon={faRing} className="servIcons"/><p>Wedding & Events</p></span>
               
            </div>
        </div>
    )
}

export default ServiceCard