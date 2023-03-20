import '../../Styles/buttonCV.scss'
import portfolio from '../../Assets/cv.pdf'

export const ButtonCV = () => {
    return(
        <div className="buttonCV">
            <a href={portfolio} target="_blank" className='buttonCV__button'>Curriculum Vitae</a>
        </div>
    )
}