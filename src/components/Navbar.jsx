import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch, AiOutlineClose, AiFillTag } from 'react-icons/ai';
import { BsFillCartFill, BsFillSaveFill } from 'react-icons/bs';
import {TbTruckDelivery} from 'react-icons/tb'
import {FaUserFriends, FaWallet} from 'react-icons/fa'
import {MdFavorite, MdHelp} from 'react-icons/md'
const Navbar = () => {
    const [nav, setNav] = useState(false)
    return (
        <div className=' max-w [1640 px] bg-red-500  mx-auto flex justify-between items-center p-4'>
            {/*left side*/}
            <div className='flex items-center'>
                <div  onClick={()=> setNav(!nav)} className=' bg-orange-500 cursor-pointer'>
                    <AiOutlineMenu size={30} />
                </div>
                <h1 className=' text-2xl sm:text-3xl lg:text-4xl px-2 text-lime-400'>
                    <span className='font-bold'>Best Eats</span>
                </h1>
                <div className=' hidden lg:flex items-center rounded-full bg-violet-500 p-1 text[14px]'>
                    <p className='bg-emerald-400 text-red-500 font-bold rounded-full p-2'>Delivery</p>
                    <p className='p-2 font-bold text-yellow-300'>Pickup</p>
                </div>
            </div>
            {/* Search Input */}
            <div className=' bg-amber-500 rounded-full font-bold text-blue-500 flex items-center px-2 w-[200px] sm:w-[400px] lg:w-[500px]'>
                <AiOutlineSearch size={25} />
                <input className=' bg-transparent p-2 w-full focus:outline-none ' type="text" placeholder='Search foods' />
            </div>
            {/* Cart button */}
            <button className=' bg-blue-600 text-yellow-300 hidden md:flex items-center py-2 rounded-full'>
                <BsFillCartFill size={20} className='mr-2' /> Cart
            </button>

            {/* Mobile Menu */}
            {/* Overlay */}
            {nav ? <div className=' bg-pink-400/80 fixed w-full h-screen z-10 top-0 left-0'></div> : ''}

            {/* Side drawer menu */}
            <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen  bg-sky-400 z-10 duration-300' : 
            'fixed top-0 left-[-100%] w-[300px] h-screen  bg-green-300 z-10 duration-300'}>
                <AiOutlineClose
                    onClick={() => setNav(!nav)}
                    size={30}
                    className='absolute right-4 top-4 cursor-pointer'
                />
                <h2 className='text-2xl p-4'>
                    Best <span className='font-bold'>Eats</span>
                </h2>
                <nav>
                    <ul className='flex flex-col p-4 text-rose-600 font-bold'>
                        <li className='text-xl py-4 flex'><TbTruckDelivery size={25} className='mr-4' /> Orders</li>
                        <li className='text-xl py-4 flex'><MdFavorite size={25} className='mr-4' /> Favorites</li>
                        <li className='text-xl py-4 flex'><FaWallet size={25} className='mr-4' /> Wallet</li>
                        <li className='text-xl py-4 flex'><MdHelp size={25} className='mr-4' /> Help</li>
                        <li className='text-xl py-4 flex'><AiFillTag size={25} className='mr-4' /> Promotions</li>
                        <li className='text-xl py-4 flex'><BsFillSaveFill size={25} className='mr-4' /> Best Ones</li>
                        <li className='text-xl py-4 flex'><FaUserFriends size={25} className='mr-4' /> Invite Friends</li>
                    </ul>
                </nav>
            </div>

        </div>
    )
}

export default Navbar