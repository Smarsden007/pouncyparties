import React from 'react'
// import Button from '../Button/Button'
import './styles/RentalCastle.scss'
import cassy from './../../../media/rentals/cassy.png'
import mixy from './../../../media/rentals/mixxy.png'
import tody from './../../../media/rentals/toddy.png'

export default function RentalCastle(props) {
    <style>@import url('https://fonts.googleapis.com/css2?family=Amatic+SC&display=swap');</style>

    const imgStyle2 ={
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        width: '50vw',
        height: '65vh'
    }
    const fontStyle1 ={
        fontSize:'4vw',
        fontFamily: 'Helvetica Neue',
        fontWeight: 100,
        marginLeft: '1rem',
       
    }
    const fontStyle2 ={
        fontSize:'2vw',
        fontFamily: 'Helvetica Neue',
        fontWeight:'700',
        marginLeft: '1rem',
        marginBottom: '1vh',
        
    }
    const fontStyle3 ={
        fontSize:'2vw',
        fontFamily: 'Helvetica Neue',
        fontWeight: '400',
        marginLeft: '1rem',
        marginBottom: '1vh',
    }
    const fontStyle4 ={
        fontSize:'2.5vw',
        fontFamily: 'Amatic SC',
        fontWeight: '400',
        marginLeft: '1rem',
        marginBottom: '1vh',
        width:'35vw',
    }
    return (
        <section className="rentals-pouncy">
            <div className='container'>
                        <div className='babycontainer'>
                            <div className='rightside' style={imgStyle2}>
                                <img src={cassy} className='rentimage' alt='img' />
                            </div>
                            <div className='leftside'>
                                <h1 style={fontStyle1}>THE CLASSIC CASTLE</h1>
                                <p style={fontStyle2}>$450 4HRS / $550 6HRS / $650 8HRS</p>
                                <p style={fontStyle3}>FOR ALL AGES</p>
                                <p style={fontStyle4}>INCLUDES: SHOE RACK, 50-FOOT EXTENTION CORD, ENTRANCE RUG</p>
                                <button  className='rentalbutt'>BOOK NOW</button>
                            </div>
                        </div>
                        <div className='babycontainer2'>
                            <div className='rightside' style={imgStyle2}>
                                <img src={mixy} className='rentimage' alt='img' />
                            </div>
                            <div className='leftside'>
                                <h1 style={fontStyle1}>THE POUNCE & SLIDE</h1>
                                <p style={fontStyle2}>$450 4HRS / $550 6HRS / $650 8HRS</p>
                                <p style={fontStyle3}>FOR ALL AGES</p>
                                <p style={fontStyle4}>INCLUDES: SHOE RACK, 50-FOOT EXTENTION CORD, ENTRANCE RUG</p>
                                <button  className='rentalbutt'>BOOK NOW</button>
                            </div>
                        </div>
                        <div className='babycontainer'>
                            <div className='rightside' style={imgStyle2}>
                                <img src={tody} className='rentimage' alt='img' />
                            </div>
                            <div className='leftside'>
                                <h1 style={fontStyle1}>THE TODDLER</h1>
                                <p style={fontStyle2}>$450 4HRS / $550 6HRS / $650 8HRS</p>
                                <p style={fontStyle3}>FOR ALL AGES</p>
                                <p style={fontStyle4}>INCLUDES: SHOE RACK, 50-FOOT EXTENTION CORD, ENTRANCE RUG</p>
                                <button className='rentalbutt'>BOOK NOW</button>
                            </div>
                        </div>
                        <div className='babycontainer2'>
                            <div className='rightside' style={imgStyle2}>
                                <img src={cassy} className='rentimage' alt='img' />
                            </div>
                            <div className='leftside'>
                                <h1 style={fontStyle1}>THE TODDLER</h1>
                                <p style={fontStyle2}>$450 4HRS / $550 6HRS / $650 8HRS</p>
                                <p style={fontStyle3}>FOR ALL AGES</p>
                                <p style={fontStyle4}>INCLUDES: SHOE RACK, 50-FOOT EXTENTION CORD, ENTRANCE RUG</p>
                                <button className='rentalbutt'>BOOK NOW</button>
                            </div>
                        </div>
                    </div>
             
            
        </section>
    )
}
