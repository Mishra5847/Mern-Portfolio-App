import React, { useContext } from "react";
import { Link, useNavigate} from "react-router-dom";
import { Context } from "./AppContext";

function Navbar() {
  const {login, setLogin} = useContext(Context);
  // console.log(login)
  const navigate = useNavigate();
  const loggingOut = async() =>{
            try {
                  const res = await fetch('/logout',{
                    method:'GET',
                    headers:{
                              Accept:'application/json',
                              'Content-Type' : 'application/json'
                            },
                    credentials:'include'
                  });

                  const data = await res.json();
                  alert(data.message);
                  navigate('/login');
                  setLogin(true);
                  // console.log(data)

            } catch (error) {
                  console.log(error)
            }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <h4 className="px-lg-4" style={{fontFamily:'monospace'}}><b className="text-primary">MERN</b>stack</h4>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className=" navbar-nav px-3">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" to="/about">
                About
              </Link>
            {
              login 
            ?
              <>
                <Link className="nav-link" to="/register">
                Register
                </Link>
                <Link className="nav-link" to="/login">
                  Login
                </Link>
                <Link className="nav-link" to="/contact">
                Contact
                </Link>
              </>
            :
              <>
                <Link className="nav-link" to="/contact">
                    Contact
                </Link>
                <Link className="nav-link" to="/" onClick={loggingOut}>
                    Logout
                </Link>
              </>
            }
              
             
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;


