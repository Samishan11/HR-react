import React from 'react'
import CircularBar from '../CircularBar'

const Dashboard = () => {
  return (
    <div className=''>
      <div className='my-4 px-3'>
        <h4 className="text-light">Welcome Sandeep !</h4>
        <small className='text-sm text-light'>Observe your Human Resourcing Performance.</small>
      </div>

      <div className='container row px-3'>
        <div className='col-md-2'>
          <div className='rounded border bg-light px-2 pt-3 shadow text-secondary'>
            <span className='d-block text-center'><i className='fa-solid fa-briefcase'></i> Active Jobs</span>
            <p className='text-center fw-bold' style={{ fontSize: "3rem" }}>13</p>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='rounded border bg-light px-2 pt-3 shadow text-secondary'>
            <span className='d-block text-center'><i className='fa-solid fa-user-group'></i> Applicants</span>
            <p className='text-center fw-bold' style={{ fontSize: "3rem" }}>24</p>
          </div>
        </div>
        <div className='col-md-2'>
          <div className='rounded border bg-light px-2 pt-3 shadow text-secondary'>
            <span className='d-block text-center'><i className='fa-solid fa-user-clock'></i> Interviewed</span>
            <p className='text-center fw-bold' style={{ fontSize: "3rem" }}>5</p>
          </div>
          
        </div>
        <div className='col-md-2'>
          <div className='rounded border bg-light px-2 pt-3 shadow text-secondary'>
            <span className='d-block text-center'><i className='fa-solid fa-file-lines'></i> Resume</span>
            <p className='text-center fw-bold' style={{ fontSize: "3rem" }}>10</p>
          </div>
        </div>
      </div>

      <div className='container-fluid px-0 middle-section'>
        <div className='middle-content pb-5'>
          <div className='row px-3'>
            <div className='col-md-8'>
              <div className='border rounded shadow bg-light px-3 py-4 text-secondary'>
                <p>RECENT APPLICANTS</p>
                <table class="table table-borderless mt-4">
                  <thead className='text-secondary'>
                    <tr>
                      <td className=""></td>
                      <td className="">NAME</td>
                      <td className="">APPLY FOR</td>
                      <td className="">DATE</td>
                      <td className=""></td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className=''>
                      <td><div className='sq-avatar-sm rounded d-flex align-items-center justify-content-center text-secondary'>MN</div></td>
                      <td>
                        <p className='m-0 text-s'>Sandeep </p>
                        <p className='m-0 text-sm'>sandeep@gmail.com</p>
                      </td>
                      <td className='text-s'>Full Stack Developer</td>
                      <td className='text-s'>12 Dec, 2022</td>
                      <td><span className='badge bg-info fw-light py-2'>INTERVIWED</span></td>
                    </tr>
                    <tr className=''>
                      <td><div className='sq-avatar-sm rounded d-flex align-items-center justify-content-center text-secondary'>MN</div></td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr className=''>
                      <td><div className='sq-avatar-sm rounded d-flex align-items-center justify-content-center text-secondary'>MN</div></td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className='col-md-4'>
              <div className='border rounded '>
                <CircularBar value={60} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard