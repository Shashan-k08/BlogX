import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

const Layout = () => {
  return (
    <div>
     { !localStorage.getItem('token') ?
      <main>
        
      <Outlet/>
      </main>:
      <main>
        
        <Header/>
      <Outlet/>
      </main>
      }
        
    </div>
  )
}

export default Layout