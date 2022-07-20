import React from "react"
import './styles/HomeGallery.scss'
export default function HomeGallery(props) {
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