import React from "react"
import './styles/SectionThree.scss'
import img1 from './../../media/homepage/hprow3.png'
export default function SectionOne(props) {

const h1Style = {
    fontSize:'3vw',
    fontFamily: 'Helvetica Neue',
    fontWeight: 100,
    marginLeft: '.25rem',
    marginBottom: '1rem',
}
const pStyle ={
    fontSize: '1.75vw',
    fontWeight: '300',
    marginLeft: '.25rem',
}

const imgStyle2 ={
    
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    width: '60vw',
    height: '50vh'
}
    return (
        
        <section className="sectionThree">



            <div className="section3cont">
               <div className="left-cont3" style={imgStyle2}>
                <img src={img1}  className='imagehold3' alt="img"/>
               </div>
                <div className="right-cont3">   
                <h1 style={h1Style} >DON’T WORRY, WE’VE GOT YOU GOT YOU COVERED...</h1>
                <p style={pStyle}>We offer in-house photography (starting at $250) and balloon services (starting at $25/ft).</p>
                <a href='https://lisamarsden.myportfolio.com/'><button className="photobutt">Photography Portfolio</button></a>
                </div>





            </div>



        </section>

    )
}