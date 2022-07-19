import React from 'react'
import './styles/Paralax.scss'
import { Link } from 'react-router-dom'

export default function ReserveBanner(props) {
    return (
        <div className='holdb1'>
            <div className='holdb2'>
                <h1 className='bannertext'>"WE DONT BOUNCE, WE POUNCE."</h1>
                <Link to="/booking"><button className="bannerbutt">BOOK NOW</button></Link>
                <div className='holdb3'>
                </div>
            </div>
        </div>
    )
}