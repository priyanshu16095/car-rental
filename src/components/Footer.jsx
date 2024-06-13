import React from 'react'

function Footer() {
    return (
        <div className='footer'>

            <div className="footer__container container gap-xl">

                <div className="footer__box1 flex-v gap">
                    <p className="font">CAR Rental</p>
                    <p className='info'>We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.</p>
                    <div className='flex-v gap-xs'>
                        <p>+91-9027644034</p>
                        <p>priyanshu16095@gmail.com</p>
                    </div>
                </div>

                <div className="footer__part flex-s">
                    <div className="footer__box flex-v gap">
                        <p className="font">Company</p>
                        <div className="flex-v gap-xs">
                            <p>New York</p>
                            <p>Carrers</p>
                            <p>Mobile</p>
                            <p>Blog</p>
                            <p>How we work</p>
                        </div>
                    </div>

                    <div className="footer__box flex-v gap">
                        <p className="font">Working Hours</p>
                        <div className="flex-v gap-xs">
                            <p>Mon - Fri: 9:00AM - 9:00PM</p>
                            <p>Sat: 9:00AM - 19:00PM</p>
                            <p>Sun: Closed</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Footer
