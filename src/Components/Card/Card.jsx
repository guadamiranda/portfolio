import '../../Styles/card.scss'

export const Card = (prop) => {
    return(
        <a href={prop.url} target="_blank" rel="noopener noreferrer" className='card'>
            <div className='card__opacity'>
                <div className='card__title'>{prop.name}</div>
                <div className='card__description'>{prop.description}</div>
            </div>
        </a>
    )

}