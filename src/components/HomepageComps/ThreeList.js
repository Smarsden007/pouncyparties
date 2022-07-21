import React from 'react'
import './styles/ThreeList.scss'


export default function ThreeList(props) {
    return (
        <section className="section3-pouncy">
    
            <div className='sec1master'>
                <div className='box1'>
                    <h1 className='mobileline'> Delivery</h1>
                    <p className='descsan'>We proudly offer free delivery and set-up in Sonoma, Marin and Napa counties, additional charges apply outside of these area's. We truly provide a hassle free experience from start to finish!</p>
                </div>
                
                <div className='box2'>
                    <h1 className='mobileline'>Disinfecting</h1>
                    <p className='descsan'>We use an electrostatic sprayer between each use with peroxide cleaner to ensure all bouncers are free of germs and ready for your event!</p>
                </div>
               
                <div className='box3'>
                    <h1 className='mobileline'>Commitment</h1>
                    <p className='descsan'>All of our employees are vacinated and are taking extra precautions to limit the spread of Covid-19 and provide you a safe experience.</p>
                </div>

            </div>



        </section>

    )
}