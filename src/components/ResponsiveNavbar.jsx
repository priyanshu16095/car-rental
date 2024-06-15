import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar'

function ResponsiveNavbar() {
  return (
    <div className='resnavbar'>
        <div className="resnavbar__container container flex-s">
        <h2>rentcar</h2>
        <Sidebar />
        </div>
    </div>
  )
}

export default ResponsiveNavbar
