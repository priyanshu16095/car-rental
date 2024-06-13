import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>

            <div className="navbar__container container flex-s">
                <div className="navbar__links flex-h gap">
                    <p className="link">How it works?</p>
                    <p className="link">Pricing</p>
                    <p className="link">More</p>
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
