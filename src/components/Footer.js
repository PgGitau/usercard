import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar, faAddressBook, faAddressCard, faChessBishop } from '@fortawesome/free-regular-svg-icons';

function Footer() {
    return (
        <div className="footer-container">
            <FontAwesomeIcon className="icons" icon={faCalendar} size="2x"/>
            <FontAwesomeIcon className="icons" icon={faAddressBook} size="2x"/>
            <FontAwesomeIcon className="icons" icon={faAddressCard} size="2x"/>
            <FontAwesomeIcon className="icons" icon={faChessBishop} size="2x"/>
        </div>
    )
}

export default Footer;