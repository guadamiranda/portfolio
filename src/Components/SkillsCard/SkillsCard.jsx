import '../../Styles/skillsCard.scss'
import { Hability } from '../Habilty/Hability'
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript, IoLogoAngular, IoLogoNodejs } from 'react-icons/io';
import { GrReactjs } from 'react-icons/gr';
import { RiVuejsFill } from 'react-icons/ri';
import { SiMongodb } from 'react-icons/si'

export const SkillsCard = () => {

    const habilities = [{name:"HTML", icon:<IoLogoHtml5 />, percentage: 85},
                        {name:"CSS", icon:<IoLogoCss3 />, percentage: 80},
                        {name:"JavaScript", icon:<IoLogoJavascript />, percentage: 80},
                        {name:"React", icon:<GrReactjs />, percentage: 75},
                        {name: "Angular", icon:<IoLogoAngular/>, percentage: 40},
                        {name: "VueJS", icon:<RiVuejsFill/>, percentage: 20},
                        {name: "MongoDB", icon:<SiMongodb/>, percentage: 20},
                        {name: "NodeJS", icon:<IoLogoNodejs/>, percentage: 20}]
    return(
        <div className='skillsCard'>
            <Hability habilities={habilities}/>
        </div>
    )
}