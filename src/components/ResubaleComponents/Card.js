import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"

function Card({ service }) {

    return (
        <div className="ServiceCard" >
            <img src={service.image} alt={service.name} />
            <div>
                <span className="flexRow cardTextPad"><p>{service.name}</p><p>RS-{service.price}</p></span>
                <span className="flexRow cardTextPad" ><p  ><span className="textClr" ><FontAwesomeIcon icon={faStar} />{` ${service.rating}`}</span><span className="textGrey">{` ${service.reviews} (reviews)`}</span></p> <p className="textGrey" >{service.place}</p></span>
            </div>

        </div>
    )
}

export default Card