import React from 'react';
import NameContact from './NameContact.js';
import About from './About.js';
import Skills from './Skills.js';
import Experience from './Experience.js';
import Education from './Education.js';
import Strength from './Strength.js';

function PortfolioApp() {
  return (                              
    <div className='container-md border border-dark'>             
      <div className='row border-bottom border-light border-5'>
        <div className='col-md-5' style={{backgroundColor:'black'}}>      
          <NameContact />
        </div>
        <div className='col-md-7 '>
          <About />
        </div>
      </div>

      <div className='row'>
        <div className='col-md-5 border-5 border-end border-light' style={{backgroundColor:'black'}}>                
          <Skills className=''/><hr />
          <Experience />
        </div>
        <div className='col-md-7'  style={{backgroundColor:'black'}}>
          <Education /> 
          <Strength/>
        </div>
      </div>
    </div>
  )
}

export default PortfolioApp