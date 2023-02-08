import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { UserContext } from '../context/Usercontext';
const Login = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const navigate = useNavigate();
  const {setUserInfo} = useContext(UserContext);
  const onchange1=(e)=>{
     setusername(e.target.value);
  }
  const onchange2 =(e)=>{
    setpassword(e.target.value);
  }

  const submit= async(e)=>{
    e.preventDefault();
    const response= await fetch('http://localhost:5000/api/auth/login' ,
    {
     method:'POST',
     body:JSON.stringify({username,password}),
     headers:{'Content-Type':'application/json'},
     credentials:"include",
    });
    if(response.ok)
    {  response.json().then(userInfo=>{
      setUserInfo(userInfo);
    })
      navigate("/");
    }
     
      else 
      alert('Wrong Crendentials')
    
  }
  return (
    <div>
      <form className='login' onSubmit={submit}>
        <h1>Login</h1>
        <input type="text" placeholder="username" value={username} onChange={onchange1}/>
        <input type="password" placeholder="password" value={password} onChange={onchange2}/>
         <button>Login</button>
      </form>
    </div>
  )
}

export default Login
