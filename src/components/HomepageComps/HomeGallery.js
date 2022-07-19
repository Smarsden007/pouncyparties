import React from "react"
import './styles/HomeGallery.scss'
// import { Link } from "react-router-dom"

export default function HomeGallery(props) {


    // const leftStyle = {
    //     width: '60vw',
    //     height: '90vh',
    // }
    //   const sectionStyle = {
    //     height: '60vh',
    //   }

    return (

        <section className="galsection">
            <div className="galmaster">
                <div className="galminimaster">
                    <div className="img1row1" />
                    <div className="img2row1" />
                    <div className="img3row1" />
                </div>
            </div>
            <div className="galmaster2">
                <div className="galminimaster">
                    <div className="img1row2" />
                    <div className="img2row2" />
                    <div className="img3row2" />
                </div>
            </div>


        </section>

    )
}