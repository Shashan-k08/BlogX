import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
const SignUp = (props) => {
  const [credentials, setcredentials] = useState({ username: "",email:"", password: "" })
  const host = "https://blogx-y6xc.onrender.com";
  let navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const { username,email, password } = credentials;
    const response = await fetch(`${host}/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username,email, password })
    });
    const json = await response.json();
    console.log(json)
    // save the verification token and redirect
    if (json.success) {
      localStorage.setItem('token', json.verificationtoken);
      navigate("/");
      props.showalert("Account created Successfully", "success")
    }
    else {
      props.showalert("Invalid credentials", "danger")
    }
  }
  const onchange = (e) => {
    setcredentials({ ...credentials, [e.target.name]: e.target.value })
  }
const login=()=>{
  navigate("/login");
}
  return (
    <div className="container">
      <div className="forms-container">
      <div className="logo"> BLogX <b>.</b> </div>
        <div className="signin-signup">
          <form onSubmit={submit} className="sign-up-form">
            <h2 className="title">Join us</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" placeholder="Username" value={credentials.username} name="username" onChange={onchange}/>
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input type="email" placeholder="Email" value={credentials.email} name="email" onChange={onchange} />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" placeholder="Password" value={credentials.password} name="password" onChange={onchange} />
            </div>
           
            <input type="submit" className="btn" value="Sign up" onSubmit={submit} />
            <p className="social-text">Or Sign up with social platforms</p>
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
            <p><u>Already Have an Account?</u></p> <input type="submit" className="btn" value="Sign in" onClick={login} />
          </form>
        </div>
      </div>



    </div>


  )
}

export default SignUp