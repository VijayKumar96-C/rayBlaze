import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faGooglePlus, faTwitter, faLinkedin} from "@fortawesome/free-brands-svg-icons"
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'



function Footer() {
    return (
        <div className="FooterContainer " >
            <div className="footerNav flexRow" >
                <nav>Home</nav>
                <nav>Services NearMe</nav>
                <nav>About</nav>
                <nav>Blog</nav>
                <nav>Wedding</nav>
                <nav>Careers</nav>
                <nav>Contactus</nav>
            </div>
            <hr />
            <div className=" contentContainer" >
                <div className="content" >
                    <h3>Company</h3>
                    <p>Reviews</p>
                    <p>Join Us</p>
                    <p>Coupons</p>
                    <p>ISO</p>
                </div>
                <div className="content" >
                    <h3>Services</h3>
                    <p>Wedding</p>
                    <p>Cleaning</p>
                    <p>Home</p>
                    <p>Designer</p>
                    <p>Salon</p>
                    <p>Constructions</p>
                </div>
                <div className="content" >
                    <h3>Serviced In</h3>
                    <div className="servicedLocation" >
                        <p>Delhi</p>
                        <p>Bangalore</p>
                        <p>Mumbai</p>
                        <p>Noida</p>
                        <p>Thane</p>
                        <p>Navi Mumbai</p>
                        <p>Ahmedabad</p>
                        <p>Jaipur</p>
                        <p>Kolkata</p>
                        <p>Dubai</p>
                        <p>US</p>
                        <p>United Kingdom</p>
                    </div>

                </div>
                <div className="content " >
                    <div>
                        <h3>Contact us</h3>
                        <span className="flexRow" > <FontAwesomeIcon className="fontIcons" icon={faPhone} /><p className="contactUs">+91 98111 11111</p></span>
                       <span className="flexRow" > <FontAwesomeIcon className="fontIcons" icon={faEnvelope} />
                       <span className="contactUs" ><p>xxx@gmail.com</p> <p>xxx@company.com</p></span>
                       </span>
                       
                       
                    </div>
                    <hr/>
                    <div className="flexRow socialIcons" >
                        <FontAwesomeIcon icon={faFacebook}/>
                        <FontAwesomeIcon icon={faGooglePlus}/>
                        <FontAwesomeIcon icon={faTwitter}/>
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </div>
                </div>
            </div>
            <hr />
            <div className="footerText flexRow" >
                <p>@ 201 company pvt ltd all time reserved</p>
                <p>Privacy policy | Terms and conditions</p>
            </div>
        </div>
    )

}
export default Footer