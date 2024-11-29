import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import metaLogo from '../../assets/mateLogo.svg'
import { navData } from '../../utils/navData'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='border p-2 px-12 flex justify-between items-center bg-white fixed w-full z-[999]'>
            <img src={metaLogo} alt="logo" className='lg:w-28 w-20' />
            <nav className='hidden md:block'>
                <ul className='flex items-center gap-16'>
                    {navData?.map((item) => (
                        <NavLink to={item?.to} className="font-[500] block cursor-pointer" key={item.id}>{item?.name}</NavLink>
                    ))}
                </ul>
            </nav>

            <button className='px-8 py-3 font-[500] border-orange-500 text-orange-500 border hover:text-white hover:bg-orange-500 transition-all max-md:hidden'>
                Get started
            </button>

            <div className='md:hidden py-2'>
                <button onClick={toggleMenu} className='text-orange-500 -mt-2 text-2xl'>
                    {isMenuOpen ?
                        <i className="fas fa-times"></i>
                        :
                        <i className="fas fa-bars"></i>
                    }


                </button>
            </div>

            {isMenuOpen && (
                <nav className='absolute top-10 left-0 right-0 bg-white py-4 md:hidden'>
                    <ul className='flex flex-col gap-4 items-center'>
                        {navData?.map((item) => (
                            <NavLink to={item?.to} className="font-[500] block cursor-pointer" key={item.id}>{item?.name}</NavLink>
                        ))}
                    </ul>
                    <div className="mt-4 text-center">
                        <button className='px-8 py-3 font-[500] border-orange-500 text-orange-500 border hover:text-white hover:bg-orange-500 transition-all'>
                            Get started
                        </button>
                    </div>
                </nav>
            )}
        </div>
    )
}

export default Navbar
