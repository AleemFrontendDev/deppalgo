'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import lines from "@/public/lines.svg"
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeOff } from "react-icons/lu";
import { RxCross2 } from "react-icons/rx";


interface PopUpModalProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const PopUpModal: React.FC<PopUpModalProps> = ({ isOpen, setIsOpen }) => {
    
    const [showCreatePassword, setShowCreatePassword] = useState(false);

  return (
    <div className={`fixed top-0 left-0 items-center justify-center backdrop-filter backdrop-blur-sm z-50 w-full h-screen bg-[#fafaf9dd] ${isOpen ? 'flex' : 'hidden' }`}
    onClick={() => setIsOpen(false)}
    >
        <div className='relative w-[450px] border-2 p-5 rounded-lg '
        onClick={(e) => e.stopPropagation() }
        >
            <span className='absolute top-2 right-3 bg-[#f15200] hover:bg-[#f14000de] w-6 h-6 rounded-full flex items-center justify-center cursor-pointer'
            onClick={() => setIsOpen(false)}
            >
                <RxCross2/>
            </span>
            <div className='hello absolute left-0 bottom-0 -z-10 bg-[#f14000de] w-full h-16'>
                <Image src={lines} alt='' width={100}  height={100} className='w-full h-full object-cover filter invert opacity-50' />
            </div>
            <div className='mb-10'>
                <h2 className='text-3xl font-medium text-[#333]'>Connect with Oanda</h2>
                <p className='text-[#333] text-[12px] font-light'>Lorem, ipsum dolor sit amet consectetur adipisicing elit, sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex flex-col w-full my-2'>
                <label htmlFor="" className='text-[#333] font-medium mb-1 pl-1'>API Key</label>
                <input type="text" placeholder='Enter API Key' className='w-full h-[50px] border-2 px-3 rounded-lg outline-[#f15200]' />
            </div>
            <div className='flex flex-col w-full mt-3'>
                <label htmlFor="" className='text-[#333] font-medium mb-1 pl-1'>Password</label>
                <div className='relative'>
                    <input type={showCreatePassword ? 'text' : 'password'} placeholder='Enter password' className='w-full h-[50px] border-2 px-3 rounded-lg outline-[#f15200]' />
                    <span className='absolute right-3 bottom-4 w-6 h-6 hover:bg-gray-200 flex items-center justify-center rounded-full cursor-pointer'
                    onClick={() => setShowCreatePassword(!showCreatePassword)}
                    >
                        {showCreatePassword ? <LuEyeOff/> : <IoEyeOutline/> }   
                    </span>
                </div>
            </div>
            <button className='w-full h-[50px] my-5 hover:bg-[#f14000de] bg-[#f15200] rounded-lg text-white'>Done</button>
       </div>
    </div>
  )
}

export default PopUpModal