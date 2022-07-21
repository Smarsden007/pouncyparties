import React from "react"
import './styles/HomeGallery.scss'

import img1 from './../../media/herogallery/row1img1.png'
import img2 from './../../media/herogallery/row1img2.png'
import img3 from './../../media/herogallery/row1img3.png'
import img21 from './../../media/herogallery/row2img1.png'
import img22 from './../../media/herogallery/row2img2.png'
import img23 from './../../media/herogallery/row2img3.png'
import img31 from './../../media/herogallery/row3img1.png'
import img32 from './../../media/herogallery/row3img2.png'
import img33 from './../../media/herogallery/row3img3.png'

export default function HomeGallery(props) {
    return (
        <section className="galsection">
            <div class="row">
  <div class="column">
    <img alt='img' src={img1}/>
    <img alt='img' src={img2}/>
    <img alt='img' src={img3}/>
  
    
  </div>
  <div class="column">
    <img alt='img' src={img21}/>
    <img alt='img' src={img22}/>
    <img alt='img' src={img23}/>
 
  </div>
  <div class="column">
    <img alt='img' src={img31}/>
    <img alt='img' src={img32}/>
    <img alt='img' src={img33}/>
   
    
  </div>
 
</div>
        </section>
    )
}