import React from 'react'
import Dashboard from '../components/HR/Dashboard'
import SideNavHR from '../components/SideNavHR'
const Layout = () => {
  return (
    <div className="d-flex">
      <SideNavHR />
      <div className='content w-100'>
        <div class="tab-content" id="nav-tabContent">
          <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
            <Dashboard />
          </div>
          <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">...</div>
          <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
        </div>
      </div>
    </div>

  )
}

export default Layout