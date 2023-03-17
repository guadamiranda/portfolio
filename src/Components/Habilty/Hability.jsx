import '../../Styles/hability.scss'

export const Hability = (props) => {
    const habilities = props.habilities

    return(
        <>
            {habilities.map((hability) => 
            <div className='hability'>
                <div className='hability__container-name-icon-percentage'>
                    <div className='hability__container-name-icon'>
                        <span className='hability__iconHabilities'>{hability.icon}</span>
                        <span className='hability__nameHabilities'>{hability.name}</span>
                    </div>
                    <div className='hability__container-percentage'>
                        <span><b>{hability.percentage}%</b></span>
                    </div>
                    
                </div>
                    
                <div className='hability__container-percentage-bar'>
                    <div className='hability__percentage-bar'>
                        <div className='porcentage-bar-pink' style={{"width": hability.percentage + '%'}} ></div>
                    </div>
                </div>
            </div>)}
            
        </>
    )
}