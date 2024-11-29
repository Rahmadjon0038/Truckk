import React from 'react'
import ServisesCard from '../Components/servisesCard'
import { TransportData } from './TrasnPortData'
import Secure from '../Components/Secure'
import WhyChoose from '../Components/WhyChoose'
import Locations from '../Components/Locations'
import Footer from '../Components/Footer'
import GeetFre from '../Components/GeetFre'
import Navbar from '../Components/Navbar/Navbar'

function Home() {

    return (
        <>
            <Navbar />
            <div className='pt-20 bg h-[120vh] flex justify-center items-center overflow-hidden relative'>
                <div className='text-white text-center z-[900] px-4'>
                    <p className='text-2xl font-semibold'>For Personal & Business</p>
                    <h1 className='font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-10'>
                        Global Logistic Service <br /> For Business
                    </h1>
                    <button className='bg-orange-500 text-white px-8 py-4 mt-6 font-[500] border hover:bg-transparent transition-all hover:border hover:text-orange-500 border-orange-500'>
                        Our Services
                    </button>
                </div>
            </div>
            <div className='lg:py-24 lg:px-16 py-12 p-8 grid lg:grid-cols-3 gap-6 md:grid-cols-2 grid-cols-1 '>
                {TransportData?.map((item) => (
                    <div key={item.id} className='space-y-3'>
                        <div className=''>{item.logo}</div>
                        <h1 className='text-3xl text-[#001D38]'>{item.name}</h1>
                        <h1 className='text-[#A3ADB8]'>{item.desc}</h1>
                    </div>
                ))}
            </div>
            <ServisesCard />
            <Secure/>
            <WhyChoose/>
            <GeetFre/>
            <Locations/>
            <Footer/>
        </>
    )
}

export default Home
