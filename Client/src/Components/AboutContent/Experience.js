import React from 'react';
import jspl from './images/jspl.png';
import avtec from './images/avtec.png'

function Experience() {
    const trainingDetails = [
        {
          company : jspl,         
          alt:'JSPL',
          logoHeight : '65',
          duration : '01/07/2019 - 29/07/2019',
          description : " I've done summer industrial training from Jindal Steel & Power Limited for 1 month in 2019 during my graduation. I worked as a summer industrial trainee in SAF (submerged arc furnace) department of JSPL, Raigarh (C.G.). After successfully complition of training , a training complition certificate was also provided by HR of JSPL, Raigarh.",
        },
        {
          company : avtec,
          alt:'AVTEC Limited CK Birla Group',
          logoHeight : '65',
          duration : '26/10/2021 - 30/04/2022',
          description : "After successfully completion of my graduation i did job in AVTEC Limited, Pithampur indore. I worked here as a trainee in production & Assembly department of ISUZU BS3 diesel engine. As mentioned above that i started my job in AVTEC Limited from october,26th 2021 till april,30th 2022.",
        }
      ]     
return (
<div className='container bg-light mb-2'>
<div className='row   mt-5 ' >

<div className=' row mt-5'>
        <h4 className='text-start col-md-7 col-lg-5 col-8 py-2 text-light' style={{backgroundColor:'black', borderRadius:'0% 30% 30% 0%'}}> <b>EXPERIENCE</b></h4>
    </div>

<div className='col-12 mt-5 mb-5  align-self-center'>
{
trainingDetails.map((data, index) => {
      return <div className='row text-center justify-content-center'   key={index}>
          <div className='col text-start bg-light'>
            <img src={data.company}  alt={data.alt} height={data.logoHeight} className='p-2'></img>
          </div>
          <div className='col-12 mt-3'>
              <div className='row'>
                <h5 className='col-md-3   d-inline text-start '>Trainee</h5>
                <h6 className='col-md-8 d-inline text-start text-md-end'>  {data.duration}  </h6>
              </div>
          </div>
          <div className='col-12 mt-2 mb-4'>
              <div className='row mb-4'>
                <h5 className='col-md-4 col-lg-3 d-inline text-start'>Description </h5>
                <h6 className='col-md-12 col-lg-9 d-inline ' style={{textAlign:'justify'}}> {data.description} </h6>
              </div>
          </div>
          
          </div>
      })
    }
</div>



</div>
</div>
)
}

export default Experience