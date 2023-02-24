import '../../Styles/card.css'

export const Card = (props) => {
    return(
        <div className='card'>
            <div className='cardHeader'>
                <span>{props.cardInformation.cardTitle}</span>
            </div>
            <hr/>
            <div className='bodyHeader'>
                <div><span>{props.cardInformation.icon[0]}</span><div>{props.cardInformation.description[0]}</div></div>
                <div><span>{props.cardInformation.icon[1]}</span><div>{props.cardInformation.description[1]}</div></div>
                <div><span>{props.cardInformation.icon[2]}</span><div>{props.cardInformation.description[2]}</div></div>
            </div>
        </div>
    )
}