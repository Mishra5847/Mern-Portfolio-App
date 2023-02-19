import React, {useContext, useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from './AppContext';
import bgimg from "./Assets/bg1.jpg";

function Contact() {

  let navigate = useNavigate();
  const {setLogin} = useContext(Context);

  const [responseMsg, setresponseMsg] = useState('');
  const [error, setError] = useState('');
  const [User, setUser] = useState({name:'', email:'', phone:'',message:''});
  // _________________________________________ONCHANGE INPUT VALUES_____________________________________________________
  const inputOnChange = (e) => {
    const {name, value} = e.target;
    setUser({...User, [name]:value})
    // console.log(User)
  }

  // _________________________________________GET USER DATA ONLOADING PAGE_____________________________________________________
  const getUserData = async() =>{
      try {
            const res = await fetch('/contact', {
              method: 'GET',
            
        });

            const data = await res.json();
            
            setUser({name:data.name, email:data.email, phone:data.phone});
            setLogin(false)
            if(data.status !== 200 ){
            // console.log(data.error)
            }
              
      } catch (error) {
        navigate('/login')
          // console.log(error)
      }
  }

  useEffect(() =>{
      getUserData();
  },[])

// _________________________________________SUBMIT BUTTON EVENT_____________________________________________________
  const submitMessage = async(e) =>{
    e.preventDefault();
    const {name, email, phone, message} = User;
        try {
            const res = await fetch('/usermessage', {
              method:'POST',
              headers:{
                'Content-Type': 'application/json'
              },
              body:JSON.stringify({ name, email, phone, message})
            });

            const data = await res.json();
                    //  console.log(data)
                    
                     setresponseMsg('')
                     setTimeout(() => {
                       setresponseMsg(data.Message);
                     }, 400);
                     setUser({...User, message:''});

              if(data.sataus !==200 ||!data){
                      setError('');
                      setTimeout(() => {
                        setError(data.error)
                      }, 400);
                 
              }
                   
              
              
        } catch (error) {
          // console.log(error);
        }
  }

      


  return (
    <div
      className="container-fluid min-vh-100"
      style={{backgroundImage:'url("'+bgimg+'")', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}
    > 

    <div className='row justify-content-center'>
      {
        responseMsg
      ?
          <p className='col-9 col-lg-5 text-success mt-5 py-2 text-center' style={{backgroundColor:' rgba(0, 128, 0, 0.178)'}}>{responseMsg}</p>
      :
          <p>{responseMsg}</p>
      }
    </div>

    <div className='row justify-content-center'>
      {
        error 
      ?
          <h6 className='col-9 col-lg-5 text-danger mt-5 py-2 text-center' style={{backgroundColor:'rgba(255, 0, 0, 0.178)'}}>{error}</h6>
      :
          <p>{error}</p>
      }
    </div>

    <div className='row justify-content-evenly'>
      <div className='col-9 col-lg-3 mt-5 bg-light rounded rounded-2' style={{boxShadow:'1px 1px 2px black'}}>
        <h6 className='mt-2'>Phone</h6>
        <p>7987757171</p>
      </div>
    
      <div className='col-9 col-lg-3 mt-2 mt-lg-5 bg-light rounded rounded-2' style={{boxShadow:'1px 1px 2px black'}}> 
        <h6 className='mt-2'>Email</h6>
        <p className='text-break'>akashmishra5844@gmail.com</p>
      </div>

      <div className='col-9 col-lg-3 mt-2 mt-lg-5 bg-light rounded rounded-2' style={{boxShadow:'1px 1px 2px black'}}>
        <h6 className='mt-2'>Address</h6>
        <p>Rewa(MP) - 486114</p>
      </div>
    </div>

      <div className="container mt-5">
        <div className="row justify-content-center">
          <form method='GET' className="col-12 col-lg-11 mb-5 align-self-center  rounded rounded-lg-5 py-4 bg-light" style={{boxShadow:'1px 1px 2px black'}}>
              <h4 className="text-center mb-4"> <b>Get in Touch</b> </h4>
              <div className='row'>
                <div className="col-lg-4">
                  <div className="input-group">
                    <input
                      type="text"
                      name='name'
                      value={User.name.toUpperCase()}
                      className="form-control"
                      id="Username"
                      placeholder="Your name"
                      onChange={inputOnChange}
                    />
                  </div>
                </div>

                <div className="col-lg-4 mt-2 mt-lg-0">
                  <div className="input-group">
                    <input
                      type="email"
                      name='email'
                      value={User.email.toLowerCase()}
                      className="form-control"
                      id="Email"
                      placeholder="Your email"
                      onChange={inputOnChange}
                    />
                  </div>
                </div>
              
                <div className="col-lg-4 mt-2 mt-lg-0">
                  <div className="input-group">
                    <input
                      type="tel"
                      name='phone'
                      value={User.phone}
                      className="form-control"
                      id="Phone"
                      placeholder="Your phone number"
                      onChange={inputOnChange}
                    />
                  </div>
                </div>
              </div>
              
              <label htmlFor='textarea' className='mt-4 px-2'>Message :</label>
              <textarea 
              name='message' 
              value={User.message}
              placeholder="write your message here..." 
              id='textarea' 
              className="col-12 mt-2 form-control" 
              style={{height:'150px', resize:'none', border:'2px solid rgb(221, 221, 221)'}}
              onChange={inputOnChange} />

              <div className="row mt-4 p-lg-2 justify-content-evenly">
                <button type="submit" className="col-10 col-lg-12 btn btn-primary" onClick={submitMessage}>
                  Send
                </button>
              </div>
          </form>
          
        </div>
      </div>
    </div>
  )
}

export default Contact