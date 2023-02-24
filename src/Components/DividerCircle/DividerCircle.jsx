import '../../Styles/circle.css'
import { VscCircleFilled, VscCircleLargeFilled} from 'react-icons/vsc';

export const DividerCircle = () => {

    const AssambleDividerCircle = () => {
        const allCircles = []

        for(let i = 0; i <= 60; i++){
            (i % 2 === 0 ? allCircles.push(<VscCircleFilled className='littleCircle' key={i}/>) : allCircles.push(<VscCircleLargeFilled className='bigCircle' key={i}/>))
        }

        return allCircles
    }

    return(
        <div className="dividerCircle">
            <span><AssambleDividerCircle/></span>
        </div>
    )
}