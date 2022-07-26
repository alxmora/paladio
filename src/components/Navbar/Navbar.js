
import './Navbar.css'
import { useState } from 'react'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = () => {

    const [mobileNavActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(state => !state)
    }

    return (
        <div className='bgWhite' style={{borderBottom: '1px solid #000'}}>
            <nav className="navbar container">
                <div className="brandName">
                    <h1>Paladio</h1>
                </div>
                <div className="navLinks">
                    <a href="#Inicio">Inicio</a>
                    <a href="#Anillos">Anillos</a>
                    <a href="#Collares">Collares</a>
                    <a href="#Pulseras">Pulseras</a>
                    <a href="#Aretes">Aretes</a>
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
                <a href="#Inicio">Inicio</a>
                <a href="#Anillos">Anillos</a>
                <a href="#Collares">Collares</a>
                <a href="#Pulseras">Pulseras</a>
                <a href="#Aretes">Aretes</a>
            </div>
        </div>

    )
}

export default Navbar