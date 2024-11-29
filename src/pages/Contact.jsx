import React from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar/Navbar'

function Contact() {
    return (
        <>
            <Navbar />
            <div className='pt-20'>
                <div className='pt-20 h-[80vh] bg-slate-500 bgserVices relative overflow-hidden flex justify-center items-center text-white '>
                    <h1 className='text-5xl font-semibold text-center z-[900]'>Contact Us</h1>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Contact
