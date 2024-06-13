import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../style.css'

function Cookies() {
    const[hideCookies, setHideCookies] = useState(false)
    console.log(hideCookies)
    return (
        <div className={`${hideCookies ? 'cookies__hide' : 'cookies padding flex-s'}`}>

            <p className='cookies__desc'>We use cookies, pixels and other technology to collect information you provide to us and information about your interaction with our website and/or mobile app to enhance site navigation, analyze site usage, and assist in our marketing efforts. For more information, please see our Privacy Notice.</p>

            <div className='cookies__btns flex-h gap'>
                <button className="btn-outlined">Manage Cookies Settings</button>
                <CloseIcon className='icon' onClick={() => setHideCookies(true)} />
            </div>

        </div>
    )
}

export default Cookies
