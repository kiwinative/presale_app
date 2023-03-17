"use client";

import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import { useGlobalContext } from './Context/store'

const Footer = () => {
  const {open} = useGlobalContext()

  return (
    <div className={`flex flex-col flex-grow ${open && "md:flex-col"} gap-[90px] items-center text-white bg-[#140E3A] py-[42px] px-[50px] md:px-[150px] font-semibold rounded-3xl`}>
        <h3 className="text-[40px] lg:text-[50px] text-center">Don’t miss out, Stay updated</h3>
          <div className='flex flex-row flex-grow items-center justify-between space-x-10 lg:space-x-16 text-white'>
            <div className="flex h-[55px] flex-grow  bg-[#222624] rounded-[28px] relative" data-te-input-wrapper-init>
              <input
              type="text"
              className="h-full bg-[#222624] rounded-[28px] peer block min-h-[auto] w-full border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
              id="exampleFormControlInput1"
              placeholder="Example label" />
              <label
              htmlFor="exampleFormControlInput1"
              className="text[20px] pointer-events-none absolute top-[9px] left-[16px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-neutral-200"
              >Enter your email address
              </label>
            </div>
            <button className="p-[12px] lg:py-[12px] lg:px-[57px] bg-[#6C8726] rounded-[27px] text-[20px] font-semibold">Subscribe</button>  
          </div>
          <p className='text-center font-semibold text-[20px]'>Don’t hesitate to subscribe to latest news on KWN Token social medias as well as updated cryptocurrency blogs to get updated on KIWINATIVE</p>
          <div className='flex flex-col w-full space-y-4 items-center'>
          <div className='flex flex-row flex-grow items-center space-x-[35px] sm:space-x-[42px] text-white'>
                <DocumentDuplicateIcon className='h-[60px] w-[60px] cursor-pointer p-3 bg-[#2B2D35] rounded-lg '/>
                <DocumentDuplicateIcon className='h-[60px] w-[60px] cursor-pointer p-3 bg-[#2B2D35] rounded-lg'/>
                <DocumentDuplicateIcon className='h-[60px] w-[60px] cursor-pointer p-3 bg-[#2B2D35] rounded-lg'/>
                <DocumentDuplicateIcon className='h-[60px] w-[60px] cursor-pointer p-3 bg-[#2B2D35] rounded-lg'/>
          </div>
          <div className='w-full h-[2px] bg-[#2B2D35]'></div>
          </div>
          <p className='text-center'>Copyright © 2023. All rights reserved by Kiwinative.</p>
        </div>
  )
}

export default Footer