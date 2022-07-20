import React from "react"
import './styles/Hero.scss'

// import { Link } from "react-router-dom"

export default function Hero() {

const heroStyle = {
    width: '100vw',
    
}

const ctaStyle = {
    backgroundColor: '#E6BEAE',
    fontFamily: 'amatic SC',
    color: 'white',
    marginTop: '75vh',
    border: 'none',
    
}

    return (
        <section style={heroStyle}>
            <div className="fullsizehero">
                <div className="buttcont">
                    <button className="herobutt" style={ctaStyle}>Book Now</button>
                </div>
            </div>
        </section>

    )
}