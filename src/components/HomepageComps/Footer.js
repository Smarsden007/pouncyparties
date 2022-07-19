import React from "react"

import './styles/Footer.scss'
import logo from './../../media/logos/Rectangle 2.png'

export default function Footer(props) {



    return (
        <section className='footer'>
            <div className="footer-master">
                <img src={logo} alt="logo" className="logo2" />
                <div className='footer-right-section'>
                    <div className="footer1" >
                        <h1 className="footer-headers">links</h1>
                        <ul className='navigation-footer'>
                            <li>
                                
                                HOME
                            </li>
                            <li>
                             FAQ
                            </li>
                            <li>
                                RENTALS
                            </li>
                           
                        </ul>
                    </div>
                    <div className="footer-contact-box">
                        <h1 className="footer-headers">contact us</h1>
                        <h2 className="phone">Phone</h2>
                        <p>(209)-209-2099</p>
                        <h2 className="email">Email</h2>
                        <p>john@farmtruckcatering.com</p>
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