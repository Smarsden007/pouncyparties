import React from "react"
import './styles/SectionThree.scss'
// import { Link } from "react-router-dom"
import img1 from './../../media/homepage/hprow3.png'
export default function SectionThree(props) {
const h1Style = {
    fontSize:'3vw',
    fontFamily: 'Helvetica Neue',
    fontWeight: 100,
    marginLeft: '1rem',
}
const pStyle ={
    fontSize: '1.75vw',
    fontWeight: '300',
    marginLeft: '1rem',
}

const imgStyle2 ={
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '60vw',
    height: '50vh'
}
    return (
        <section className="sectionOne">
            <div className="section3cont">
               <div className="left-cont" style={imgStyle2}>
                <img src={img1}  className='imagehold'alt="img"/>
               </div>
                <div className="right-cont">   
                <h1 style={h1Style} >DON’T WORRY, WE’VE GOT YOU GOT YOU COVERED...</h1>
                <p style={pStyle}>We offer in-house photography (starting at $250) and balloon services (starting at $25/ft).</p>
                <button className="photobutt">Photography Portfolio</button>
                </div>
            </div>
        </section>
    )
}