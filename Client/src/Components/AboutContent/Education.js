import React from 'react';

function Education() {
    const EducationalData = [ 
                                {Course : 'PGDCA',
                                 Institute : 'Kalinga University, Raipur',
                                 Year : '2021 -2022',
                                 Mode : 'Regular',
                                 Percentage : '63.70 %',
                                 courseCardClass : ["col-12  mb-5 mt-3  p-md-4  align-self-center"]},
                                 
                                 {Course : 'B.Tech - ME',
                                  Institute : 'Chouksey Engineering College, Bilaspur',
                                  Year : '2017 -2021',
                                  Mode : 'Regular',
                                  Percentage : '74.88 %',
                                  courseCardClass : ["col-12  mb-5  p-md-4  align-self-center"]},

                                {Course : '12th - Maths',
                                 Institute : 'Jindal Adarsh H S School, Raigarh',
                                 Year : '2016 -2017',
                                 Mode : 'Regular',
                                 Percentage : '68.60 %',
                                 courseCardClass : ["col-12  mb-5  p-md-4  align-self-center"]},

                                {Course : '10th',
                                 Institute : 'Jindal Adarsh H S School, Raigarh',
                                 Year : '2014 -2015',
                                 Mode : 'Regular',
                                 Percentage : '81.00 %',
                                 courseCardClass : ["col-12  mb-3  p-md-4  align-self-center"]},
                            ]
      
                           
  return (
    <div className='container  text-light' >
        <div className='row mt-5 justify-content-center ' >
            <div className=' row'>
                <h5 className='text-start col-md-4 col-lg-3 col-6 py-2 border-light border-2 border-bottom'> <b>EDUCATION</b></h5>
            </div>

        {  
            EducationalData.map ((data, i) =>{                 
            return(
              
                <div className={data.courseCardClass.join(' ')} key={i} 
                style={{wordSpacing:"1px",}} >

    
                    <div className='row '>
                        <div className='col-1 text-end'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="d-inline bi bi-rocket-takeoff-fill" viewBox="0 0 16 16">
                            <path d="M12.17 9.53c2.307-2.592 3.278-4.684 3.641-6.218.21-.887.214-1.58.16-2.065a3.578 3.578 0 0 0-.108-.563 2.22 2.22 0 0 0-.078-.23V.453c-.073-.164-.168-.234-.352-.295a2.35 2.35 0 0 0-.16-.045 3.797 3.797 0 0 0-.57-.093c-.49-.044-1.19-.03-2.08.188-1.536.374-3.618 1.343-6.161 3.604l-2.4.238h-.006a2.552 2.552 0 0 0-1.524.734L.15 7.17a.512.512 0 0 0 .433.868l1.896-.271c.28-.04.592.013.955.132.232.076.437.16.655.248l.203.083c.196.816.66 1.58 1.275 2.195.613.614 1.376 1.08 2.191 1.277l.082.202c.089.218.173.424.249.657.118.363.172.676.132.956l-.271 1.9a.512.512 0 0 0 .867.433l2.382-2.386c.41-.41.668-.949.732-1.526l.24-2.408Zm.11-3.699c-.797.8-1.93.961-2.528.362-.598-.6-.436-1.733.361-2.532.798-.799 1.93-.96 2.528-.361.599.599.437 1.732-.36 2.531Z"/>
                            <path d="M5.205 10.787a7.632 7.632 0 0 0 1.804 1.352c-1.118 1.007-4.929 2.028-5.054 1.903-.126-.127.737-4.189 1.839-5.18.346.69.837 1.35 1.411 1.925Z"/>
                            </svg>
                        </div>
                        <div className='col-9'>
                            <h5 className='d-inline'>{data.Course}</h5>
                        </div>
                    </div>
    
                    <div className='row mt-3'>
                        <div className='col-3  text-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-building-check" viewBox="0 0 16 16">
                        <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.708l.547.548 1.17-1.951a.5.5 0 1 1 .858.514Z"/>
                        <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z"/>
                        <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"/>
                        </svg>
                        </div>
                        <div className='col-9'>
                            <h6 className='d-inline' >{data.Institute}</h6>
                        </div>
                    </div>
    
                    <div className='row ' >
                        <div className='col-3 text-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-calendar-check-fill" viewBox="0 0 16 16">
                        <path d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM16 14V5H0v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2zm-5.146-5.146-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708.708z"/>
                        </svg>
                        </div>
                        <div className='col-9'>
                            <h6 className='d-inline'>{data.Year}</h6>
                        </div>
                    </div>
    
                    <div className='row  '>
                        <div className='col-3  text-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-index-fill" viewBox="0 0 16 16">
                        <path d="M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5.114 5.114 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.632 2.632 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046l-.048.002z"/>
                        </svg>
                        </div>
                        <div className='col-9'>
                            <h6 className='d-inline'>{data.Mode}</h6>
                        </div>
                    </div>
    
                    <div className='row '>
                        <div className='col-3 text-end'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
                        <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
                        <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
                        </svg>
                        </div>
                        <div className='col-9'>
                            <h6 className='d-inline'>{data.Percentage}</h6>
                        </div>
                    </div>
                    </div>
               
            )   }                            

          )  }                                            

       </div>
    </div> 
    
 ) 
}

export default Education