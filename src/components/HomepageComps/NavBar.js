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
      
        
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginBottom: '-4vh',
        fontWeight: '100',
    }
    const navItems ={
        marginBottom: '-100vh',
    }
    const logoSizer = {
        
        width: '25vw',
        height: '20vh',
    }
  
    return (
        <section style={navSize}>
            <div className="mastynav">
                <div style={navStyle} className='navy'>
                    <div className="logoholder" style={logoSizer}>
                        <div className="logo" style={logoSizer} />
                    </div>
                    <div style={navItems} className='navy'>
                    <ul >
                        <li >HOME</li>
                        <li>RENTALS</li>
                        <li>BOOK</li>
                        <li className="Phoney">707-238-2741</li>
                    </ul>
                    </div>
                </div>
            </div>
        </section>

    )
}