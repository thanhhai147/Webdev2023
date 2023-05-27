import React, {useState, useEffect} from 'react'
import { timeConvention as timeConventionUtil } from '../../../utils/number.utils'
import { v4 as uuidv4} from 'uuid'
import LocationModal from './location-modal'

// context
import { useAppContext } from "../../../context/app-context/index.js"

export default function TourShowcase({ allLocations, allStreets, allTransports }) {
    const [modalLocation, setModalLocation] = useState(null) 

    const oneLocationRender = ( oneLocation ) => {

        const { address_string, province, city, district, ward } = oneLocation['address']
        const address = address_string + ", quận " + district +  ", thành phố " + city + (province ? ", tỉnh " + province : "") 
        return (
            <>
                <div className='one-location-container p-3 rounded-5 ' type="button" data-bs-toggle="modal" data-bs-target="#exampleModal" key={uuidv4()} onClick={() => setModalLocation({ name: oneLocation['name'], history: oneLocation['history'] })}>
                    <div className='location-name fw-semibold fs-5' key={uuidv4()}>
                        {oneLocation['name']}
                    </div>
                    <div className='location-address' key={uuidv4()}>
                        {address}
                    </div>
                    <div className='d-flex flex-row justify-content-around mt-3'>
                        <div className='location-price' key={uuidv4()}>
                            <div className='location-label fw-semibold' key={uuidv4()}>Chi phí: </div>
                            {oneLocation['price']}
                        </div>
                        <div className='location-time' key={uuidv4()}>
                            <div className='location-label fw-semibold' key={uuidv4()}>Thời gian: </div>
                            {timeConventionUtil(oneLocation['time_seconds'])}
                        </div>
                    </div>
                </div>
            </>
        )
    }

    const transportRender = ( oneTransport ) => {
        return (
            <>
                <div className='transport-container' key={uuidv4()}>
                    <div className='d-flex flex-row justify-content-center'>
                        <div className='transport-type ms-1 me-1' key={uuidv4()}>{ oneTransport['type'] }</div>
                    </div>
                    <div className='line'></div>
                    <div className='d-flex flex-row'>
                        <div className='transport-price ms-1 me-1' key={uuidv4()}>{ oneTransport['price'] } VND</div>
                        -
                        <div className='transport-time ms-1 me-1' key={uuidv4()}>{ timeConventionUtil(oneTransport['time_seconds']) }</div>
                    </div>
                </div>
            </>
        )
    }

    const oneStepRender = ( oneLocation, oneTransport ) => {
        return (
            <>
                <div className='one-step-container d-flex flex-row align-items-center col-4' key={uuidv4()}>
                    {oneLocationRender(oneLocation)}
                    {oneTransport && transportRender(oneTransport)}
                </div>
            </>
        )
    }

    const listLocationRender = ( locations, transports ) => locations ? locations.map((location, index) => oneStepRender(location, transports[index])) : null

    return (
        <>
            <LocationModal location={modalLocation} />
            <div className='tour-showcase-container element-bg-color rounded-5 p-4 mt-5'>
                <div className="tour-showcase-wrapper">
                    <div className='tour-showcase-title primary-color mb-3'>Kết quả tìm kiếm</div>
                    <div className='d-flex flex-row overflow' key={uuidv4()}>
                        { listLocationRender(allLocations, allTransports) }
                    </div>
                </div>
            </div>
        </>
    )
}