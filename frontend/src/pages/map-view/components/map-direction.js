import React, { useState, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import MapboxDirections from '@mapbox/mapbox-gl-directions'
import { lettersToUppercase } from "../../../utils/string.utils.js"

export default function MapDirection({ tour, map }) {
   new 

    useEffect(() => {
        const directions = new MapboxDirections({
            accessToken: mapboxgl.accessToken,
            unit: 'metric',
            profile: 'mapbox/driving',
          });
      
          // Directions
        map.addControl(directions, 'top-left');
    }, [tour])

    return (
        <></>
    )
}