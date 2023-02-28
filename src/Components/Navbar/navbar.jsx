import '../../Styles/navbar.css'

export const Navbar = (props) => {
    const menuRight = props.menuRight
    console.log(menuRight)

    const scrollToSection = (ref) => { 
        const allObjectAtributes = Object.keys(ref)
        const firtsAtributeValue = ref[allObjectAtributes[0]]

        firtsAtributeValue.current.scrollIntoView({behavior: "smooth"});
    }

    return (
        <div className='navbar'>
            <div className='navbarLeft'>
                <i>{props.menuName}</i>
            </div>
            <div className='navbarRight'>
                {menuRight.map((op) => ( <span key={op.opName} id={op.opName} onClick={() => scrollToSection(op.ref)}> {op.opName} </span> ))}
            </div>
        </div>
    )
}