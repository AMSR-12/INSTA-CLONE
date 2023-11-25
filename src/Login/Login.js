import React from "react";
import "./Login.css"
import { Link } from "react-router-dom";
 import loginPic from "./insta phone.png";
import Playstore from "./playstore.png"
import Facebook from "./facebook-logo-png-format-6.png"
import MicrosoftStore from "./Microsoft.png"
import { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css"
const Login = ({ setLoggedIn }) => {
  const userNameRef = useRef();
  const passwordRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();
    if (userNameRef.current.value && passwordRef.current.value) {
      setLoggedIn(true);
    } else {
      document
        .getElementById("needs-validation")
        .classList.add("was-validated");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center align-items-center login-row">
        <div className="col-xl-5 col-lg-6 col-md-none">
            <img src={loginPic} alt="login image" id="login-pic" />
        </div>
        <div className="col-xl-5 col-lg-6 col-md-8">
          <div className="border px-5 login-form">
            <img 
              src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
              alt="insta logo"
              id="insta_name_icon"
              className="mt-5 justify-content-center"
            />
            <form action="" className="" id="needs-validation">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  ref={userNameRef}
                  placeholder="Phone number,username or email address"
                  required
                />
              </div>
              <div className="input-group mb-3">
                <input
                  type="password"
                  className="form-control"
                  ref={passwordRef}
                  placeholder="Password"
                  required
                />
              </div>
              <button
                className="btn btn-primary w-100 my-3"
                onClick={handleLogin}
              >
                Log in
              </button>
            </form>
           <hr/>
            <div className="text-muted">
            OR
            </div> 
            <a
              href="https://www.facebook.com"
              target="_blank"
              className="my-3 text-decoration-none fw-bolder "
            >
              <span className="me-1">
                <img src={Facebook} alt="facebook icon"id="fb-icon" />
              </span>
              Log in with Facebook
            </a>

           <div className="my-3">
              <Link
                to="/forgotpassword"
                className="text-decoration-none text-muted justify-content-center"
              > 
                <small>Forgotten your password?</small>
               </Link>
            </div> 
          </div>
          <div className="mt-3 p-3 border">
            Don't have an account?{" "}
            <Link to="/signup" className="fw-bolder text-decoration-none">
              Sign up
            </Link>
          </div>
          <div className="mt-3">
            <div className="get"><p>Get the app.</p></div>
          </div>
          <div className="d-flex justify-content-center mt-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.instagram.android&referrer=ig_mid%3DF0856760-8B3C-43AA-9E2A-0D3E0DD68F2A%26utm_campaign%3DloginPage%26utm_content%3Dlo%26utm_source%3Dinstagramweb%26utm_medium%3Dbadge%26original_referrer%3Dhttps%253A%252F%252Fwww.google.com%252F"
              target="_blank"
              className="download-link me-2"
            >
              <img src={Playstore} alt="playstore" className="download-icon" />
            </a>
            <a
              href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=1084%2C0%2C836%2C1032"
              target="_blank"
              className="download-link ms-2"
            >
              <img
                src={MicrosoftStore}
                alt="microsoft store"
                className="download-icon"
              />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};
export default Login;