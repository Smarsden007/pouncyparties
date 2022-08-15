import React from "react"
import './styles/Footer.scss'
import logo from './../../media/logos/logo.png'


export default function Footer(props) {



    return (
        <section className='footer'>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            <div className="footer-master">
                <img src={logo} alt="logo" className="logo2" />
                <div className='footer-right-section'>
                    <div className="footer1" >
                        <h1 className="footer-headers">links</h1>
                        <ul className='navigation-footer'>
                            
                            <li className="fooot">
                            <a href='https://www.pouncyparties.com/' className="coloor">
                                HOME </a>
                            </li>
                           
                            <li className="fooot">
                            <a href='https://www.pouncyparties.com/sonomacounty-bouncehousecastle-white' className="coloor">
                                RENTALS
                             </a>
                            </li>
                            <li className="fooot">
                            <a href='https://www.pouncyparties.com/weddings-sonoma-county-bouncehouse' className="coloor">
                                BOOK</a>
                            </li>
                        </ul>
                    </div>
                    
                    <div className="footer-contact-box">
                        <h1 className="footer-headers">contact</h1>
                        <p className="footstyle">PHONE</p>
                        <a href="phone" className="fooot">(707)-239-2741</a>
                        <p className="footstyle">EMAIL</p>
                        <a href="email" className="fooot">hello@pouncyparties.com</a>
                       
    
                    </div>
                 
                </div>
            </div>
            <div className="footer-copyright">
                <p className="copyright">Copyright © 2022. All Right Reserved.</p>
                <a href='https://www.google.com/'> <p></p></a>

            </div>
        </section>
    )
}