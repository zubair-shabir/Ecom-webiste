import React from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import CartCountBadge from './CartCountBadge'


const Navbar = () => {
  return (
    <div className="container hidden lg:block">
            <nav className="flex items-center justify-between  pt-8 ">
                <h1 className="text-4xl">Logo</h1>
                <div className="relative w-full max-w-[500px]">
                    <input
                     type="text"
                    className="bg-[#f2f3f5] rounded-[30px] border-none outline-none px-6 py-3 w-full"
                    placeholder='Search Products...'  />

                    <BsSearch className='absolute top-0 right-0 mt-4 mr-5 text-gray-500' size={20}/>
                </div>
                    <div className="flex gap-4">
                        <div className="icon_wrapper">
                        <AiOutlineUser />
                        </div>
                        <div className="icon_wrapper relative">
                        <AiOutlineShoppingCart />
                        <CartCountBadge size="w-[25px] h-[25px]"/>
                        </div>
                    </div>
                {/* AiOutlineUser */}

            </nav>
    </div>
  )
}

export default Navbar