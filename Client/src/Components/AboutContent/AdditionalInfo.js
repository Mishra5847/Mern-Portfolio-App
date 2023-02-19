import React from 'react'

function AdditionalInfo() {
  return (
    <div className='container text-light'style={{backgroundColor:'black'}} >
        <div className='row mt-5 justify-content-center ' >
            <div className='row'>
                <h5 className='col-md-7 col-lg-4 col-12 py-2 border-light border-2 border-bottom'> <b>ADDITIONAL INFO</b></h5>
            </div>

            <div className='row mt-4'>
                <span className='col-5 col-md-3 '>
                    <h6>Father </h6>
                </span>
                <span className='col-7 col-md-9'>
                    <h6>: Mr. Vishwajeet Mishra</h6>
                </span>
            </div>
            <div className='row'>
                <span className='col-5 col-md-3'>
                    <h6>Nationality </h6>
                </span>
                <span className='col-7 col-md-9'>
                    <h6>: Indian</h6>
                </span>
            </div>
            <div className='row'>
                <span className='col-5 col-md-3'>
                    <h6>Religion </h6>
                </span>
                <span className='col-7 col-md-9'>
                    <h6>: Hindu</h6>
                </span>
            </div>
            <div className='row'>
                <span className='col-5 col-md-3'>
                    <h6>Languages </h6>
                </span>
                <span className='col-7 col-md-9'>
                    <h6>: Hindi, English, Bhojpuri</h6>
                </span>
            </div>
        </div>
    </div>
  )
}

export default AdditionalInfo