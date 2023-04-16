import React from 'react'

import { useState } from 'react'
import { useNavigate } from "react-router-dom";
const Login = (props) => {
  const host = "http://localhost:5000";
  const [credentials, setcredentials] = useState({ username: "", password: "" })

  const navigate = useNavigate();
  
  const submit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${host}/api/auth/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username:credentials.username,password:credentials.password})
    });
    const json = await response.json();
    console.log(json)
    if(json.success)
    {
        // save the verification token and redirect
        localStorage.setItem('token',json.verificationtoken);
        navigate("/");
         props.showalert("Logged-in Successfully", "success")

    }
    else
    { console.log("hey")
        // props.showalert("Invalid details","danger")
    }
}

const onchange = (e) => {
  setcredentials({ ...credentials, [e.target.name]: e.target.value })
}
  return (
  
    <div className="container">
    <div className="forms-container">
      <div className="logo"> BLogX <b>.</b> </div>
      <div className="signin-signup">
        <form onSubmit={submit} className="sign-in-form">
          <h2 className="title">Sign in</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" placeholder="Username" name='username' value={credentials.username} onChange={onchange}/>
          </div>
          <div className="input-field">
          <i className="fas fa-lock"></i>
            <input type="password" placeholder="Password" name='password' value={credentials.password} onChange={onchange} />
          </div>
          <p> <u>Forgot Password?</u></p>
          <input type="submit" value="Login" className="btn solid" />
          <p className="social-text">Or Sign in with social platforms</p>
          <div className="social-media">
            <a href="/" className="social-icon">
              <i className="fab fa-facebook-f"></i>
     
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-google"></i>
            </a>
            <a href="/" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p>Don't Have an Account?</p> < input type="submit" onClick={()=>{navigate("/signup")}}  className="btn" value="SIGN UP" onSubmit={submit} />
          
        </form>
        
        </div>
        </div>
        </div>
  )
}

export default Login
