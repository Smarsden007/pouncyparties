import React from "react"

import './styles/Footer.scss'
import logo from './../../media/logos/logo.png'
import face from './../../media/homepage/facebook.png'
import insta from './../../media/homepage/instagram.png'
import tik from './../../media/homepage/tiktok.png'
export default function Footer(props) {



    return (
        <section className='footer'>
            <div className="footer-master">
                <img src={logo} alt="logo" className="logo2" />
                <div className='footer-right-section'>
                    <div className="footer1" >
                        <h1 className="footer-headers">links</h1>
                        <ul className='navigation-footer'>
                            <li className="fooot">
                                
                                HOME
                            </li>
                            <li className="fooot">
                             FAQ
                            </li>
                            <li className="fooot">
                                RENTALS
                            </li>
                            <li className="fooot">
                                RESERVATIONS
                            </li>
                        </ul>
                    </div>
                    
                    <div className="footer-contact-box">
                        <h1 className="footer-headers">contact us</h1>
                        <p className="footstyle">PHONE</p>
                        <a href="phone" className="fooot">(707)-239-2741</a>
                        <p className="footstyle">EMAIL</p>
                        <a href="email" className="fooot">hello@pouncyparties.com</a>
                       
                    <div className="socials"> 
                    <a href="https://www.facebook.com/pouncyparties">
                        <img alt='img' src={face}/>
                    </a>
                    <a href="https://www.instagram.com/pouncyparties/">
                        <img alt='img' src={insta}/>
                    </a>
                    <a href="https://www.tiktok.com/@pouncyparties?source=h5_m&_r=1">
                        <img alt='img' src={tik}/>
                    </a></div>
                    </div>
                 
                </div>
            </div>
            <div className="footer-copyright">
                <p>Copyright © 2022. All Right Reserved.</p>
                <a href='https://www.practikwebdesign.com/'> <p>Powered by Practik</p></a>

            </div>
        </section>
    )
}