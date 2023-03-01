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
    {
        props.showalert("Invalid details","danger")
    }
}

const onchange = (e) => {
  setcredentials({ ...credentials, [e.target.username]: e.target.value })
}
  return (
    <div>
      <form className='login' onSubmit={submit}>
        <h1>Login</h1>
        <input type="text" placeholder="username" value={credentials.username} name="username"  onChange={onchange}/>
        <input type="password" placeholder="password" value={credentials.password} name="password" onChange={onchange}/>
         <button>Login</button>
      </form>
    </div>
  )
}

export default Login
