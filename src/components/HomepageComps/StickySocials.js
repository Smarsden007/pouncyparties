import React from "react"
import { FaTiktok } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { TiSocialInstagram } from 'react-icons/ti';


import './styles/StickySocials.scss'

export default function StickySocials(props) {


  return (
    <section className="icon-bar">
      <a className='face'  target="_blank" href="https://www.theknot.com/marketplace/redirect-2062398?utm_source=vendor_website&utm_medium=banner&utm_term=36d0d760-d7ce-480a-9fff-2fb982745c18&utm_campaign=vendor_badge_assets"><img  alt="TheKnot.com" src="https://www.xoedge.com/myaccount/2019/grab-a-badge/social/flat/large/round.png" className='face' width='45' /></a>
      <a href="https://www.facebook.com/pouncyparties" className="face"><FaFacebook className="socials" /></a>
      <a href="https://www.tiktok.com/@pouncyparties?source=h5_m&_r=1" className="face">
        <FaTiktok className="socials" /></a>
      <a href="https://www.instagram.com/pouncyparties/" className="face">
        <TiSocialInstagram className="socials" />
      </a>
    </section>
  )
}
