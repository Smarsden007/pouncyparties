import React from "react"
import Hero from "../components/HomepageComps/Hero"
import PoppinBanner from "../components/HomepageComps/PoppinBanner"
import SectionOne from "../components/HomepageComps/SectionOne"
import SectionThree from "../components/HomepageComps/SectionThree"
import SectionTwo from "../components/HomepageComps/SectionTwo"
import './WebStyle/Homepage.scss'



export default function HomePage() {
    return (
        <section className="hpcont">
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <PoppinBanner />
        </section>
    )
}