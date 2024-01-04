import Card from "./ResubaleComponents/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

function WeddingServices({ services, text }) {
    return (
        <div className="serviceList" >
            <h2>{text}</h2>
            <div className="flexRow arrowParent" >
                <div className="arrowContainer" >
                    <FontAwesomeIcon className="arrowIcon" icon={faArrowLeft} />
                </div>
                {services.map((service) => {
                    return (
                        <Card key={service.id} service={service} />
                    )
                })}
                <div className="arrowContainerRight" >
                    <FontAwesomeIcon className="arrowIcon" icon={faArrowRight} />
                </div>

            </div>
        </div>

    )
}

export default WeddingServices