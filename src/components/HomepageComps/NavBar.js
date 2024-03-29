import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import './styles/NavBar.scss'
import logo from './../../media/logos/logo.png'

import { Twirl as Hamburger } from 'hamburger-react'

export default function NavBar(props) {

    const [menu, setMenu] = useState("closed")
    const [background, setBackground] = useState("")
    const [hamDisplay, setHamDisplay] = useState("hamburger-section")
    const [hamColor, setHamColor] = useState('black')
    const location = useLocation();
    const backgroundClass = location.pathname === "/" ? 'navigation-container home' : 'navigation-container';

    console.log("### pathlocation", location.pathname);

 return (
        <section className={`${backgroundClass} ${background}`}>
            <Link to="/"><img src={logo} alt="logo" className={`logo`} /></Link>
            <a href="tel:7072382741" className="abstyle">(707) 238-2741</a>
            <div className={`${hamDisplay}`}>
                <div className='hamburger'>
                    <Hamburger color="#B2B2B2" onToggle={toggled => {
                        if (toggled) {
                            setHamColor("white")
                            setMenu('menu')
                            setBackground("background")
                            setHamDisplay("hamburger-section-open")
                        } else {
                            setHamColor("black")
                            setMenu('closed')
                            setBackground("")
                            setHamDisplay("hamburger-section")
                        }
                    }} />
                </div>
                        <div className={hamColor}/>
                <div className={menu}>
                    <ul className='navigation-items'>
                        <li className="navstyles">
                            <Link className="link" to="/">HOME</Link>
                        </li>
                        <li className="navstyles">
                            <Link className="link" to="/sonomacounty-bouncehousecastle-white">RENTALS</Link>
                        </li>
                        <li className="navstyles">
                            <Link className="link1" to="/weddings-sonoma-county-bouncehouse">BOOK</Link>
                        </li> 
                    </ul>
                </div>
                
            </div>

            <div className='open-nav-section'>
                <ul className='navigation-items'>
                    <li>
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li>
                    <Link className="link" to="/sonomacounty-bouncehousecastle-white">RENTALS</Link>
                    </li>
                    <li>
                    <Link className="link" to="/weddings-sonoma-county-bouncehouse">BOOK</Link>                    </li>
                        <a href="tel:7072382741" className="astyle">707-238-2741</a>
                </ul>
            </div>

        </section>
    )
}