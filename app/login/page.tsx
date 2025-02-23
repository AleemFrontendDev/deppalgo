'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import logo from "@/public/orange-logo.png"
import lines from "@/public/lines.svg"
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeOff } from "react-icons/lu";
import Link from 'next/link'

const Login = () => {

    const [showCreatePassword, setShowCreatePassword] = useState(false);

  return (
    <div className='w-full h-screen flex items-center justify-center'>
       <div className='fixed top-0 w-full h-[100px] flex items-center justify-center'>
            <div className='flex items-center gap-2'>
                <div className='bg-[#f15200] rounded-lg overflow-hidden p-1'>
                    <Image src={logo} alt='Logo' width={70} height={50} className='bg-[#da9b7b] rounded-lg' />
                </div>
                <h2 className='text-[#333] text-2xl font-semibold'>DeepAlgo</h2>
            </div>
       </div>

       <div className='relative w-[450px] border-2 p-5 rounded-lg '>
            <div className='hello absolute left-0 bottom-0 -z-10 bg-[#f14000de] w-full h-16'>
                <Image src={lines} alt='' width={100}  height={100} className='w-full h-full object-cover filter invert opacity-50' />
            </div>
            <div className='mb-10 text-center'>
                <h2 className='text-3xl text-center font-medium text-[#333]'>Welcome to DeepAlgo</h2>
                <p className='text-[#333] font-light'>Login to continue</p>
            </div>
            <div className='flex flex-col w-full my-2'>
                <label htmlFor="" className='text-[#333] font-medium mb-1 pl-1'>Email</label>
                <input type="email" placeholder='Enter email' className='w-full h-[50px] border-2 px-3 rounded-lg outline-[#f15200]' />
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
            <button className='w-full h-[50px] my-5 hover:bg-[#f14000de] bg-[#f15200] rounded-lg text-white'>Login</button>
            <div className='w-full text-center mb-3'>
                <Link href={'/register'} className='w-full text-[#f15200] hover:underline' >Create new account</Link>
            </div>
       </div>
       <footer className='mt-10 text-[12px] text-center fixed bottom-5'>
            Copyright © {new Date().getFullYear()} DeepAlgo All Rights Recerved
        </footer>
    </div>
  )
}

export default Login