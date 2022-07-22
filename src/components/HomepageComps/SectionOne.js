import React from "react"
import './styles/SectionOne.scss'
// import { Link } from "react-router-dom"
import img1 from './../../media/homepage/hprow1.png'
export default function SectionOne(props) {

const h1Style = {
    fontSize:'3vw',
    fontFamily: 'Helvetica Neue',
    fontWeight: 100,
    marginLeft: '.25rem',
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
        
        <section className="sectionOne">



            <div className="section1cont">
               <div className="left-cont" style={imgStyle2}>
                <img src={img1}  className='imagehold' alt="img"/>
               </div>
                <div className="right-cont">   
                <h1 style={h1Style} >THIS AIN'T YOUR NORMAL BOUNCE HOUSE COMPANY</h1>
                <p style={pStyle}>Out with the old in with the new, forgot about the ugly old bounce houses your used too. We offer customizable bounce houses for every event, custom balloon arangemnets, set-up from start to finish leaving you only to worry about the party!</p>
                    
                </div>





            </div>



        </section>

    )
}