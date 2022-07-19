import React from "react"
import './styles/NavBar.scss'

// import { Link } from "react-router-dom"

export default function NavBar() {


    const navSize = {
        width: '100vw',
        flexDirection: 'row',
        justifyContent: 'center'
    }
    const navStyle = {
        width: '50vw',
        fontSize: '2vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        
        fontWeight: '100',
    }
const logoSizer = {
    width: '25vw',
    height: '20vh',
}


    return (
        <section style={navSize}>
            <div className="mastynav">

                <div style={navStyle}>
                    <div className="logoholder" style={logoSizer}>
                        <div className="logo" style={logoSizer}/>
                    </div>

                    <ul >

                        <li>HOME</li>
                        <li>RENTALS</li>
                        <li>BOOK</li>
                        <li>209-209-2099</li>

                    </ul>

                </div>
            </div>
        </section>

    )
}