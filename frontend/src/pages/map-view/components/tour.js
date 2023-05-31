import React, { useState, useEffect } from 'react'
import Form from '../../../components/form/form.js';

// context
import { useAppContext } from "../../../context/app-context/index.js"

export default function TourRender({ location, filter, setFilter, tour, setTour }) {
    const { setNotification } = useAppContext();

    return (
        <div className="tour-container rounded-5 mt-5">
            <Form 
                formState={filter}
                setFormState={setFilter}
                formTypes={["select", "range"]}
                location={location}
                tour={tour}
                setTour={setTour}
            />
        </div>
    )
}