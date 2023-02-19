import React, { useEffect, useState } from 'react';
import bgimg from './Assets/bg1.jpg';
import welcome from './Assets/welcome_img.png';

function Home() {
  const [user, setUser] = useState({name:''});

  const getUserData = async() =>{
    try {
      const res = await fetch('/contact', {
        method:'GET',
      });

     const data = await res.json();
     setUser({name:data.name})

     if(data.status !== 200){
      throw new console.error(data.error);
     }
    } catch (error) {
      // console.log(error)
    }
                  
  }

  useEffect(() =>{
    getUserData()
  },[])

  return (
    <div className='container-fluid min-vh-100 ' style={{backgroundImage:'url("'+bgimg+'")', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}>
      <div className='row min-vh-100  align-items-center'>
        <div className='col text-center'>
        <form method='GET'>

          {
            user.name === ''
          ?
          <>
            <h1 className='d-inline'> Hello </h1>
            <h1 className='d-inline'><b>USER</b></h1>
            <h5 className='mt-2'>Welcome to our MERNSTACK project</h5>
          </>
          :
          <>
            <img src={welcome} alt='' style={{height: '20rem'}}/>
            <h5> Hello </h5>
            <h1><b> {user.name.toUpperCase()} </b></h1>
            <h4 className='mt-2'>Glad to see you...!</h4>
          </>
          }
          
          
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home;