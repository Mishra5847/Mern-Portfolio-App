import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import bgimg from "./Assets/bg1.jpg";


function Register() {

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
  const[error, setError] = useState('')
  const [user, setUser] = useState({name:'', email:'', phone:'', work:'', password:'', cpassword:''})

  const inputsOnchange = (e) => {
          const {name, value} = e.target;
          setUser({...user,[name]:value})
  } 
  const postData = async(e) => {
          e.preventDefault();
          const {name, email, phone, work, city, password, cpassword} = user;
          
          try {
              const res = await fetch("/register",{
                method:"POST",
                headers:{
                  "Content-Type":"application/json"
                },
                body: JSON.stringify({name, email, phone, work, city, password, cpassword})
              })
            const data = await res.json();
            // console.log(data)

            if(data.error || !data){
                setError('')
                setTimeout(() => {
                  setError(data.error)
                }, 400);
            }else{
              alert(data.message);
              navigate('/login')             //it is similar as useHistory.push('/login')
            }            
        } catch (error) {
                  // console.log(error)
                  }
     
  }

  return (
    <div
      className="container-fluid min-vh-100"
      style={{backgroundImage:'url("'+bgimg+'")', backgroundRepeat:'no-repeat', backgroundSize:'cover'}}
    >
      <div className="container min-vh-100">
        <div className="row min-vh-100 justify-content-center">
         <form method="POST" className="col-12 col-lg-6 align-self-center rounded rounded-2 py-4 bg-light" >
              <h6 className="text-center text-danger mb-4"> {error} </h6>
              <div className="row  justify-content-evenly">
                <div className="col-12 ">
                  <div className="input-group">
                    <label
                      htmlFor="Username"
                      className="input-group-text"
                      style={{ width: "5rem" }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      name='name'
                      className="form-control"
                      id="Username"
                      placeholder="enter your name"
                      onChange={inputsOnchange}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-2 justify-content-evenly">
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
                      name="email"
                      placeholder="enter your email"
                      onChange={inputsOnchange}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-2 justify-content-evenly">
                <div className="col-12">
                  <div className="input-group">
                    <label
                      htmlFor="Phone"
                      className="input-group-text"
                      style={{ width: "5rem" }}
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="Phone"
                      name="phone"
                      placeholder="enter your phone number"
                      onChange={inputsOnchange}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-2 justify-content-evenly">
                <div className="col-12">
                  <div className="input-group">
                    <label
                      htmlFor="City"
                      className="input-group-text"
                      style={{ width: "5rem" }}
                    >
                      City
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="City"
                      name="city"
                      placeholder="enter your city number"
                      onChange={inputsOnchange}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-2 justify-content-evenly">
                <div className="col-12">
                  <div className="input-group">
                    <label
                      htmlFor="work"
                      className="input-group-text"
                      style={{ width: "5rem" }}
                    >
                      Work
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="work"
                      name="work"
                      placeholder="enter your work"
                      onChange={inputsOnchange}
                    />
                  </div>
                </div>
              </div>

              <div className="row mt-2 justify-content-evenly">
                <div className="col-12">
                  <div className="input-group">
                    <label
                      htmlFor="Password"
                      className="input-group-text"
                      style={{ width: "5rem" }}
                    >
                      Password
                    </label>
                    <input
                      type={passwordType}
                      className="form-control"
                      id="Password"
                      name="password"
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

              <div className="row mt-2 justify-content-evenly">
                <div className="col-12">
                  <div className="input-group">
                    <label
                      htmlFor="Confirm"
                      className="input-group-text"
                      style={{ width: "5rem" }}
                    >
                      Confirm
                    </label>
                    <input
                      type={passwordType}
                      className="form-control"
                      id="Confirm"
                      name="cpassword"
                      placeholder="re-enter paswword"
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
                <button type="submit" onClick={postData} className="col-10 col-lg-12 btn btn-primary">
                  Register
                </button>
              </div>

              <div className="text-center">
                <Link to='/login'  className="text-decoration-none" >
                  <h6 className=" mt-4 text-dark d-inline-block">User already registered ? <p className="text-primary d-inline-block">Login here</p> </h6>
                </Link>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
