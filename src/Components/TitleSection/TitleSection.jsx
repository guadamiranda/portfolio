import '../../Styles/titleSection.css'

export const TitleSection = (props) => {
    return(
        <div className='titleSection'>
            <span>{props.titles}</span>
        </div>
    )
}