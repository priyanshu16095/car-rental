import React from 'react'

function Testimonials() {
    return (
        <div className='testmonials'>

            <div className="testmonials__container container flex-v gap-xl">

                <div className="testimonials__header flex-v gap-xs">
                    <p className='font'>Review by people</p>
                    <p className="title">Client's Testimonials</p>
                    <p className='info'>Discover the positive impact we've made on the our clients by reading through their testimonials. Our clients have experinced our service and results, and they're eager to share their positive experiences with you.</p>
                </div>

                <div className="testimonials__cards flex-s padding gap">
                    <div className="testimonials__card card flex-v gap-xs">
                        <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                        <p className="font">Harry Potter</p>
                    </div>
                    <div className="testimonials__card flex-v gap-xs card">
                        <p>"We rented a car from this website and had an amazing experience! The booking was easy and the rental rates were very affordable. "</p>
                        <p className="font">Ron Weesly</p>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Testimonials
