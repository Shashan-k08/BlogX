import React from 'react'
import { useState } from 'react'

const SignUp = () => {
  const [username, setusername] = useState('');
  const [password, setpassword] = useState('');
  const onchange1 =(e)=>{
   setusername(e.target.value)
  }

  const onchange2 =(e)=>{
    setpassword(e.target.value);
  }
const submit = async(e)=>{
   e.preventDefault();
   const response= await fetch('http://localhost:5000/api/auth/signup' ,
   {
    method:'POST',
    body:JSON.stringify({username,password}),
    headers:{'Content-Type':'application/json'},
   });
   if(response.status===200){
    alert("Registration Successful");
   }
   else
   alert("Registration failed");
}
  return (
    <div>
        
      <form className='signup' onSubmit={submit}>
        <h1>SignUp</h1>
        <input type="text" placeholder="username" value={username} onChange={onchange1}/>
        <input type="password" placeholder="password" value={password} onChange={onchange2}/>
        <button>Register</button>
      </form>
    </div>
  )
}

export default SignUp