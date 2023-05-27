import React, { useState, useEffect } from 'react'
import { Marker, Popup } from 'mapbox-gl'
import { lettersToUppercase } from "../../../utils/string.utils.js"

export default function Markers({ location, map }) {
   

    useEffect(() => {
        location && location.forEach(ele => {
            let icon = document.createElement('div')
            icon.classList.add('icon-marker')

            let iconMarker = new Marker(icon, {
                anchor: 'bottom',
                offset: [0, 5]
            })
            .setLngLat([ele['long'], ele['lat']])
            .setPopup(
                new Popup({ offset: 25 })
                .setHTML(
                    `<p class='marker-label'>${lettersToUppercase(ele['name'])}</p>`
                )
            )
            .addTo(map.current)

        })
    }, [location])

    return (
        <></>
    )
}