import React, { useEffect} from 'react';
import PortFolioApp from './AboutContent/PortfolioApp';
import { useNavigate } from 'react-router-dom';

function About() {

  const navigate = useNavigate();
  const getData = async () =>{
    try {
          const res = await fetch('/about', {
                            method: 'GET',
                            headers: {
                              Accept: 'application/json',
                              'Content-Type' : 'application/json'
                            },
                            credentials: 'include'
                      });

            const data = await res.json();
           if(!data){
            alert(data.error)
           }
    } catch (error) {
            // console.log(error)
            navigate('/login')
    }            
}
 


useEffect(()=>{
 
  getData();
},[])


  return (
    <form method='GET'>
      <PortFolioApp />
    </form>
  )
}

export default About