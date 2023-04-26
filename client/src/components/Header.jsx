import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import logo from '../img/60995.png'
import user from '../img/User image.png'

const Header = () => {
  const navigate = useNavigate();
  const [modaldisplay, setmodaldisplay] = useState(false)
  // const fun1 = () => {
  //   const modal = document.getElementById("myModal");
  //   const dis = modal.style.display;

  //   const Rot = document.getElementById("Btn");
  //   Rot.style.transform = "rotate(180deg)";
  //   if (dis === "block" || dis === "") {
  //     modal.style.display = "none";

  //   }

  //   if (dis === "none" || dis === "") {
  //     modal.style.display = "block";
  //   }
  // }
  // const Rotate = () => {
  //   const Rot = document.getElementById("Btn");
  //   Rot.style.transform = "rotate(180deg)";
  // }


  const handlelogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  }
  return (
    <div>
      <header>
        <Link to='/' className='logo'>My Blog</Link>
        <div className='navbar'>

          {localStorage.getItem('token') ? <><Link to="/create" className='hover-box'>Create New Post</Link>
            <div className="user-img pointer" ><img src={user} alt="" /></div>
            <div className="myBtn" id='myBtn' onClick={() => setmodaldisplay(!modaldisplay)} >
              <img id='Btn' alt="" src={logo} />
            </div> </> : <> <Link to="/login" className='Button'>Login</Link>
            <Link to="/signup" className='Button'>Register</Link> </>
          }


        </div>
        {modaldisplay && <div id="myModal" className="modal">
          <div className="modal-content">
            <div className="user pointer hover-box"></div>
            <Link to="/profile" className=" Button  pointer">Profile</Link>
            <div className='Button pointer' onClick={handlelogout}>Logout</div>
          </div>
        </div>}
      </header>


    </div>
  )
}

export default Header
