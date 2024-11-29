import React from 'react'
import WhyChoose from '../Components/WhyChoose'
import Secure from '../Components/Secure'
import Locations from '../Components/Locations'
import Footer from '../Components/Footer'
import GeetFre from '../Components/GeetFre'
import Navbar from '../Components/Navbar/Navbar'
import { TransportData } from './TrasnPortData'

function About() {
    return (
        <>
            < Navbar/>
            <div className='pt-20'>
                <div className='pt-20 h-[80vh] bg-slate-500 bgserVices relative overflow-hidden flex justify-center items-center text-white '>
                    <h1 className='text-5xl font-semibold text-center z-[900]'>About Us</h1>
                </div>
                <WhyChoose/>
                <Secure/>
                <div className='lg:py-24 lg:px-16 py-12 p-8 grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 '>
                {TransportData?.map((item) => (
                    <div key={item.id} className='space-y-3'>
                        <div className=''>{item.logo}</div>
                        <h1 className='text-3xl text-[#001D38]'>{item.name}</h1>
                        <h1 className='text-[#A3ADB8]'>{item.desc}</h1>
                    </div>
                ))}
            </div>
                <GeetFre/>
                <Locations/>
                <Footer/>
            </div>
        </>
    )
}

export default About
