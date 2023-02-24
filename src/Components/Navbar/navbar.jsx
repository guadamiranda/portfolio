import '../../Styles/navbar.css'

export const Navbar = (props) => {
    const menuRight = props.menuRight

    return (
        <div className='navbar'>
            <div className='navbarLeft'>
                <i>{props.menuName}</i>
            </div>
            <div className='navbarRight'>
                {menuRight.map((op) => ( <span key={op.opName} id={op.opName}> {op.opName} </span> ))}
            </div>
        </div>
    )
}