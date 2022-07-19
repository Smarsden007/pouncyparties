import React from "react"
import Hero from "../components/HomepageComps/Hero"
import HomeGallery from "../components/HomepageComps/HomeGallery"
import Paralax from "../components/HomepageComps/Paralax"
import PoppinBanner from "../components/HomepageComps/PoppinBanner"
import SectionOne from "../components/HomepageComps/SectionOne"
import SectionThree from "../components/HomepageComps/SectionThree"
import SectionTwo from "../components/HomepageComps/SectionTwo"
import ThreeList from "../components/ThreeList"
import './WebStyle/Homepage.scss'



export default function HomePage() {
    return (
        <section className="hpcont">
        <Hero />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <PoppinBanner />
        <Paralax />
        <ThreeList />
        <HomeGallery />
        </section>
    )
}