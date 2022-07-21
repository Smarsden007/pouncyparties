import React from 'react'
// import PoppinBanner from '../../components/PoppinBanner/PoppinBanner'
import RentalCastle from './../components/RentalComps/Rentals/RentalCastle'

import RentalHero from './../components/RentalComps/Rentals/RentalsHero/RentalHero'
import './WebStyle/RentalsPage.scss'




export default function RentalsPage() {
  return (
    <section className='rentsec'>
        <div className='herostyles'>
      <RentalHero /></div>
      <div className='extrastyle'>
      <div className='rentmaster'>
        <RentalCastle />
       
      </div>
      </div>
      

    </section>

  )
}
