import React from 'react'
import Cookies from './Cookies'
import Navbar from './Navbar'
import Hero from './Hero'
import FAQ from './FAQ'
import How from './How'
import Why from './Why'
import Save from './Save'
import Testimonials from './Testimonials'
import Book from './Book'
import Footer from './Footer'
import ResponsiveNavbar from './ResponsiveNavbar'

function Home() {
    return (
        <div className='home flex-v'>
            <div className="navbar__res"><Navbar /></div>
            <div className="resnavbar__res"><ResponsiveNavbar /></div>
            <Hero />
            <Book />
            <How />
            <Save />
            <Why />
            <Testimonials />
            <FAQ />
            <Cookies />
            <Footer />
        </div>
    )
}

export default Home
