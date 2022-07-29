import React from 'react'
import {Box} from "@chakra-ui/react"
import GoogleMapReact from "google-map-react"

const Map = ({setCoordinates, coordinates, setBounds}) => {
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
      onChildClick={() => {}}
    ></GoogleMapReact>
</Box>)
}

export default Map