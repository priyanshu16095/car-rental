import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function FAQ() {
    const data = [
        { question: 'How do I join Rentcar?', answer: "Apply online with a valid driver's license and download our personal car rental app. Most people are approved instantly and rent a car within minutes. Learn more." },
        { question: 'How much does Rentcar cost?', answer: "Rentcar memberships start at $9 a month or $90 a year. Reserve cars by the hour or by the day. Gas, insurance options,* and 180 miles per day are all included in membership. Other fees, such as a young driver fee, may apply. Price it out." },
        { question: 'How soon can I drive with Rentcar?', answer: "First, sign up for membership. Most members are approved instantly and can book their first daily or hourly car rental within minutes but in some cases, it may take a little longer to check your driving record. As soon as you're approved, you can book a Zipcar near you and use our car rental app to unlock and lock during your trip. We'll also mail you a Zipcard—an access card to any Zipcar vehicle you reserve. It arrives in 5-7 business days. Until it does, it's better to book cars and trips in places where your phone has service." },
        { question: 'Are there Rentcars near me?', answer: "Rentcars live in hundreds of cities and towns globally. Type your address in the search bar below to find Zipcars near you. When booking a reservation, you can choose a car type to fit your needs or your mood—from compact sedans to larger cars such as cargo vans and SUVs, and even luxury car rentals, we’ve got you covered." },
        { question: 'How many miles are included?', answer: "No matter where or how long you drive, 180 miles are included per day with most membership plans. Any overage is billed at $.58 per mile. Learn more." },
        { question: 'How does Rentcar insurance coverage work?', answer: "All members in good standing have secondary third party auto liability and, where required, Personal Injury Protection (PIP) or “no fault” coverage. A $1,000 damage fee may apply which you can reduce or eliminate by buying an optional damage protection waiver. More details." },
    ]

    const [selected, setSelected] = useState(-1)
    function handleClick(index) {
        if (selected === index) {
            setSelected(-1)
            return
        }
        setSelected(index)
    }

    return (
        <div className='faq center-both'>
            <div className="faq__container container flex-v gap-xl">
                <p className="title flex-c">Frequently Asked Questions</p>

                <div className="flex-v gap">
                    {data && data.map((item, index) => {
                        return (
                            <div className="faq__accordion flex-v gap-xs">
                                <div className="faq__question pointer flex-s" onClick={() => handleClick(index)}>
                                    <p className='font'>{item.question}</p>
                                    <KeyboardArrowDownIcon className='icon' />
                                </div>
                                <p>{selected === index && data[selected]?.answer}</p>
                            </div>
                        )
                    })}
                </div>

                <div className="flex-c"><button className="btn">More Questions</button></div>
            </div>
        </div>
    )
}

export default FAQ
