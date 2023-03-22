"use client"

import { HomeIcon, BuildingStorefrontIcon, StopCircleIcon, CircleStackIcon, CurrencyDollarIcon, ShoppingBagIcon, ChevronDoubleLeftIcon, ChevronDownIcon, DocumentDuplicateIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useGlobalContext } from './Context/store'
import Image from 'next/image'
import discord from '../public/discord.svg'
import twitter from '../public/twitter.svg'
import reddit from '../public/reddit.svg'
import telegram from '../public/telegram.svg'



function Sidebar() {

    const {open, setOpen, infosubmenuOpen, setInfoSubmenuOpen, linksubmenuOpen, setLinkSubmenuOpen, active } = useGlobalContext()
  return (
      <div className={`h-screen overflow-auto items-center bg-[#F5F5F5] py-[80px] fixed z-10`}>
        <div className={`hidden sm:block items-center space-y-3 ${open ? "w-[260px]" : "w-[75px]"} duration-500 h-screen max-h-full`}>
          <div className='space-y-5'>
              <div className={`flex py-[10px] items-center ${!open && "justify-center"} hover:bg-[#90a55c] cursor-pointer text-black font-[16px] rounded-[10px] ${open && "mx-7 px-7"} `}>
                <HomeIcon className={`h-[20px] w-[20px] block ${open && "mr-3"}`}/>
                <p className={`${!open && "hidden"}`}>Home</p>
              </div>
                <div className={`flex py-[10px] items-center ${!open && "justify-center"} hover:bg-[#DEFEBD] cursor-pointer text-black font-[16px] rounded-[10px] ${open && "mx-7 px-7"} `}>
                    <BuildingStorefrontIcon className={`h-[20px] w-[20px] block ${open && "mr-3"}`}/>
                    <p className={`${!open && "hidden"}`}>Airdrop</p>
                </div>
                <div className={`flex py-[10px] items-center ${!open && "justify-center"} cursor-default text-gray-600  font-[16px] rounded-[10px] ${open && "mx-7 px-7"} `}>
                    <StopCircleIcon className={`h-[20px] w-[20px] block ${open && "mr-3"}`}/>
                    <p className={`${!open && "hidden"} ${open && "mr-1"}`}>KSports</p>
                    <p className={`${!open && "hidden"} text-center px-1 bg-slate-200 rounded-lg`}>soon</p>
                </div>
            <div className={`flex py-[10px] items-center ${!open && "justify-center"} cursor-default text-gray-600 font-[16px] rounded-[10px] ${open && "mx-7 px-7"} `}>
            <CircleStackIcon className={`h-[20px] w-[20px] block ${open && "mr-3"}`}/>
                <p className={`${!open && "hidden"} ${open && "mr-1"}`}>KCasino</p>
                <p className={`${!open && "hidden"} text-center px-1 bg-slate-200 rounded-lg`}>soon</p>
            </div>
            <div className={`flex py-[10px] items-center ${!open && "justify-center"} cursor-default text-gray-600 font-[16px] rounded-[10px] ${open && "mx-7 px-7"} `}>
            <ShoppingBagIcon className={`h-[20px] w-[20px] block ${open && "mr-3"}`}/>
                <p className={`${!open && "hidden"} ${open && "mr-1"}`}>KStore</p>
                <p className={`${!open && "hidden"} text-center px-1 bg-slate-200 rounded-lg`}>soon</p>
            </div>
            <div className={`flex py-[10px] items-center ${!open && "justify-center"} hover:bg-[#DEFEBD] cursor-pointer text-black font-[16px] rounded-[10px] ${open && "mx-7 px-7"} `}>
            <CurrencyDollarIcon className={`h-[20px] w-[20px] block ${open && "mr-3"}`}/>
                <p className={`${!open && "hidden"}`}>The Token</p>
            </div>
          </div>
          <div className={`border-solid border-[1.8px] border-gray-400 rounded-[12px] ml-7 p-[10px] w-[190px] space-y-4 ${!open && "hidden"}`}>
            <div className='flex items-center space-x-2 cursor-pointer'>
                <p>Information</p>
                <ChevronDownIcon className={`h-3 w-3 ${!infosubmenuOpen && "rotate-180 duration-500"}`} onClick={() => setInfoSubmenuOpen(!infosubmenuOpen)}/>
            </div>
            <div className={`pl-5 ${infosubmenuOpen && "hidden"}`}>
            <ul>
                <a href=""><li>White paper</li></a>
                <a href=""><li>Medium</li></a>
            </ul>
            </div>
            
            <div className='flex items-center space-x-2 cursor-pointer'>
                <p>Links</p>
                <ChevronDownIcon className={`h-3 w-3 ${!linksubmenuOpen && "rotate-180 duration-500"}`} onClick={() => setLinkSubmenuOpen(!linksubmenuOpen)}/>
            </div>
            <div className={`pl-5 ${linksubmenuOpen && "hidden"}`}>
            <ul>
                <a href=""><li>Binance explorer</li></a>
            </ul>
            </div>
            <div>
                <p>Contract address:</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='text-[13px] text-gray-400'>0xDEFJHG...TF643</p>
                <DocumentDuplicateIcon className='h-4 w-4 cursor-pointer'/>
            </div>
            <div className='flex items-center space-x-2 border-solid border-[1.5px] border-[#6C8726] rounded-full w-[120px] p-[3px] cursor-pointer'>
                <MoonIcon className='h-4 w-4'/>
                <p className=''>Light Mode</p> 
            </div>
            <div className='flex items-center space-x-4'>
                <a href="https://twitter.com/KIWINATIVEKWN?t=Viy21C9rs8BgUQVv8LKLQA&s=09" target="_blank" rel="noopener noreferrer"><Image className='h-6 w-6 cursor-pointer' src={twitter} alt={'twitter'}/></a>
                <a href="https://t.me/+0g-hPTQ3OAZlMGI8" target="_blank" rel="noopener noreferrer"><Image className='h-6 w-6 cursor-pointer' src={telegram} alt={'telegram'}/></a>
                <a href="https://discord.gg/KhCa6tuJ"target="_blank" rel="noopener noreferrer"><Image className='h-6 w-6 cursor-pointer' src={discord} alt={'discord'}/></a>
                <a href="https://www.reddit.com/r/KIWINATIVE1?utm_medium=android_app&utm_source=share" target="_blank" rel="noopener noreferrer"><Image className='h-6 w-6 cursor-pointer' src={reddit} alt={'reddit'}/></a>
            </div>
            <div className='flex-grow h-[0.5px] bg-gray-400'>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='text-[13px] text-gray-400'>© 2023 Kiwinative.pro</p>
            </div>
          </div>
          <div className={`p-7 ${open ? "hidden" : "flex justify-center"}`}></div>
          <div className={`flex p-3 pt-3 ${open ? "hidden" : "flex justify-center"}`}>
            <MoonIcon className={`h-9 w-9 p-2 border-solid border-[1.5px] border-[#6C8726] rounded-[48px] cursor-pointer `}  onClick={() => setOpen (!open)}/>
          </div>
          <div className={`flex pt-3 ${open ? "flex-row-reverse": "justify-center"}`}>
            <ChevronDoubleLeftIcon className={`h-4 w-4 cursor-pointer ${!open && "rotate-180"} mb-8`}  onClick={() => setOpen (!open)}/>
          </div>
        
    </div>
    <div className={`${active && "hidden"} ${!active && "block sm:hidden items-center space-y-3 duration-500 h-screen max-h-full"}`}>
          <div className='flex flex-col items-start space-y-5'>
                <div className={`flex flex-row gap-2 ml-[40px] p-[10px] items-center hover:bg-[#90a55c] cursor-pointer text-black font-[16px] rounded-[10px]`}>
                    <HomeIcon className={`h-[20px] w-[20px] block`}/>
                    <p>Home</p>
                </div>
                <div className={`flex flex-row gap-2 ml-[40px] p-[10px] items-center  hover:bg-[#DEFEBD] cursor-pointer text-black font-[16px] rounded-[10px]`}>
                    <BuildingStorefrontIcon className={`h-[20px] w-[20px] block`}/>
                    <p>Airdrop</p>
                </div>
                <div className={`flex flex-row gap-2 ml-[40px] p-[10px] items-center   text-gray-600 font-[16px] rounded-[10px]`}>
                    <StopCircleIcon className={`h-[20px] w-[20px] block`}/>
                    <p>KSports</p>
                    <p className={`text-center px-1 bg-slate-200 rounded-lg`}>soon</p>
                </div>
                <div className={`flex flex-row gap-2 ml-[40px] p-[10px] items-center   text-gray-600 font-[16px] rounded-[10px]`}>
                    <CircleStackIcon className={`h-[20px] w-[20px] block`}/>
                    <p>KCasino</p>
                    <p className={`text-center px-1 bg-slate-200 rounded-lg`}>soon</p>
                </div>
                <div className={`flex flex-row gap-2 ml-[40px] p-[10px] items-center   text-gray-600 font-[16px] rounded-[10px]`}>
                <ShoppingBagIcon className={`h-[20px] w-[20px] block`}/>
                    <p>KStore</p>
                    <p className={`text-center px-1 bg-slate-200 rounded-lg`}>soon</p>
                </div>
                <div className={`flex flex-row gap-2 ml-[40px] p-[10px] items-center  hover:bg-[#DEFEBD] cursor-pointer text-black font-[16px] rounded-[10px]`}>
                <CurrencyDollarIcon className={`h-[20px] w-[20px] block`}/>
                    <p>The Token</p>
                </div>
          </div>
          <div className={`border-solid border-[1.8px] border-gray-400 rounded-[12px] m-2 p-[10px] w-[190px] space-y-4 hidden"}`}>
            <div className='flex items-center space-x-2 cursor-pointer'>
                <p>Information</p>
                <ChevronDownIcon className={`h-3 w-3 ${!infosubmenuOpen && "rotate-180 duration-500"}`} onClick={() => setInfoSubmenuOpen(!infosubmenuOpen)}/>
            </div>
            <div className={`pl-5 ${infosubmenuOpen && "hidden"}`}>
            <ul>
                <a href=""><li>White paper</li></a>
                <a href=""><li>Medium</li></a>
            </ul>
            </div>
            
            <div className='flex items-center space-x-2 cursor-pointer'>
                <p>Links</p>
                <ChevronDownIcon className={`h-3 w-3 ${!linksubmenuOpen && "rotate-180 duration-500"}`} onClick={() => setLinkSubmenuOpen(!linksubmenuOpen)}/>
            </div>
            <div className={`pl-5 ${linksubmenuOpen && "hidden"}`}>
            <ul>
                <a href=""><li>Binance explorer</li></a>
            </ul>
            </div>
            <div>
                <p>Contract address:</p>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='text-[13px] text-gray-400'>0xDEFJHG...TF643</p>
                <DocumentDuplicateIcon className='h-4 w-4 cursor-pointer'/>
            </div>
            <div className='flex items-center space-x-2 border-solid border-[1.5px] border-[#6C8726] rounded-full w-[120px] p-[3px] cursor-pointer'>
                <MoonIcon className='h-4 w-4'/>
                <p className=''>Light Mode</p> 
            </div>
            <div className='flex items-center space-x-4'>
                <a href="https://twitter.com/KIWINATIVEKWN?t=Viy21C9rs8BgUQVv8LKLQA&s=09" target="_blank" rel="noopener noreferrer"><Image className='h-6 w-6 cursor-pointer' src={twitter} alt={'twitter'}/></a>
                <a href="https://t.me/+0g-hPTQ3OAZlMGI8" target="_blank" rel="noopener noreferrer"><Image className='h-6 w-6 cursor-pointer' src={telegram} alt={'telegram'}/></a>
                <a href="https://discord.gg/KhCa6tuJ"target="_blank" rel="noopener noreferrer"><Image className='h-6 w-6 cursor-pointer' src={discord} alt={'discord'}/></a>
                <a href="https://www.reddit.com/r/KIWINATIVE1?utm_medium=android_app&utm_source=share" target="_blank" rel="noopener noreferrer"><Image className='h-6 w-6 cursor-pointer' src={reddit} alt={'reddit'}/></a>
            </div>
            <div className='flex-grow h-[0.5px] bg-gray-400'>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='text-[13px] text-gray-400'>© 2023 Kiwinative.pro</p>
            </div>
          </div>
        
    </div>
    </div>
  )
}

export default Sidebar