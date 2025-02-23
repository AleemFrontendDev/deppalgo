'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import oanda from '@/public/oanda-logo.png'
import lines from "@/public/lines.svg"
import PopUpModal from '../PopUpModal/PopUpModal'

const SelectBroker = () => {

    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
      if (isOpen) {
        document.body.classList.add("no-scroll");
      } else {
        document.body.classList.remove("no-scroll");
      }
  
      return () => {
        document.body.classList.remove("no-scroll");
      };
    }, [isOpen]);

  return (
    <>
        <div className='relative mt-10 flex flex-col gap-5 text-center'>
            <div className='hello absolute bottom-0 w-full h-20 -z-10'>
                <Image src={lines} alt='' width={100}  height={100} className='w-full h-full object-cover filter invert opacity-50' />
            </div>
            <div>
                <h2 className='text-5xl'>Select your broker</h2>
                <p className='text-sm mt-2 text-[#333] font-light'>Your membership start as soon as you set payment</p>
            </div>
            <div className='w-[450px] border-2 rounded-xl p-5 grid grid-cols-2 gap-5'>
                <div className='flex flex-col border-2 rounded-xl'
                onClick={() => setIsOpen(true)}
                >
                    <div className='flex items-center justify-center border-b-2 h-16'>
                        <Image src={oanda} alt='Oanda-logo' width={150} height={100} />
                    </div>
                    <div className='p-2'><h3>Oanda</h3></div>
                </div>
                <div className='flex flex-col border-2 rounded-xl'
                onClick={() => setIsOpen(true)}
                >
                    <div className='flex items-center justify-center border-b-2 h-16 '>
                        <h3 className='text-3xl'>IG</h3>
                    </div>
                    <div className='p-2'><h3>IG</h3></div>
                </div>
            </div>
        </div>
        <PopUpModal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  )
}

export default SelectBroker