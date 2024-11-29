import React from 'react'
import aboutImg from '../assets/about.png.webp'
// import CountUp from 'react-countup';
function WhyChoose() {
    return (
        <div className='lg:px-16 lg:py-24 px-6 py-12'>

            <div className=' grid lg:grid-cols-2 items-center'>
                <div>
                    <img className='shadow-[10px_10px_1px_#EA580C]' src={aboutImg} alt="about" />
                </div>
                <div className='space-y-6 text-[18px]'>
                    <h1 className='text-5xl text-[#2C2C2C]'>Why Choose Us?</h1>
                    <p className='text-[#555555]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt.</p>
                    <div className='text-[#727272]'>
                        <p>Apartments frequently or motionless.</p>
                        <p>Duis aute irure dolor in reprehenderit in voluptate.</p>
                        <p> Voluptatem quia voluptas sit aspernatur.</p>
                    </div>
                    <button className='px-8 py-3 font-[500] border-orange-500 text-orange-500 border hover:text-white hover:bg-orange-500 transition-all max-md:hidden'>
                        About us
                    </button>
                </div>
            </div>

            <div className='mt-16 bg-[#F7FDFF] p-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1  '>
                <div className='space-y-3'>
                    <div className='text-4xl font-semibold text-orange-500 '>
                        {/* <CountUp start={0} end={43} duration={3} separator="" />+ */}
                        43
                    </div>
                    <p className='text-xl text-[#596672]'>Countries Covered</p>
                </div>
                <div className='space-y-3'>
                    <div className='text-4xl font-semibold text-orange-500 '>
                        {/* <CountUp start={0} end={97} duration={3} separator="" />+ */}
                        97
                    </div>
                    <p className='text-xl text-[#596672]'> Business Success</p>
                </div>
                <div className='space-y-3'>
                    <div className='text-4xl font-semibold text-orange-500 '>
                        {/* <CountUp start={0} end={2342} duration={3} separator="" />+ */}
                    2342
                    </div>
                    <p className='text-xl text-[#596672]'>Happy Client</p>
                </div>
                <div className='space-y-3'>
                    <div className='text-4xl font-semibold text-orange-500 '>
                        {/* <CountUp start={0} end={4500} duration={3} separator="" />+ */}
                        4500
                    </div>
                    <p className='text-xl text-[#596672]'> Business Done</p>
                </div>
            </div>
        </div>

    )
}

export default WhyChoose
