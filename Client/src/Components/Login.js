import React, { useContext, useState } from "react";
import bgimg from "./Assets/bg1.jpg";
import { Link, useNavigate } from 'react-router-dom';
import { Context } from "./AppContext";


function Login() {

      const {setLogin} = useContext(Context);
      const [flag, setFlag] = useState(true);
      const [passwordType, setPasswordType] = useState('password');

      const showHide = () => {
                  setFlag(!flag)
     
                  if(flag){
                    setPasswordType('text')
                  }else{
                    setPasswordType('password')
                  }
              }



        const navigate = useNavigate();
        const [error, setError] = useState('');
        const [userCredentaial, setuserCredentaial] =  useState({email:'', password:''});

        const inputsOnchange = (e) => {
                      const {name, value} = e.target;
                      setuserCredentaial({...userCredentaial, [name]:value})
                  }


        const PostData = async (e) => {
            e.preventDefault();

            try {
                const {email, password} = userCredentaial;
                const res = await fetch('/login', {
                  method:'POST',
                  headers:{
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({email, password})
                });
    
                const data = await res.json();
                if(data.error || !data){
                      setError('');
                      setTimeout(() => {
                        return setError(data.error)
                      }, 400);
                }else{
                      alert(data.message);
                      setLogin(false);
                      navigate('/')            //it is similar to the useHistory.push('/')
                }
            } catch (error) {
                // console.log(error)
            }
           
          }
  return (
    <div
      className="container-fluid min-vh-100"
      style={{
        backgroundImage: 'url("' + bgimg + '")',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container min-vh-100">
        <div className="row min-vh-100 justify-content-center">
          <form className="col-12 col-lg-6 align-self-center  rounded rounded-2 py-4 bg-light">
            <h6 className="text-center text-danger mb-4">  {error} </h6>
            
            
            <div className="row justify-content-evenly">
              <div className="col-12">
                <div className="input-group">
                  <label
                    htmlFor="Email"
                    className="input-group-text"
                    style={{ width: "5rem" }}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="Email"
                    name='email'
                    placeholder="enter your email"
                    onChange={inputsOnchange}
                  />
                </div>
              </div>
            </div>

            <div className="row  mt-2 justify-content-evenly">
              <div className="col-12 ">
                <div className="input-group">
                  <label
                    htmlFor="Username"
                    className="input-group-text"
                    style={{ width: "5rem" }}
                  >
                    Password
                  </label>
                  <input
                    type={passwordType}
                    className="form-control"
                    id="Username"
                    name='password'
                    placeholder="enter your password"
                   onChange={inputsOnchange}
                  />
                  <span onClick={showHide}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="mt-2 text-secondary bi bi-eye-fill" viewBox="0 0 16 16">
                      <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"/>
                      <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"/>
                    </svg>
                  </span>
                </div>
              </div>
            </div>


            <div className="row mt-4 p-lg-2 justify-content-evenly">
              <button
                type="submit"
                className="col-10 col-lg-12 btn btn-primary"
                onClick={PostData}
              >
                Login
              </button>
            </div>

            <div className="text-center">
                <Link to='/register'  className="text-decoration-none" >
                  <h6 className=" mt-4 text-dark d-inline-block">account doesn't exist ? <p className="text-primary d-inline-block">Create account</p> </h6>
                </Link>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
