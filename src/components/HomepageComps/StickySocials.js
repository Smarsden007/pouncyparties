import React from "react"
import { FaTiktok } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';


import './styles/StickySocials.scss'

export default function StickySocials(props) {


    return (
        <section className="icon-bar">

        <a href="https://www.facebook.com/pouncyparties" className="face"><FaFacebook className="socials"/></a>
        <a href="https://www.instagram.com/pouncyparties/" className="face">
        <FaTiktok className="socials"/></a>
        <a href="https://www.tiktok.com/@pouncyparties?source=h5_m&_r=1" className="face">
        <TiSocialInstagram className="socials"/>
        </a>
      </section>
    )}
