import React from 'react'
import {Link} from 'react-router-dom';
import { useEffect } from 'react';
const Header = () => {
useEffect(
  ()=>{
    fetch('http://localhost:5000/api/auth/profile',
    {
      credentials:'include',
    })
  },[]
)
  return (
    <div>
      
      <header>
        <Link to='/' className='logo'>My Blog</Link>
        <nav>
          <Link  to="/login">Login</Link>
          <Link to="/signup">Register</Link>
        </nav>
      </header>
    </div>
  )
}

export default Header
