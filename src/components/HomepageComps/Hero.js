import React from "react"
import './styles/Hero.scss'

// import { Link } from "react-router-dom"

export default function Hero() {

const heroStyle = {
    width: '100vw',
    
}

const ctaStyle = {
    backgroundColor: '#E6BEAE',
    height: '10vh',
    width: '17vw',
    fontFamily: 'amatic SC',
    color: 'white',
    marginTop: '85vh',
    fontSize: '3vw',
    border: 'none',
}

    return (
        <section style={heroStyle}>
            <div className="fullsizehero">
                <div className="buttcont">
                    <button style={ctaStyle}>Book Now</button>
                </div>
            </div>
        </section>

    )
}