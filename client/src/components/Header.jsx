import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useContext } from 'react';

import logo from '../img/60995.png'
import user from '../img/User image.png'
const Header = () => {
  const navigate = useNavigate();
  var modal = document.getElementById("myModal");
  const Rot = document.getElementById("Btn");


  // useEffect(
  //   () => {
  //     fetch('http://localhost:5000/api/auth/profile',
  //       {
  //         credentials: 'include',
  //       }).then(response => {
  //         response.json().then(userInfo => {

  //         });

  //       });
  //   },
  //   // eslint-disable-next-line
  //   []

  // )



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
  const handlelogout=()=>{
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <div>
      <header>
        <Link to='/' className='logo'>My Blog</Link>
        <nav>

          {
          !localStorage.getItem('token')? <><Link to="/create" className='hover-box'>Create New Post</Link>
           {/* eslint-disable-next-line */}
          <a onclick={handlelogout}>Logout</a>
          <div className="user-img pointer" ><img src={user} alt="" /></div>
          <div className="myBtn" onClick={fun1}  >
            <img id='Btn' onClick={Rotate} alt="" src={logo} />
          </div> </>: <><Link to="/login" className='Button'>Login</Link>
          <Link to="/signup" className='Button'>Register</Link></>
          }
       
           
        </nav>
      </header>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="user pointer hover-box"></div>
          <Link to="/profile" className="edit-profile pointer hover-box">Profile</Link>
          <div className='Button pointer' >Logout</div>
        </div>
      </div>

    </div>
  )
}

export default Header
