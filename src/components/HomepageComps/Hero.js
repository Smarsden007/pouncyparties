import React from "react"
import { Link } from "react-router-dom"
import './styles/Hero.scss'


export default function Hero() {

const heroStyle = {
    width: '100vw',
    
}
    return (
        <section style={heroStyle}>
            <div className="fullsizehero">
                <div className="buttcont">
                <Link  to="/weddings-sonoma-county-bouncehouse">
                  <button className="herobutt">Book Now</button></Link>
                </div>
            </div>
        </section>

    )
}