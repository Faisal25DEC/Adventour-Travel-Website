import React from 'react'
import { ProductSection } from '../Components/DestinationDetailsComponents/ProductSection'
import { MapComponent } from '../Components/DestinationDetailsComponents/MapComponent'
import Fade from 'react-reveal/Fade';


export const DestinationDetails = () => {
  
  return (
    <div>
      <Fade up><ProductSection/></Fade>
      <Fade up><MapComponent/></Fade>
    </div>
  )
}
