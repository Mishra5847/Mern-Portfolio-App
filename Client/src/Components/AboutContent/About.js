import React from 'react';
import my_pic from './images/my_pic.jpg';

function About() {
  return (
    <div className='container text-center text-dark bg-light py-5'>
        <div className=' row'>
            <h5 className='text-start col-md-4 col-lg-3 col-6 py-2 border-dark border-bottom border-2'> <b>ABOUT ME</b></h5>
        </div>
        <div className='row text-start'>
            <p className='col' style={{textAlign:'justify'}}>Hello, i am AKASH MISHRA - a mechanical engineer. Basically I am from Rewa(M.P.), but currently staying in Bilaspur(C.G.). I want work in highly competitive environment with perfect challanges by contributing best for the organisation while ensuring growth in personal career. 
                              I'm looking for an opportunity to work in well known national or multinational IT company, where i can not only use my skills and potential but also i can learn new skills on everyday basis for continuous improvement of my knowledge. I always want to be progressive.</p>
        </div>
        <div className='row justify-content-center mt-3 mt-md-5'>
          <div className='col-11 '>
            <img src={my_pic} alt='' className='img-fluid border  border-dark' style={{borderRadius:'40% 1% 50% 50%'}}></img>
          </div>
        </div>
    </div>
  )
}

export default About