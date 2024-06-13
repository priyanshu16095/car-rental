import React from 'react'

function Why() {
    return (
        <div className='how center-both'>

            <div className="how__container container flex-v gap-xl">
                <div className="how__header flex-c gap-xs">
                    <p className="title">How Zipcar works?</p>
                    <p className='info'>Reserve wheels when you want them, by the hour or day, and only pay for the time you drive.</p>
                </div>

                <div className="how__items flex-h gap">
                    <div className="how__item flex-v gap-xs">
                        <div className="box"></div>
                        <div>
                            <p className="font">Join in minutes</p>
                            <p className='info'>Apply online with a valid driver's license. Most people are approved instantly and can book a trip within minutes.</p>
                        </div>
                    </div>
                    <div className="how__item flex-v gap-xs">
                        <div className="box"></div>
                        <div>
                            <p className="font">Drive on demand</p>
                            <p className='info'>Book a round trip car by the hour or day. Use our car sharing app to unlock and lock during your trip. </p>
                        </div>
                    </div>
                    <div className="how__item flex-v gap-xs">
                        <div className="box"></div>
                        <div>
                            <p className="font">Return</p>
                            <p className='info'>When you're done, park the car in the same location you picked it up from, then end the trip with the app.</p>
                        </div>
                    </div>
                </div>

                <div className="flex-c"><button className="btn">View Pricing</button></div>
            </div>

        </div>
    )
}

export default Why
