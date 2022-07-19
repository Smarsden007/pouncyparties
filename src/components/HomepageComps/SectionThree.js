import React from "react"
import './styles/SectionThree.scss'
// import { Link } from "react-router-dom"

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
// const imgStyle ={

//     backgroundSize: 'contain',
//     backgroundRepeat: 'no-repeat',
//     width: '60vw',
//     height: '90vh',
// }
// const leftStyle = {
//     width: '60vw',
//     height: '90vh',
// }
  const buttStyle = {
    backgroundColor: '#E6BEAE',
    border: 'none',
    height: '7vh',
    width: '20vw',
    fontSize: '4.75vh',
    fontFamily: 'Amatic SC',
    color: 'white',
    marginLeft: '1rem',
  }

    return (
        
        <section className="sectionThree">



            <div className="section3cont">
               <div className="left-cont3">
                <div className="imagehold3"/>
               </div>
                <div className="right-cont3">   
                <h1 style={h1Style} >DON’T WORRY, WE’VE GOT YOU GOT YOU COVERED...</h1>
                <p style={pStyle}>We offer in-house photography (starting at $250) and balloon services (starting at $25/ft).</p>
                    <button style={buttStyle}>Photography Portfolio</button>
                </div>





            </div>



        </section>

    )
}