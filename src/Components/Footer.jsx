import React from 'react'

function Footer() {
    return (
        <div >

            <div className='grid grid-cols-4 lg:px-16 lg:py-24'>
                {/* {footerData?.map((item) => ( */}
                    <div  className='space-y-2'>
                        <h1 className='text-[#001D38] text-xl font-semibold mb-6'>Services</h1>
                        <p className='text-[#666566] hover:text-orange-500 cursor-pointer '>ocean</p>
                        {/* <p className='text-[#666566] hover:text-orange-500 cursor-pointer '>{item.link2}</p>
                        <p className='text-[#666566] hover:text-orange-500 cursor-pointer '>{item.link3}</p>
                        <p className='text-[#666566] hover:text-orange-500 cursor-pointer '>{item.link4}</p> */}
                    </div>
                {/* ))} */}
                <div>
                    <h1 className='text-[#001D38] text-xl font-semibold mb-6'>Subscribe</h1>
                    <div className='border border-black rounded-full p-2'>
                        <input type="text" placeholder='Enter your email' className='p-2 outline-none' />
                        <button className='text-white bg-orange-500 py-2 px-1 text-[14px] rounded-full'>Subscribe</button>
                    </div>
                    <p className='mt-2 text-[#666566]'>Esteem spirit temper too say adieus who direct esteem esteems luckily.</p>
                </div>

            </div>
            <hr />

            <p className='text-[#666566] py-6 text-center'>Copyright ©2024 Etamin</p>
        </div>
    )
}

export default Footer
