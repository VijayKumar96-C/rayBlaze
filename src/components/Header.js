import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import ServiceCard from './ServiceCard'

function Header() {
    return (
        <div className="Header" >
            <div className='HeadContainer flexRow' >
                <div className='HeadDetailsContainer ' >
                    <div className='flexRow padTop contactsParent' >
                        <span className='flexRow' ><p className='logo' >Lo</p><p className='pad' >go</p></span>
                        <div className='pad flexRow contacts' >
                            <FontAwesomeIcon className='fontIcons' icon={faPhone} />
                            <span >
                                <p className='textGrey'>contact</p>
                                <p>+91 81111 00000</p>
                            </span>
                        </div>
                        <div className='pad flexRow contacts' >

                            <FontAwesomeIcon className='fontIcons' icon={faEnvelope} />
                            <span>
                                <p className='textGrey'>Email</p>
                                <p>xxx@gmail.com</p>
                            </span>
                        </div>
                    </div>
                    <h2 className='headText' ><span className='textClr' >Your Service</span> Expert in All Over</h2>
                    <p >Get instant access to reliable and affordable servicse</p>
                    <div className='inputBoxes padTop' >
                        <div>
                            <select className='dropDown' type='dropdown' >
                                <option>Location</option>
                            </select>
                            <p className='exText' >EX: Your Location</p>
                        </div>
                        <div>
                            <div className='inputBox'  >
                            <input className='input' type='text' placeholder='Search by service..' />
                            <span className='searchIcon' ><FontAwesomeIcon  icon={faMagnifyingGlass} /></span>
                            </div>
                            <p className='exTextr' >Ex: Home or wedding services etc</p>
                        </div>

                    </div>
                </div>
                <div className='imageBox' >
                    <div className='flexRow navLinks ' >
                        <nav>Now in Dubai</nav>
                        <nav>Blog</nav>
                        <nav>Become A Professional</nav>
                        <button className='loginButton' >Login/Sign Up</button>
                    </div>
                    
                </div>
            </div>
            <div className='headerServiceCard' >
            <ServiceCard/>
            </div>
           
        </div>
    )
}

export default Header