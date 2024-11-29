import React from 'react'
import { servisesCarddata } from '../utils/servisesCardData'

function ServisesCard({ title }) {
    return (
        <div className='bg-[#F5FBFF]'>
            <div className='lg:p-16 p-6 '>
                {title && <h1 className='lg:text-5xl text-3xl text-center mt-12 mb-16 text-[#001D38]'>Services We Offer</h1>}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 rounded-lg'>
                    {servisesCarddata?.map((item) => (
                        <div key={item.id} className='overflow-hidden transition-all'>
                            <img src={item?.img} alt="img" className='hover:scale-105 transition-all' />
                            <h1 className='text-2xl font-semibold text-[#001D38] mt-4 cursor-pointer hover:underline'>{item.name}</h1>
                            <p className='text-xl text-[#919191]'>{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ServisesCard
