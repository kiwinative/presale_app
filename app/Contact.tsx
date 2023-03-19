"use client";

import { useGlobalContext } from './Context/store'
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid"
import Image from 'next/image';
import telegram_white from '../public/telegram_white.svg'


export const Contact = () => {
    const {open} = useGlobalContext()
  return (
    <div className={`flex flex-col flex-grow items-center mt-[100px] px-8 ${open && 'px-0'}`}>
        <div className='flex items-center py-4'>
            <div className=" h-px bg-white w-[60px]"></div>
            <span className="flex-shrink text-white px-4 font-semibold text-[16px]">CONTACT</span>
            <div className=" h-px bg-white w-[60px]"></div>
        </div>
        <h4 className={`text-[35px] sm:text-[50px] font-semibold ${open && "sm:text-[40px]"}`}>Contact Core Team</h4>
        <div className="flex flex-col items-center gap-[40px] mt-[54px]">
            <div className='flex flex-row justify-between w-full px-[30px]'>
                <a href="mailto:media@privateemail.pro" className="items-center rounded-[30px] bg-[#6C8726] p-3">
                    <EnvelopeIcon className="h-[30px] w-[30px]"/>
                </a>
                <a href="tel:+234"className="rounded-[30px] bg-[#6C8726] p-3">
                    <PhoneIcon className="h-[30px] w-[30px]"/>
                </a>
                <a href="https://t.me/+0g-hPTQ3OAZlMGI8" className="rounded-[30px] bg-[#6C8726] p-3">
                    <Image className=' cursor-pointer' src={telegram_white} alt={'telegram'} height={30} width={30} />
                </a>
            </div>
            <div className={`flex flex-col space-y-[20px] ${open ? "md:flex-col" : "md:flex-row md:space-y-0 md:space-x-[70px]"} justify-between text-white`}>
                <div className={`h-[55px] w-[330px] ${open ? "lg:w-[500px]" : "md:w-[300px] lg:w-[400px]"} bg-[#222624] rounded-[28px] relative mb-3`} data-te-input-wrapper-init>
                    <input
                    type="text"
                    className="h-full bg-[#222624] rounded-[28px] peer block min-h-[auto] w-full border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"/>
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="text[32px] pointer-events-none absolute top-[9px] left-[16px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-neutral-200"
                    >First Name
                    </label>
                </div>
                <div className={`h-[55px] w-[330px] ${open ? "lg:w-[500px]" : "md:w-[300px] lg:w-[400px]"} bg-[#222624] rounded-[28px] relative mb-3`} data-te-input-wrapper-init>
                    <input
                    type="text"
                    className="h-full bg-[#222624] rounded-[28px] peer block min-h-[auto] w-full border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"/>
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="text[32px] pointer-events-none absolute top-[9px] left-[16px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-neutral-200"
                    >Last Name
                    </label>
                </div>
                
            </div>
            <div className={`flex flex-col space-y-[20px] ${open ? "md:flex-col" : "md:flex-row md:space-y-0 md:space-x-[70px]"} justify-between text-white`}>
                <div className={`h-[55px] w-[330px] ${open ? "lg:w-[500px]" : "md:w-[300px] lg:w-[400px]"} bg-[#222624] rounded-[28px] relative mb-3`} data-te-input-wrapper-init>
                    <input
                    type="text"
                    className="h-full bg-[#222624] rounded-[28px] peer block min-h-[auto] w-full border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"/>
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="text[32px] pointer-events-none absolute top-[9px] left-[16px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-neutral-200"
                    >Email
                    </label>
                </div>
                <div className={`h-[55px] w-[330px] ${open ? "lg:w-[500px]" : "md:w-[300px] lg:w-[400px]"} bg-[#222624] rounded-[28px] relative mb-3`} data-te-input-wrapper-init>
                    <input
                    type="text"
                    className="h-full bg-[#222624] rounded-[28px] peer block min-h-[auto] w-full border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"/>
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="text[32px] pointer-events-none absolute top-[9px] left-[16px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-neutral-200"
                    >Phone Number
                    </label>
                </div>
            
            </div>
            <div className='flex flex-row w-full text-white'>
                <div className="h-[55px] w-full  bg-[#222624] rounded-[28px] relative mb-3" data-te-input-wrapper-init>
                    <input
                    type="text"
                    className="h-full bg-[#222624] rounded-[28px] peer block min-h-[auto] w-full border-0  py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                    id="exampleFormControlInput1"/>
                    <label
                    htmlFor="exampleFormControlInput1"
                    className="text[32px] pointer-events-none absolute top-[9px] left-[16px] mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-white transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-white dark:peer-focus:text-neutral-200"
                    >Message...
                    </label>
                </div>       
            </div>
        </div>
        <button className="py-[19px] px-[44px] bg-[#6C8726] rounded-[27px] mt-[70px] text-[12px] sm:text-[18px] font-bold">SUBMIT YOUR MESSAGE</button>
    </div>
  )
}
