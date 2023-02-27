import '../../Styles/navbar.css'

export const Navbar = (props) => {
    const menuRight = props.menuRight
    console.log(menuRight)

    const scrollToSection = (ref, name) => { 
        console.log(Object.keys(ref)[0].value)
        ref.reference.current.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className='navbar'>
            <div className='navbarLeft'>
                <i>{props.menuName}</i>
            </div>
            <div className='navbarRight'>
                {menuRight.map((op) => ( <span key={op.opName} id={op.opName} onClick={() => scrollToSection(op.ref, op.opName)}> {op.opName} </span> ))}
            </div>
        </div>
    )
}