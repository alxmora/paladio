
import './Navbar.css'
import { useState, useEffect } from 'react'

const Navbar = () => {

    const [mobileNavActive, setIsActive] = useState(false)

    const handleClick = () => {
        setIsActive(state => !state)
    }

    return (
        <div>
            <nav className="navbar">
                <div className="brandName">
                    <h1>Paladio</h1>
                </div>
                <div className="navLinks">
                    <a href="#Inicio">Inicio</a>
                    <a href="#Anillos">Anillos</a>
                    <a href="#Collares">Collares</a>
                    <a href="#Pulseras">Pulseras</a>
                    <a href="#Aretes">Aretes</a>
                </div>
                <div className="hamburguer">
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