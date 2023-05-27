import React, { useState, useEffect, useRef } from 'react'
import MapRender from './components/map'
import Markers from './components/markers'
import TourRender from './components/tour'
import TourShowcase from './components/tour-showcase'
import "./assets/css/map-view.css"
import { getOneLocation, getAllLocations as getAllLocationsApi } from "../../services/location.service.js"
import { getOneStreet } from '../../services/street.service'
import { getOneTransport } from '../../services/transport.service'
import constant from '../../data/constant'

// context
import { useAppContext } from "../../context/app-context/index.js"

export default function MapView() {
    const { setNotification } = useAppContext();

    const [tour, setTour] = useState(null);
    const [allLocations, setAllLocations] = useState(null)
    const [allStreets, setAllStreets] = useState(null)
    const [allTransports, setAllTransports] = useState(null)
    const [location, setLocation] = useState(null)
    const [filter, setFilter] = useState({
        location: {
            region: 'south',
            name: null
        },
        budget: {
            min: constant.budgetRange.min,
            max: constant.budgetRange.max,
        },
        timeVault: {
            min: constant.timeRange.min,
            max: constant.timeRange.max
        }
    });
    const map = useRef(null);
    

    const getAllLocations = async () => {
        if(!tour) return
        try {
            let locations = []
            for(let i = 0; i < tour['location_ids'].length; i++) {
                const returnLocation = await getOneLocation(tour['location_ids'][i])
                locations.push(returnLocation['data']['data'])
            }
            setAllLocations(locations)
        } catch(e) {
             console.log(e)
        }
    }

    const getAllStreet = async () => {
        try {
            let streets = []
            for(let i = 0; i < tour['street_ids'].length; i++) {
                let streetId = tour['street_ids'][i]
                const returnStreet = await getOneStreet(streetId)
                streets.push(returnStreet['data']['data'])
            }
            setAllStreets(streets)
        } catch(e) {
            console.log(e)
        }
    }

    const getAllTransport = async () => {
        try {
            let transports = []
            for(let i = 0; i < tour['transport_ids'].length; i++) {
                const returnTransport = await getOneTransport(tour['transport_ids'][i])
                transports.push(returnTransport['data']['data'])
            }
            setAllTransports(transports)
        } catch(e) {
            console.log(e)
        }
    }

    useEffect(() => {
        if (tour) {
            getAllLocations()
            getAllStreet()
            getAllTransport()
        }

    }, [tour])

    const getLocations = async () => {
        try {
            const returnLocations = await getAllLocationsApi()
            setLocation(returnLocations['data']['data']) 
        } catch(e) {
            console.log(e)
            setNotification({ type: "danger", message: "lỗi hệ thống" })
        }
    }

    useEffect(() => {
        getLocations()
    }, [])

    return (
        <div className='map-view-container mt-5'>
            <div className='container'>
                <div className="title-container">Lịch trình thông minh</div>
                <hr className="line-title"/>
                <div className='row'>
                    <MapRender filter={filter} map={map} />
                    <Markers location={location} setLocation={setLocation} map={map} />
                    <TourRender location={location} filter={filter} setFilter={setFilter} tour={tour} setTour={setTour} />
                    { tour && <TourShowcase allLocations={allLocations} allStreets={allStreets} allTransports={allTransports} /> }
                </div>
            </div>            
        </div>
    )
}