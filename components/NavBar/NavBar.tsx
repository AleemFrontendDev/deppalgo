"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import logo from "@/public/orange-logo.png"
import { IoIosLogOut } from "react-icons/io";



const NavBar = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`w-full min-h-[40px] fixed z-50 top-0 px-6 lg:px-16 py-2 bg-[#FAFAF990] border-b-[0.5px] ${scrolled ? 'border-zinc-100 backdrop-filter backdrop-blur-sm' : ''}`}>
       <div className='flex items-center justify-between'>
       <Link href={'/dashboard'} className='flex items-end gap-2'>
          <div className='bg-[#f15200] w-[50px] h-[50px] rounded-lg overflow-hidden'>
              <Image src={logo} alt='Logo' width={60} height={50} />
          </div>
          <h2 className='text-2xl font-medium text-[#333]'>DeepAlgo</h2>
        </Link>

        <Link href={'/login'} className='p-2 flex items-center bg-[#f9f3e6]  hover:text-[#f15200] justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 h-9 rounded-md px-3 !py-1 gap-1 bg-button text-primary border-[1px] border-[#e9d4b9] hover:bg-button hover:text-brand'>
            Logout
          <IoIosLogOut />
        </Link>
       </div>
    </div>
  )
}

export default NavBar