import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='navbar'>

            <div className="navbar__container container flex-s">

                <div className="navbar__links flex-h gap">
                    <p className="link">How it works?</p>
                    <p className="link">Pricing</p>

                    <div className='link__more flex-v'>
                        <div className="flex-h">
                            <p className="link">More</p>
                            <span onClick={() => setIsOpen(!isOpen)} className='link__icon icon'>{isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}</span>
                        </div>
                        <div className={`${!isOpen ? 'hide' : 'link__links flex-v'}`}>
                            <p className="link">Contact Us</p>
                            <p className="link">About Us</p>
                            <p className="link">Terms</p>
                        </div>
                    </div>

                </div>

                <h2>zipcar</h2>

                <div className="navbar__links flex-h gap">
                    <p className="link">Help</p>
                    <p className="link">Sign in</p>
                    <p className="link">Join</p>
                </div>

            </div>

        </div>
    )
}

export default Navbar
