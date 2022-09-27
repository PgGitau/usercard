import user from '../images/man (2).webp';
import './Info.css';

function Info() {
    return (
        <div className="info-container">
            <img src={user} alt="user"></img>

            <div className='user-details'>
                <h1>Laura Smith</h1>
                <p className='info-header2'>Frontend Developer</p>
                <p className='info-website'>laurasmith.website</p>

                <div className='user-socials'>
                    <button>Email</button>
                    <button id="linkedin">LinkedIn</button>
                </div>
            </div>

        </div>
    )
}

export default Info;