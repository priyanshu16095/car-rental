import React from 'react'

function Book() {
    return (
        <div className='book container padding flex-v gap'>
            <p className="font">Book a Car</p>

            <div className="book__inputs flex-s gap-xs">
                <div className="book_input flex-v gap-xs">
                    <label className='label'>Select your car type</label>
                    <input type="text" className='inp' placeholder='Ex: Sedan' />
                </div>
                <div className="book_input flex-v gap-xs">
                    <label className='label'>Pick up</label>
                    <input type="text" className='inp' placeholder='Noida' />
                </div>
                <div className="book_input flex-v gap-xs">
                    <label className='label'>Drop of</label>
                    <input type="text" className='inp' placeholder='Greater Noida' />
                </div>
                <div className="book_input flex-v gap-xs">
                    <label className='label'>Pick-up</label>
                    <input type="text" className='inp' placeholder='dd-mm-yyyy' />
                </div>
                <div className="book_input flex-v gap-xs">
                    <label className='label'>Drop-of</label>
                    <input type="text" className='inp' placeholder='dd-mm-yyyy' />
                </div>
                <div className="flex-v gap-xs">
                    <label></label>
                    <button className="btn search__btn">Search</button>
                </div>
            </div>

        </div>
    )
}

export default Book
