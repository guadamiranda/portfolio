import '../../Styles/title.scss'

export const Title = (props) => {

    return(
        <div className='title'>
            <div className='title__sentence'>{props.title}</div>
        </div>
    )
}