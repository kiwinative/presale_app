"use client"
import { HomeIcon, BuildingStorefrontIcon, StopCircleIcon, CircleStackIcon, CurrencyDollarIcon, ShoppingBagIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronDownIcon, ChevronUpIcon, DocumentDuplicateIcon, MoonIcon  } from '@heroicons/react/24/solid'
import { useState } from 'react'


function Sidebar() {
    const [open, setOpen] = useState(true)
    const [infosubmenuOpen, setInfoSubmenuOpen] = useState(true)
    const [linksubmenuOpen, setLinkSubmenuOpen] = useState(true)

  return (
      <div>
        <div className={`hidden md:block bg-[#F5F5F5] py-5 px-[16px] space-y-3 ${open ? "w-[260px]" : "w-[75px]"} duration-500 h-full max-h-full overflow-y-auto`}>
          <div className='space-y-5'>
              <div className={`flex py-[10px] items-center ${!open && "justify-center"} hover:bg-[#90a55c] cursor-pointer text-black font-[16px] rounded-[10px] ${open && "ml-7 pl-7"} `}>
                <HomeIcon className={`h-[20px] w-[20px] block float-left ${open && "mr-3"}`}/>
                <p className={`${!open && "hidden"}`}>Home</p>
              </div>
                <div className={`flex py-[10px] items-center ${!open && "justify-center"} hover:bg-[#DEFEBD] cursor-pointer text-black font-[16px] rounded-[10px] ${open && "ml-7 pl-7"} `}>
                    <BuildingStorefrontIcon className={`h-[20px] w-[20px] block float-left ${open && "mr-3"}`}/>
                    <p className={`${!open && "hidden"}`}>Airdrop</p>
                </div>
                <div className={`flex py-[10px] items-center ${!open && "justify-center"} hover:bg-[#DEFEBD] cursor-pointer text-black font-[16px] rounded-[10px] ${open && "ml-7 pl-7"} `}>
                    <StopCircleIcon className={`h-[20px] w-[20px] block float-left ${open && "mr-3"}`}/>
                    <p className={`${!open && "hidden"}`}>KSports</p>
                </div>
            <div className={`flex py-[10px] items-center ${!open && "justify-center"} hover:bg-[#DEFEBD] cursor-pointer text-black font-[16px] rounded-[10px] ${open && "ml-7 pl-7"} `}>
            <CircleStackIcon className={`h-[20px] w-[20px] block float-left ${open && "mr-3"}`}/>
                <p className={`${!open && "hidden"}`}>KCasino</p>
            </div>
            <div className={`flex py-[10px] items-center ${!open && "justify-center"} hover:bg-[#DEFEBD] cursor-pointer text-black font-[16px] rounded-[10px] ${open && "ml-7 pl-7"} `}>
            <ShoppingBagIcon className={`h-[20px] w-[20px] block float-left ${open && "mr-3"}`}/>
                <p className={`${!open && "hidden"}`}>KStore</p>
            </div>
            <div className={`flex py-[10px] items-center ${!open && "justify-center"} hover:bg-[#DEFEBD] cursor-pointer text-black font-[16px] rounded-[10px] ${open && "ml-7 pl-7"} `}>
            <CurrencyDollarIcon className={`h-[20px] w-[20px] block float-left ${open && "mr-3"}`}/>
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
                <li>White paper</li>
                <li>Medium</li>
            </ul>
            </div>
            
            <div className='flex items-center space-x-2 cursor-pointer'>
                <p>Links</p>
                <ChevronDownIcon className={`h-3 w-3 ${!linksubmenuOpen && "rotate-180 duration-500"}`} onClick={() => setLinkSubmenuOpen(!linksubmenuOpen)}/>
            </div>
            <div className={`pl-5 ${linksubmenuOpen && "hidden"}`}>
            <ul>
                <li>Binance explorer</li>
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
                <DocumentDuplicateIcon className='h-6 w-6 text-[#6C8726] cursor-pointer'/>
                <DocumentDuplicateIcon className='h-6 w-6 text-[#6C8726] cursor-pointer'/>
                <DocumentDuplicateIcon className='h-6 w-6 text-[#6C8726] cursor-pointer'/>
                <DocumentDuplicateIcon className='h-6 w-6 text-[#6C8726] cursor-pointer'/>
            </div>
            <div className='flex-grow h-[0.5px] bg-gray-400'>
            </div>
            <div className='flex items-center space-x-2'>
                <p className='text-[13px] text-gray-400'>© 2023 Kiwinative.pro</p>
            </div>
          </div>
          <div className={`p-7 ${open ? "hidden" : "flex justify-center"}`}></div>
          <div className={`p-3 border-solid border-[1.5px] border-[#6C8726] rounded-full ${open ? "hidden" : "flex justify-center"}`}>
            <MoonIcon className={`h-4 w-4 cursor-pointer ${!open && "rotate-180"}`}  onClick={() => setOpen (!open)}/>
          </div>
          <div className={`flex pt-3 ${open ? "flex-row-reverse": "justify-center"}`}>
            <ChevronDoubleLeftIcon className={`h-4 w-4 cursor-pointer ${!open && "rotate-180"}`}  onClick={() => setOpen (!open)}/>
          </div>
    </div>
      </div>
  )
}

export default Sidebar