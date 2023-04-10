import '../../Styles/aboutMe.scss'
import { ButtonCV } from '../ButtonCV/ButtonCV'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import profilePhoto from '../../Assets/wada.jpg' 

export const AboutMe = () => {
    return(
        <div className='aboutMe'>
            <div className='aboutMe__left-content'>
                <div className='aboutMe__photo'>
                    <img alt='profilePhoto' src={profilePhoto}></img>
                </div>
                <br/>
                <div className='aboutMe__img'>
                </div>
            </div>
            <div className='aboutMe__right-content'>
                <div className='aboutMe__name'><b>G</b>uadalupe <b>M</b>iranda</div>
                <div className='aboutMe__title'><HiOutlineDesktopComputer/><span>Software Developer</span></div>
                <br/>
                <div className='aboutMe__description'>
                I'm a junior software developer interesed in the Front-end that wants to grow in the world of develop.
                Meanwhile, I'm doing different apps to improve my habilities. This apps are in the project section if you want to prove it 😀.  
                </div>
                <br/>
                <br/>
                <ButtonCV/>
            </div>
        </div>
    )
}