import React from 'react';
import './CrudApp.css';
import pageNotFound from './Assets/pageNotFound.jpg';

function NotFound() {
  return (
    <div className='container-fluid'>
      <div className='row justify-content-center' >
     
        <img src={pageNotFound} alt='' className='img-fluid mt-5  img404'></img>
    
        <div className='row mt-5'>
        <h1 className='text-center text-secondary' ><b>WE ARE SORRY, PAGE NOT FOUND</b></h1>
        
        <p className='text-center text-secondary' >THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED ITS NAME CHANGED OR IT IS TEMPORARILY UNAVAILABELE.</p>
      </div>
      </div>
    </div>
  )
}

export default NotFound;