"use client";

import { DocumentDuplicateIcon } from '@heroicons/react/24/solid';
import { useGlobalContext } from './Context/store'
import Image from 'next/image'
import discord from '../public/discord_white.svg'
import twitter from '../public/twitter_white.svg'
import reddit from '../public/reddit_white.svg'
import telegram from '../public/telegram_white.svg'

const Footer = () => {
  const {open} = useGlobalContext()

  return (
    <div className={`flex flex-col flex-grow ${open && "md:flex-col"} gap-[90px] items-center text-white bg-[#140E3A] py-[42px] px-[50px] md:px-[150px] font-semibold rounded-3xl`}>
        <h3 className="text-[40px] lg:text-[50px] text-center">Don’t miss out, Stay updated</h3>
          <div className='flex flex-row flex-grow items-center justify-between space-x-3 sm:space-x-10 lg:space-x-16 text-white'>
            <div className="flex h-[40px] sm:h-[55px] flex-grow bg-[#222624] rounded-[28px] relative" data-te-input-wrapper-init>
              <input
              type="text"
              className="h-full bg-[#222624] rounded-[28px] peer block p-2"
              id="exampleFormControlInput1"
              placeholder="Enter your email address" />
            </div>
            <button className="p-[8px] sm:p-[12px] lg:py-[12px] lg:px-[57px] bg-[#6C8726] rounded-[27px] sm:text-[20px] font-semibold">Subscribe</button>  
          </div>
          <p className='text-center font-semibold text-[20px]'>Don’t hesitate to subscribe to the latest news on KWN Token social media as well as updated cryptocurrency blogs to get updated on KIWINATIVE</p>
          <div className='flex flex-col w-full space-y-4 items-center'>
          <div className='flex flex-row flex-grow items-center space-x-[35px] sm:space-x-[42px] text-white'>
            <a target={'_blank'} href="https://twitter.com/KIWINATIVEKWN?t=Viy21C9rs8BgUQVv8LKLQA&s=09"><Image className='p-1 sm:p-3 bg-[#2B2D35] rounded-lg cursor-pointer' src={twitter} alt={'twitter'} height={60} width={60} /></a>
            <a target={'_blank'} href="https://t.me/+0g-hPTQ3OAZlMGI8"><Image className='p-1 sm:p-3 bg-[#2B2D35] rounded-lg cursor-pointer' src={telegram} alt={'telegram'} height={60} width={60} /></a>
            <a target={'_blank'} href="https://discord.gg/KhCa6tuJ"><Image className='p-1 sm:p-3 bg-[#2B2D35] rounded-lg cursor-pointer' src={discord} alt={'discord'} height={60} width={60} /></a>
            <a target={'_blank'} href="https://www.reddit.com/r/KIWINATIVE1?utm_medium=android_app&utm_source=share"><Image className='p-1 sm:p-3 bg-[#2B2D35] rounded-lg cursor-pointer' src={reddit} alt={'reddit'} height={60} width={60} /></a>
          </div>
          <div className='w-full h-[2px] bg-[#2B2D35]'></div>
          </div>
          <p className='text-center'>Copyright © 2023. All rights reserved by Kiwinative.</p>
        </div>
  )
}

export default Footer