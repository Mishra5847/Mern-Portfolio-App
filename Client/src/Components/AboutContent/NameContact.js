import React from 'react';
import AM from './images/AM.png';

function NameContact() {
  return (
    <div className='container text-center text-light py-5'style={{backgroundColor:'black'}}>
        <div className='row justify-content-center'>
            <div className='col-5 mt-lg-5'>
                <img src={AM} alt='' className='img-fluid' height='400' width='400'></img>
            </div>
        </div>
        <div className='row justify-content-center mt-5'>
            <h1 className='mt-md-5' style={{letterSh1acing:'4px'}}>AKASH MISHRA</h1>
        </div>
        <div className='row justify-content-center '>
            <h6 className='col-10 col-md-8 col-lg-9 border-bottom py-md-3 p-3' style={{letterSpacing:'4px'}}>MECHANICAL ENGINEER</h6>
        </div>
        <div className='row justify-content-center mt-1 mt-5 '>
            <span className='col-1 text-end'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-phone-fill" viewBox="0 0 16 16">
                <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0z"/>
                </svg>
            </span>
            <span className='col-10 col-md-7 col-lg-5 text-start '>+91 7987757171</span>
        </div>
        <div className='row justify-content-center mt-2'>
            <span className='col-1 text-end'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope-fill" viewBox="0 0 16 16">
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z"/>
                </svg>
            </span>
            <span className='col-10 col-md-7 col-lg-5 text-start'>akashmishra5844@gmail.com</span>
        </div>
        <div className='row justify-content-center mt-2 '>
            <span className='col-1 text-end'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-linkedin" viewBox="0 0 16 16">
                <path d="M0 1.146C0 .513.520 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.520 1.146-1.175 1.146H1.175C.520 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
            </span>
            <span className='col-10 col-md-7 col-lg-5 text-start'>
            <a href="https://www.linkedin.com/in/akash-mishra-b918b4249/"
                className=" text-light">
                    AKASH MISHRA
              </a>
            </span>
        </div>
    </div>
  )
}

export default NameContact