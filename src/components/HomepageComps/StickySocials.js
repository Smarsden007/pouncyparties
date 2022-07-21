import React from "react"
import { FaTiktok } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';


import './styles/StickySocials.scss'

export default function StickySocials(props) {


    return (
        <section className="icon-bar">

        <a href="www.google.com" className="face"><FaFacebook className="socials"/></a>
        <a href="www.google.com" className="face">
        <FaTiktok className="socials"/></a>
        <a href="www.google.com" className="face">
        <TiSocialInstagram className="socials"/>
        </a>
      </section>
    )}
