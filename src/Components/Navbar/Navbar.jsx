import '../../Styles/navbar.scss'
import { IoLogoOctocat } from 'react-icons/io';
import { FaLinkedin, FaFacebookSquare, FaGithubSquare} from 'react-icons/fa'

export const Navbar = (props) => {

    const scroll = (ref) => {
        switch (ref) {
            case "home":
                props.homeRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case "aboutMe":
                props.aboutMeRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case "skills":
                props.skillsRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case "projects":
                props.projectsRef.current.scrollIntoView({behavior: "smooth"});
                break;
            case "contact":
                props.contactRef.current.scrollIntoView({behavior: "smooth"});
                break;
            default:
                break;
        }
    }
    
    return(
        <div id='navbar' className="navbar">
                <div id='navbar_left-content' className='navbar__left-content'><IoLogoOctocat className='catIcon' onClick={() => {scroll('home')}}/></div> 
                <div id='navbar_center-content' className='navbar__center-content'>
                    <div onClick={() => scroll('aboutMe')}><span>A</span>bout <span>M</span>e</div> 
                    <div onClick={() => scroll('skills')}><span>S</span>kills</div> 
                    <div onClick={() => scroll('projects')}><span>P</span>rojects</div>
                    <div onClick={() => scroll('contact')}><span>C</span>ontact</div> 
                </div>
                <div id='navbar_right-content' className='navbar__right-content'><a href='https://www.facebook.com/guadyrukia.miranda/' target="_blank" rel="noreferrer"><FaFacebookSquare className='facebook-icon'/></a><a href='https://www.linkedin.com/in/guadalupe-miranda-7b3599267/' target="_blank" rel="noreferrer"><FaLinkedin className='linkedin-icon'/></a><a href='https://github.com/guadamiranda' target="_blank" rel="noreferrer"><FaGithubSquare className='facebook-icon'/></a></div>
        </div>
    )
}