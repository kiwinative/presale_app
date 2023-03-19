"use client";

import { useGlobalContext } from './Context/store'
import { WalletIcon, Bars3Icon, XMarkIcon} from '@heroicons/react/24/solid'
import Image from 'next/image'
import logo from '../public/logo.svg'
import { useState } from 'react';



function Header() {
  const {active, setActive} = useGlobalContext()
  
  return (
      <header className='bg-white fixed w-full px-[20px] md:px-[40px] p-1 z-20'>
          <div className="flex justify-between items-center">
        <div className='flex items-center space-x-3 '>
          <div onClick={() => setActive (!active)}>
          <XMarkIcon className={`${active && "hidden"} h-[25px] w-[25px] sm:hidden cursor-pointer text-black`}/>
          <Bars3Icon className={`${!active && "hidden"} h-[25px] w-[25px] sm:hidden cursor-pointer text-black`}/>
          
          </div>
          <a href="http://localhost:3000">
          <div className='flex flex-col items-center justify-center cursor-pointer text-black'>
            <Image src={logo} alt={'logo'} height={40}/>
            <h1 className='text-[16px] font-medium'>KIWINATIVE</h1>
          </div>
          </a>
            </div>
              <div>
                <button className="flex justify-between space-x-2 items-center bg-[#6C8726] hover:bg-[#90a55c] text-white font-[16px] py-2 px-4 rounded-full cursor-pointer">
                  <WalletIcon className='h-[20px] w-[20px]'/>
                  <p>Connect Wallet</p>
                </button>
            </div>             
        </div>
    </header>
  )
}

export default Header