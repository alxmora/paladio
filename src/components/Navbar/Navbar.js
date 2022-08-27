
import './Navbar.css'
import { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [mobileNavActive, setMobileNavActive] = useState(false)

    const handleClick = () => {
        setMobileNavActive(state => !state)
    }

    return (
        <div className='bgWhite' style={{borderBottom: '1px solid #000'}}>
            <nav className="navbar container ps-2">
                <div className="brandName">
                    <Link to='/'>Paladio</Link>
                </div>
                <div className="navLinks">
                    <Link to='/' href="#Inicio">Inicio</Link>
                    <Link to='/category/rings' href="#Anillos">Anillos</Link>
                    <Link to='/category/necklaces' href="#Collares">Collares</Link>
                    <Link to='/category/bracelets' href="#Pulseras">Pulseras</Link>
                    <Link to='/category/earrings' href="#Aretes">Aretes</Link>
                    <CartWidget/>
                </div>
                <div className="hamburguer">
                    <CartWidget/>
                    <div onClick={handleClick} className={mobileNavActive ? 'menu open' : 'menu'} data-menu="12">
                        <div className="icon"></div>
                    </div>
                </div>
            </nav>
            <div className={mobileNavActive ? 'mobileLinks open' : 'mobileLinks'}>
                <Link to='/' href="#Inicio">Inicio</Link>
                <Link to='/category/rings' onClick={handleClick} href="#Anillos">Anillos</Link>
                <Link to='/category/necklaces' onClick={handleClick} href="#Collares">Collares</Link>
                <Link to='/category/bracelets' onClick={handleClick} href="#Pulseras">Pulseras</Link>
                <Link to='/category/earrings' onClick={handleClick} href="#Aretes">Aretes</Link>
            </div>
        </div>

    )
}

export default Navbar