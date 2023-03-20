import '../../Styles/aboutMe.scss'
import { ButtonCV } from '../ButtonCV/ButtonCV'
import { HiOutlineDesktopComputer } from 'react-icons/hi'
import profilePhoto from '../../Assets/wada.jpg' 

export const AboutMe = () => {
    return(
        <div className='aboutMe'>
            <div className='aboutMe__left-content'>
                <div className='aboutMe__photo'>
                    <img src={profilePhoto}></img>
                </div>
                <br/>
                <div className='aboutMe__img'></div>
            </div>
            <div className='aboutMe__right-content'>
                <div className='aboutMe__name'><b>G</b>uadalupe <b>M</b>iranda</div>
                <div className='aboutMe__title'><HiOutlineDesktopComputer/><span>Software Developer</span></div>
                <br/>
                <div className='aboutMe__description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam rutrum orci est, at molestie ante pulvinar sed. Vivamus ligula ipsum, porta tincidunt lectus rhoncus, blandit tempus orci. Vestibulum eu sem efficitur, sodales nunc eu, mollis lectus. Ut imperdiet, nisi eu posuere eleifend, quam diam vehicula mauris, a hendrerit velit turpis eu dolor. Suspendisse porta ligula nec enim rutrum fermentum. Quisque ac mollis urna. Aliquam at erat tincidunt, porttitor nibh et, vestibulum mauris. In pellentesque suscipit vehicula. Vivamus ullamcorper enim ipsum, ut sagittis nunc aliquam ut. Nulla finibus vehicula augue, a molestie odio rhoncus at. Fusce volutpat laoreet tincidunt. Sed facilisis dolor magna, in pharetra mauris maximus vitae. Suspendisse lacus urna, faucibus a odio a, dignissim rhoncus lacus. Phasellus vehicula vitae nibh vitae maximus.
                </div>
                <br/>
                <ButtonCV/>
            </div>
        </div>
    )
}