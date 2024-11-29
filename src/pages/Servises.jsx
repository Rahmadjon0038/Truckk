import React from 'react'
import ServisesCard from '../Components/servisesCard'
import Secure from '../Components/Secure'
import WhyChoose from '../Components/WhyChoose'
import Footer from '../Components/Footer'
import Locations from '../Components/Locations'
import GeetFre from '../Components/GeetFre'
import Navbar from '../Components/Navbar/Navbar'

function Services() {
  return (
    <>
      <Navbar />
      <div>
        <div className='pt-20 h-[80vh] bg-slate-500 bgserVices relative overflow-hidden flex justify-center items-center text-white '>
          <h1 className='text-5xl font-semibold text-center z-[900]'>Our Services</h1>
        </div>
        <ServisesCard />
        <Secure />
        <WhyChoose />
        <GeetFre />
        <Locations />
        <Footer />
      </div>
    </>
  )
}

export default Services
