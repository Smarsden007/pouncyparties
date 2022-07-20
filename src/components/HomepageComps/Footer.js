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
                       
                        <p className="fooot">(707)-239-2741</p>
                    
                        <p className="fooot">hello@pouncyparties.com</p>
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