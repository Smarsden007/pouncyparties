import React from "react"
import './styles/SectionTwo.scss'
// import { Link } from "react-router-dom"

export default function SectionTwo(props) {

    const h1Style = {
        fontSize: '3vw',
        fontFamily: 'Helvetica Neue',
        fontWeight: 100,
        marginRight: '1rem',
    }
    const pStyle = {
        fontSize: '1.75vw',
        fontWeight: '300',
        marginRight: '1rem',
    }
    // const imgStyle = {

    //     backgroundSize: 'contain',
    //     backgroundRepeat: 'no-repeat',
    //     width: '60vw',
    //     height: '70vh',
    // }
    // const leftStyle = {
    //     width: '50vw',
    //     height: '70vh',
    // }
 const divStyle = {
    height: '70vh'
 }

    return (

        <section className="sectionTwo">



            <div className="section2cont">
                <div className="right-cont2" style={divStyle}>
                    <h1 style={h1Style} >STRAIGHT TO THE FACTS</h1>
                    <p style={pStyle}>Our commercial-grade, custom designed bounce houses are a hit for every occasion!</p>
                    <p style={pStyle}>
                        Made with the best quality for the roughest Pouncers!
                    </p>
                    <p style={pStyle}>
                        Our rentals inlcude everything needed to get the party going. We recommend checking out our add-ons for even more fun</p>

                </div>
                <div className="left-cont2">
                    <div className="imagehold2" style={divStyle} />
                </div>






            </div>



        </section>

    )
}