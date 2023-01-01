import React from 'react'
import { Link } from 'react-router-dom'

const SideNavHR = () => {
    return (
        <div className='side-nav bg-light'>
            <div className='px-3 py-3'>
                <h5> <i className='fa-solid fa-pie-chart'></i> Epic HR</h5>
            </div>
            <div>
                <div className='nav nav-tabs' id='nav-tab' role="tablist">
                    <button className='tab-btn px-0 active' type='button' data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">
                        <div className='px-3 py-3 text-secondary nav-active'>
                            <span className=''><i className='fa-solid fa-chart-simple fs-5 me-1'></i> <span className='text-s text-primary'>Dashboard</span></span>
                        </div>
                    </button>
                    <button className='tab-btn px-0' type='button' data-bs-toggle="tab" data-bs-target="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">
                        <div className='px-3 py-3 text-secondary'>
                            <span className=''><i className='fa-solid fa-briefcase fs-5 me-1'></i> <span className='text-s'>Jobs</span></span>
                        </div>
                    </button>
                    <button className='tab-btn px-0' type='button' data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">
                        <div className='px-3 py-3 text-secondary'>
                            <span className=''><i className='fa-solid fa-user fs-5 me-1'></i> <span className='text-s'>Applicants</span></span>
                        </div>
                    </button>
                    <button className='tab-btn px-0' type='button' data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="nav-home" aria-selected="false">
                        <div className='px-3 py-3 text-secondary'>
                            <span className=''><i className='fa-solid fa-cog fs-5 me-1'></i> <span className='text-s'>Settings</span></span>
                        </div>
                    </button>
                </div>
                {/* <div class="nav nav-tabs" id="nav-tab" role="tablist">
                    <button class="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
                    <button class="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false">Profile</button>
                    <button class="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false">Contact</button>
                </div> */}


            </div>
            <div className='nav-footer d-flex align-items-center w-100 pb-4 pt-2'>
                <div className='mx-3 w-100'>
                    <small className='text-secondary d-block mb-2'>Logged in as:</small>
                    <div className="dropdown w-100">
                        <div className="d-flex w-100" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown">
                            <div className='no-img-avatar-sm rounded-circle d-flex align-items-center justify-content-center'>
                                <span className='text-light'>MB</span>
                            </div>
                            <div className='my-auto mx-2 text-sm'>
                                <span>Sandeep </span>
                                <span className='text-secondary d-block text-xs'>HR Manager</span>
                            </div>
                            <div className='ms-auto'>
                                <span><i className='fa-solid fa-chevron-right text-xs text-secondary'></i></span>
                            </div>
                        </div>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <Link className="dropdown-item" to="#">Action</Link>
                            <Link className="dropdown-item" to="#">Another action</Link>
                            <Link className="dropdown-item" to="#">Something else here</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavHR