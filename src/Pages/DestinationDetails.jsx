import React from 'react'
import { ProductSection } from '../Components/DestinationDetailsComponents/ProductSection'
import { MapComponent } from '../Components/DestinationDetailsComponents/MapComponent'
import Fade from 'react-reveal/Fade';
import { TopDestinations } from '../Components/HomeComponents/TopDestinations';


export const DestinationDetails = () => {
  
  return (
    <div>
      <Fade left><ProductSection/></Fade>
      {/* <Fade up><MapComponent/></Fade> */}

      <Fade up><TopDestinations/></Fade>
    </div>
  )
}
