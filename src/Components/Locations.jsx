import React from 'react'
import mateLogo from '../assets/mateLogo.svg'
function Locations() {
  return (
    <div className='lg:px-16 lg:py-24 px-8 py-12 bg-[#F5FBFF] grid grid-cols-2'>
      <div>
        <img className='w-28 mb-6' src={mateLogo} alt="" />
        <div className='flex gap-5'>
          <i className="fa fa-phone-alt text-3xl text-green-500"></i>
          <i className="fa fa-envelope text-3xl text-red-500"></i>
          <i className="fa fa-phone-alt text-3xl text-green-500"></i>
        </div>

      </div>

      <div className='grid grid-cols-2'>

        <div> <i className="fa fa-map-marker-alt text-orange-500 text-xl"></i>

          <span className='text-2xl '>Locations</span>
          <p className=''>Namangan It park</p>
        </div>
        <div> <i className="fa fa-map-marker-alt text-orange-500 text-xl"></i>

          <span className='text-2xl '>Locations</span>
          <p className=''>Namangan It park</p>
        </div>
      </div>
    </div>
  )
}

export default Locations
