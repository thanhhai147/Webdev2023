import React from 'react'


export default function LocationModal({ location }) {


    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title" id="exampleModalLabel">Thông tin lịch sử</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='modal-location-name'>
                            {location && location['name']}
                        </div>
                        <div className='modal-location-history'>
                            {location && location['history']}
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn primary-bg-color background-color rounded-5 ps-4 pe-4 fw-semibold" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}