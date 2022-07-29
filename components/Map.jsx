import React, {useState} from 'react'
import {Box} from "@chakra-ui/react"
import GoogleMapReact from "google-map-react"
import { IoLocation } from 'react-icons/io5'

const Map = ({setCoordinates, coordinates, setBounds}) => {
  const[isCard, setIsCard] = useState(false)
  const[cardData, setCardData] = useState(null)

  return (
  <Box width={"full"} height={"full"}>
    <GoogleMapReact
      bootstrapURLKeys={{key: "AIzaSyA04CosTnjSNBQdZtJ4oK6JOR34fPnnFmg"}}
      defaultCenter={coordinates}
      center={coordinates}
      defaultZoom = {10}
      margin={[50, 50, 50, 50]}
      options={""}
      onChange={(e) => {
        setCoordinates({lat: e.center.lat, lng: e.center.lng})
        setBounds({ne: e.marginBounds.ne, sw: e.marginBounds.sw})
      }}
      onChildClick={(child) => {
        setCardData(places[child])
        setIsCard(true)
      }}
    >
      {places?.map((place, i) => {
        <Box
          lat={Number(place.latitude)}
          lng={Number(place.longitude)}
          position={'relative'}
          cursor='pointer'
        >
          <IoLocation color="red" fontSize={30}/>
        </Box>
      })}
      {isCard && (
        <Box 
        width={'200px'}
        height={'150px'}
        bg={'whiteAlpha.900'}
        position={'absolute'}
        top={-12}
        left={0}
        shadow={'lg'}
        rounded={'lg'}
        >
        
        </Box>
      )}
    </GoogleMapReact>
  </Box>)
}

export default Map