import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';
import { UserContext } from '../context/Usercontext';
import logo from '../img/60995.png'
import user from '../img/User image.png'
const Header = () => {
  const { setUserInfo, UserInfo } = useContext(UserContext);
  var modal = document.getElementById("myModal");
  const Rot = document.getElementById("Btn");

  const logout = async () => {
    modal.style.display = "none";
    await fetch('http://localhost:5000/api/auth/logout',
      {
        credentials: 'include',
        method: 'POST',
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

 
  const fun1 = () => {
    const dis = modal.style.display;

    if (dis === "block" || dis === "") {
      modal.style.display = "none";

    }

    if (dis === "none" || dis === "") {
      modal.style.display = "block";
    }
  }
  const Rotate = () => {
    Rot.style.transform = "rotate(180deg)";
  }

  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  }
  return (
    <div>
      <header>
        <Link to='/' className='logo'>My Blog</Link>
        <nav>
          {username && (
            <>
              <Link to="/create">Create New Post</Link>
              {/* eslint-disable-next-line */}
              <a onClick={logout}>Logout({username})</a>
          <div className="user-img"><img src={user} alt="" /></div>
          <div className="myBtn" onClick={fun1}  >
            <img id='Btn' onClick={Rotate} alt="" src={logo} />
          </div>
          </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/signup">Register</Link>
            </>)
          }
        </nav>
      </header>
      <div id="myModal" className="modal">
        <div className="modal-content"> 
        <div className="user">{username}</div>
        <div className="edit-profile">Profile</div>
        <div className="logout" onClick={logout}>Logout</div>
        </div>
      </div>
      
    </div>
  )
}

export default Header
