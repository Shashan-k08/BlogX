import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import imag1 from '../img/Blog-img1.png';
const SignUp = (props) => {
  const [credentials, setcredentials] = useState({ username: "", password: "" })
  const host = "http://localhost:5000";
  let navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    const { username, password } = credentials;
    const response = await fetch(`${host}/api/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password })
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

  return (
    <div className='signup-container column'>
      <div className="logo">BLogX <b>.</b></div>
      <div className="wrapper row" >
        <div className="wrapper1"> <img src={imag1} alt=''/></div>
        <div className="wrapper2">
          <form className='signup' onSubmit={submit}>
            <h1>SignUp</h1>
            <input type="text" placeholder="username" name="username" onChange={onchange} />
            <input type="password" placeholder="password" name="password" onChange={onchange} />
            <button className='pointer'>Register</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp