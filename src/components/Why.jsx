import React from 'react'

function Why() {
    return (
        <div className='why center-both'>

            <div className="why__container container flex-v gap-xl">

                <div className="why__header flex-v gap-xs">
                    <p className="title">Why Rentcar?</p>
                    <p className='info'>Reserve wheels when you want them, by the hour or day, and only pay for the time you drive.</p>
                </div>

                <div className="why__items flex-h gap">
                    <div className='why__item flex-v gap-xs'>
                        <div className="box"></div>
                        <div>
                            <p className="font">Save Money</p>
                            <p className='info'>Zipcar covers gas, insurance options,* parking, and maintenance for a potential savings of <span className="color">$1000/month</span> over car ownership.</p>
                        </div>
                    </div>
                    <div className='why__item flex-v gap-xs'>
                        <div className="box"></div>
                        <div>
                            <p className="font">Cars near you</p>
                            <p className='info'>Zipcars live in your local neighborhood, and in cities, campuses and airports across the globe.</p>
                        </div>
                    </div>
                    <div className='why__item flex-v gap-xs'>
                        <div className="box"></div>
                        <div>
                            <p className="font">Drive on-demand</p>
                            <p className='info'>No waiting in line at the counter. (No need to even search for your keys!) Just book and go.</p>
                        </div>
                    </div>
                    <div className='why__item flex-v gap-xs'>
                        <div className="box"></div>
                        <div>
                            <p className="font">Go beyond public transport</p>
                            <p className='info'>Zipcar is the perfect complement to the bus and train—whether it’s local errands or weekend adventures.</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Why
