import React from "react"
import './styles/SectionTwo.scss'
// import { Link } from "react-router-dom"
import img1 from './../../media/homepage/hprow2.png'
export default function SectionTwo(props) {

    const h1Style = {
        fontSize: '3vw',
        fontFamily: 'Helvetica Neue',
        fontWeight: 100,
        marginRight: '.25rem',
    }
    const pStyle = {
        fontSize: '1.75vw',
        fontWeight: '300',
        marginRight: '.25rem',
        marginBottom: '.50rem',
    }

    const imgStyle2 = {

        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '60vw',
        height: '50vh'
    }
    return (

        <section className="sectionTwo">



            <div className="section2cont">
                <div className="left-cont2" style={imgStyle2}>
                    <img src={img1} className='imagehold2' alt="img" />
                </div>
                <div className="right-cont2">
                    <h1 style={h1Style} >STRAIGHT TO THE FACTS
                    </h1>
                    <p style={pStyle}>Our commercial-grade, custom designed bounce houses are a hit for every occasion!</p>
                    <p style={pStyle}>Made with the best quality for the roughest Pouncers!</p>
                    <p style={pStyle}>Our rentals inlcude everything needed to get the party going. We recommend checking out our add-ons for even more fun!</p>

                </div>





            </div>



        </section>

    )
}