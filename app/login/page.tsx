'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import logo from "@/public/orange-logo.png"
import lines from "@/public/lines.svg"
import { IoEyeOutline } from "react-icons/io5";
import { LuEyeOff } from "react-icons/lu";
import Link from 'next/link'

interface LoginProps {
    email: string;
    password: string;
}


const Login = () => {

    const router = useRouter();
    const [showCreatePassword, setShowCreatePassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        if (!email || !password) {
            alert('Please fill in all fields.');
            return;
        }
        if (email === 'test@deepalgo.com' && password === 'tests123') {
            router.push('/dashboard');
        } else {
            alert('Invalid email or password.');
        }
    }

    return (
        <div className='w-full min-h-screen  items-center justify-center p-5'>
           <div className='w-full flex flex-col gap-2 items-center justify-center py-2'>
                <div className='flex items-center gap-2'>
                    <div className='bg-[#f15200] rounded-lg overflow-hidden p-1'>
                        <Image src={logo} alt='Logo' width={70} height={50} className='bg-[#da9b7b] rounded-lg' />
                    </div>
                    <h2 className='text-[#333] text-2xl font-semibold'>DeepAlgo</h2>
                </div>
                <p className='font-light text-[#333] text-sm px-5 text-center'>
                    Automated. Intelligent. Profitable. DeepAlgo Trading
                </p>
           </div>

           <div className='w-full h-full flex items-center justify-center'>
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
                        <input 
                        type="email" 
                        placeholder='Enter email' 
                        className='w-full h-[50px] border-2 px-3 rounded-lg outline-[#f15200]' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className='flex flex-col w-full mt-3'>
                        <label htmlFor="" className='text-[#333] font-medium mb-1 pl-1'>Password</label>
                        <div className='relative'>
                            <input 
                            type={showCreatePassword ? 'text' : 'password'} 
                            placeholder='Enter password' 
                            className='w-full h-[50px] border-2 px-3 rounded-lg outline-[#f15200]' 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className='absolute right-3 bottom-4 w-6 h-6 hover:bg-gray-200 flex items-center justify-center rounded-full cursor-pointer'
                            onClick={() => setShowCreatePassword(!showCreatePassword)}
                            >
                                {showCreatePassword ? <LuEyeOff/> : <IoEyeOutline/> }   
                            </span>
                        </div>
                    </div>
                    <button 
                    className='w-full h-[50px] my-5 hover:bg-[#f14000de] bg-[#f15200] rounded-lg text-white'
                    onClick={handleLogin}
                    >
                    Login
                    </button>
                    <div className='w-full text-center mb-3'>
                        <Link href={'/register'} className='w-full text-[#f15200] hover:underline' >Create new account</Link>
                    </div>
            </div>
           </div>
           <footer className='mt-10 text-[12px] text-center'>
                Copyright © {new Date().getFullYear()} DeepAlgo All Rights Recerved
            </footer>
        </div>
    )
}

export default Login
