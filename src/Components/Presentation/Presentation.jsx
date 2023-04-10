import '../../Styles/presentation.scss'
import { ButtonCV } from '../ButtonCV/ButtonCV'

export const Presentation = () => {
    return(
        <div className="presentation">
            <div className='presentation__welcome'>Welcome</div>
            <br/>
            <div className='presentation__name'>Hi! I'm <b>Guadalupe Miranda</b>, software developer</div>
            <div className='presentation__etc'>And this is my <b>portfolio</b>, enjoy!</div>
            <br/>
            <br/>
            <ButtonCV/>
        </div>
    )
}