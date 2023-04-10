import '../../Styles/skillCard.css'

import logoHTML from '../../Assets/html5.png'
import logoCSS from '../../Assets/css3.png'
import logoJavascript from '../../Assets/javascript.png'
import logoReact from '../../Assets/react.png'
import logoNode from '../../Assets/node.png'
import logoMongodb from '../../Assets/mongodb.png'

import { VscCircleFilled } from 'react-icons/vsc';

export const SkillCard = () => {
    const skills = [{name: "HTML", level: 8, img: logoHTML, color: "#F87D63"}, 
                    {name: "CSS", level: 7, img: logoCSS, color: "#63ABF8"},
                    {name: "JavaScript", level: 6, img: logoJavascript, color: "#F8BD63"},
                    {name: "React", level: 7, img: logoReact, color: "#6375F8"},
                    {name: "NodeJS", level: 4, img: logoNode, color: "#63F8A2"},
                    {name: "MongoDB", level: 4, img: logoMongodb, color: "#A6F666"}];
    
    const LogoContainer = () => {
        
    } 

    return(
        <div className='skillCard'>
            {skills.map((skill) => 
                <div className='titleSkillContainer'>
                    <VscCircleFilled className='circleFixed'/>
                    <div className='titleSkillCard' >Hola</div>
                    <div className='skillLevelCard'>chau</div>
                </div>
            )}
        </div>
    )
}