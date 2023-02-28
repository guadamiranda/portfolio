import '../../Styles/skillCard.css'
import logoHTML from '../../Assets/html5.png'

export const SkillCard = (props) => {
    return(
        <div className='skillCard'>
            <div className='img'>

            </div>
            <div className='titleSkillContainer'>
                <div className='titleSkillCard'>
                    <img src={logoHTML}></img>
                </div>
                <div className='skillLevelCard'>
                    <span>TITULO DE LA WEA</span>
                    <span>el nivel pero mas chikito</span>
                </div>
            </div>
        </div>
    )
}