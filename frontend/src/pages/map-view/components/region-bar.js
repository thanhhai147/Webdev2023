import React, { useState, useEffect } from 'react'


export default function RegionBar({ region, setRegion }) {


    return (
        <div className='region-bar-container col-12'>
            <div className='region-line'>
                <hr className='rounded-5'/>
            </div>
            <div className='region-marker-container d-flex flex-row align-items-center justify-content-around'>
                <div className='region-marker'>
                    <div className='region-image'></div>
                    <div className='region-circle'></div>
                    <div className='region-label' onClick={() => setRegion('north')}>Miền Bắc</div>
                </div>
                <div className='region-marker'>
                    <div className='region-image'></div>
                    <div className='region-circle'></div>
                    <div className='region-label' onClick={() => setRegion('central')}>Miền Trung</div>
                </div>
                <div className='region-marker'>
                    <div className='region-image'></div>
                    <div className='region-circle'></div>
                    <div className='region-label' onClick={() => setRegion('south')}>Miền Nam</div>
                </div>
            </div>
        </div>
    )
}