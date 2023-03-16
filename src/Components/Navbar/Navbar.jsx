import '../../Styles/navbar.scss'
import { IoLogoOctocat } from 'react-icons/io';
import { FaLinkedin, FaFacebookSquare} from 'react-icons/fa'

export const Navbar = () => {
    return(
        <div id='navbar' className="navbar">
                <div id='navbar_left-content' className='navbar__left-content'><IoLogoOctocat/></div> 
                <div id='navbar_center-content' className='navbar__center-content'>
                    <div>ABOUT ME</div> 
                    <div>SKILLS</div> 
                    <div>PROJECTS</div>
                    <div>CONTACT</div> 
                </div>
                <div id='navbar_right-content' className='navbar__right-content'><FaFacebookSquare className='facebook-icon'/><FaLinkedin className='linkedin-icon'/></div>
        </div>
    )
}