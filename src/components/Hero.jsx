import React from 'react'
import Book from './Book'
import CarRentalIcon from '@mui/icons-material/CarRental';

function Hero() {
  return (
    <div className='hero center-both flex-v gap-xl'>

      <div className="hero__container container">
        <div className="hero__top flex-h">
          <div className="hero__left flex-v gap-xl">
            <div className="flex-v gap-xs">
              <p className="font">Plan your trip now</p>
              <p className="hero__title">Save <span className="color">big</span> with our car rental</p>
              <p className='info'>Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.</p>
            </div>
            <div className="hero__btns flex-h gap">
              <button className="btn icon__btn"><CarRentalIcon className='icon' />Book Ride</button>
              <button className="btn">Learn More</button>
            </div>
          </div>

          <div className="hero__right">
            <img src="hero_car.png" width={'700rem'} />
          </div>
        </div>
        {/* <Book /> */}
      </div>


    </div>
  )
}

export default Hero
