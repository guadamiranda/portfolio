import '../../Styles/footer.scss'
import { AiOutlineHeart } from 'react-icons/ai'

export const Footer = () => {
    return(
        <div className="footer">
            <div className='footer__center-section'>
                <span>Made with <AiOutlineHeart className='heart-icon'/> by Guadalupe Miranda</span>
            </div>
        </div>
    )
}