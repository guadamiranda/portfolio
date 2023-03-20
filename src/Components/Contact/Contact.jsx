import '../../Styles/contact.scss'
import { RiCellphoneLine } from 'react-icons/ri';
import { FiMail } from 'react-icons/fi'
import { FaLinkedinIn } from 'react-icons/fa'
 
export const Contact = () =>{
    return(
        <div className='contact'>
            <div><RiCellphoneLine className='contact__icon-contact'/> <span>0297-155288043</span></div>
            <hr></hr>
            <div><FiMail className='contact__icon-contact'/> <span>guadalupe.miranda997@gmail.com</span></div>
            <hr></hr>
            <div><FaLinkedinIn className='contact__icon-contact'/> <a href='https://www.linkedin.com/in/guadalupe-miranda-7b3599267/'>LinkedIn's profile</a></div>
        </div>
    )
}