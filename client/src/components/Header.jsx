import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect} from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/Usercontext';
import Profile from './Profile';
const Header = () => {
  const {setUserInfo,UserInfo}=useContext(UserContext);
 

  const logout= async()=>{
   await fetch('http://localhost:5000/api/auth/logout',
   {
    credentials:'include',
    method:'POST',
   });
  setUserInfo(null);
  }
  useEffect(
    () => {
      fetch('http://localhost:5000/api/auth/profile',
        {
          credentials: 'include',
        }).then(response => {
          response.json().then(userInfo => {
            setUserInfo(userInfo)
          });

        });
    }, 
    // eslint-disable-next-line
    []

  )
  const username = UserInfo?.username;
  return (
    <div>

      <header>
        <Link to='/' className='logo'>My Blog</Link>
        <nav>
          { username && (
            <>
            <Link to="/create">Create New Post</Link>
            {/* eslint-disable-next-line */}
            <a onClick={logout}>Logout({username})</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Register</Link>
            </>)
          }
            <Profile/>
        </nav>
      </header>
    </div>
  )
}

export default Header
