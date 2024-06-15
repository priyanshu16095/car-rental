import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';

function ResponsiveNavbar() {
  return (
    <div className='resnavbar'>
        <div className="resnavbar__container container flex-s">
        <h2>zipcar</h2>
        <MenuIcon className='icon' />
        </div>
    </div>
  )
}

export default ResponsiveNavbar
