import React from 'react'

const SignUp = () => {
  return (
    <div>
        
      <form className='signup'>
        <h1>SignUp</h1>
        <input type="text" placeholder="username"/>
        <input type="password" placeholder="password"/>
        <button>Register</button>
      </form>
    </div>
  )
}

export default SignUp