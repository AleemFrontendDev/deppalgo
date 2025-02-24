'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "@/public/orange-logo.png"
import Link from 'next/link'
import lines from "@/public/lines.svg"
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeOff } from "react-icons/lu";

// ff7f3f --- light orange color

const Register = () => {

    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className='w-full min-h-screen grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-20 p-5 md:p-10 sm:px-20'>
        <div className='left-side bg-[#f15200] w-full h-full relative rounded-xl p-10 hidden md:block'>
            <h2 className='md:text-3xl lg:text-[40px] font-semibold text-white'>
                Trade, track and manage brokers on DeepAlgo. 
            </h2>
            <Image src={lines} alt='' width={100}  height={100} className='absolute left-0 bottom-0 w-full filter invert opacity-30' />
            <h4 className='text-4xl font-bold text-white absolute bottom-10 capitalize'>
                stocks. forex. bonds. indices. commodities
            </h4>
        </div>
        <div className='right-side sm:w-full lg:w-[500px]'>
            <div className='flex items-end gap-2'>
                <div className='bg-[#f15200] rounded-lg overflow-hidden p-1'>
                    <Image src={logo} alt='Logo' width={50} height={50} className='bg-[#da9b7b] rounded-lg' />
                </div>
                <h2 className='text-[#333] text-3xl font-semibold'>DeepAlgo</h2>
            </div>
            <div className='my-2'>
                <h3 className='text-xl md:text-4xl font-semibold text-[#333] mb-2'>Create an account</h3>
                <p className='text-[12px] sm:text-sm text-gray-500 font-light'>
                Join DeepAlgo and unlock the power of AI-driven trading. Automate strategies, track trends, and stay ahead in the market.
                </p>
            </div>
            <div className='flex flex-col sm:flex-row gap-3 w-full'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="" className='text-[#333] font-medium mb-1 pl-1'>First name</label>
                    <input type="text" placeholder='Enter first name' className='w-full h-[50px] border-2 px-3 rounded-lg outline-[#f15200]'  />
                </div>
                <div className='flex flex-col w-full'>
                    <label htmlFor="" className='text-[#333] font-medium mb-1 pl-1'>Last name</label>
                    <input type="text" placeholder='Enter last name' className='w-full h-[50px] border-2 px-3 rounded-lg outline-[#f15200]' />
                </div>
            </div>
            <div className='flex flex-col w-full my-2'>
                <label htmlFor="" className='text-[#333] font-medium mb-1 pl-1'>Email</label>
                <input type="email" placeholder='Enter email' className='w-full h-[50px] border-2 px-3 rounded-lg outline-[#f15200]' />
            </div>
            <div className='flex flex-col w-full mt-3'>
                <label htmlFor="" className='text-[#333] font-medium mb-1 pl-1'>Password</label>
                <div className='relative'>
                    <input type={showCreatePassword ? 'text' : 'password'} placeholder='Create password' className='w-full h-[50px] border-2 px-3 rounded-lg outline-[#f15200]' />
                    <span className='absolute right-3 bottom-4 w-6 h-6 hover:bg-gray-200 flex items-center justify-center rounded-full cursor-pointer'
                    onClick={() => setShowCreatePassword(!showCreatePassword)}
                    >
                      {showCreatePassword ? <LuEyeOff/> : <IoEyeOutline/> }   
                    </span>
                </div>
            </div>
            <div className='flex flex-col w-full my-2'>
                <label htmlFor="" className='text-[#333] font-medium mb-1 pl-1'>Confirm password</label>
               <div className='relative'>
                <input type={showConfirmPassword ? 'text' : 'password'}  placeholder='Re-Enter password' className='w-full h-[50px] border-2 px-3 rounded-lg outline-[#f15200]' />
                    <span className='absolute right-3 bottom-4 w-6 h-6 hover:bg-gray-200 flex items-center justify-center rounded-full cursor-pointer'
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <LuEyeOff/> : <IoEyeOutline/>}
                    </span>
               </div>            </div>
            <div className='flex items-center gap-2 my-4'>
                <input type="checkbox" name="" id="terms" className='accent-[#f15200] w-5 h-5 rounded-xl border-2' />
                <label htmlFor='terms' className='text-sm select-none'>
                    I agree all the statements included in 
                    <Link href='' className='text-[#f15200] font-semibold ml-1' >Terms od Use</Link>
                </label>
            </div>
            <button className='w-full h-[50px] mb-3 hover:bg-[#f14000de] bg-[#f15200] rounded-lg text-white'>Continue</button>
            <div className='w-full text-center'>
                <Link href={'/login'} className='w-full text-[#f15200] hover:underline' >Already have account</Link>
            </div>
            
            <footer className='mt-10 text-[12px] text-center'>
                Copyright © {new Date().getFullYear()} DeepAlgo All Rights Recerved
            </footer>
        </div>
    </div>
  )
}

export default Register