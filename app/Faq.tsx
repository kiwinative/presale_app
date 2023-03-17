"use client"
import { ChevronDownIcon } from '@heroicons/react/24/solid'
import { useGlobalContext } from './Context/store'

function Faq() {
    const {faq1Open, setFaq1Open, open} = useGlobalContext()

  return (
    <div className='flex flex-col lg:scale-130'>
          <div className='flex flex-col'>
            <div className='flex items-center py-4'>
              <div className=" h-px bg-white w-[50px]"></div>
              <span className="flex-shrink text-white px-4 font-semibold text-[16px]">FAQ</span>
            </div>
            <h4 className='text-[26px] sm:text-[36px] font-semibold duration-500'>Frequent Questions</h4>
          </div>
          <div className='flex flex-row gap-[60px] mt-[50px]'>
            <div className='flex flex-col items-center'>
              <p>General</p>
              <div className='h-[3px] bg-[#6C8726] w-[50px]'></div>
            </div>
            <div className='flex flex-col items-center'>
              <p>Presale</p>
              <div className='h-[3px] bg-[#6C8726] opacity-[41%] w-[50px]'></div>
            </div>
            <div className='flex flex-col items-center'>
              <p>Airdrop</p>
              <div className='h-[3px] bg-[#6C8726] opacity-[41%] w-[50px]'></div>
            </div>
          </div>
          <div className='flex flex-col bg-[#303924] flex-grow p-[33px] rounded-[31px] mt-[30px] gap-[20px]'>
            <div className='flex flex-row justify-between items-center w-full space-x-[30px]' >
                <p className='text-white text-[20px]'>What Is KiwiNative?</p>
                <button className='flex rounded-full p-2 bg-[#6C8726] items-center'>
                    <ChevronDownIcon className={`h-4 w-4 ${!faq1Open && "rotate-180 duration-500"}`} onClick={() => setFaq1Open(!faq1Open)}/>
                </button>
            </div>
            <p className={`${faq1Open && "hidden"}`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut repellendus ea commodi! Modi voluptates minima at necessitatibus</p>
            <div className='flex-grow bg-[#6C8726] h-[2px] opacity-30'></div>
            <div className='flex flex-row justify-between items-center w-full space-x-[30px]' >
                <p className='text-white text-[20px]'>What cryptocurrencies can i use to purchase?</p>
                <button className='flex rounded-full p-2 bg-[#6C8726] items-center'>
                    <ChevronDownIcon className='h-4 w-4'/>
                </button>
            </div>
            <div className='flex-grow bg-[#6C8726] h-[2px] opacity-30'></div>
            <div className='flex flex-row justify-between items-center w-full space-x-[30px]' >
                <p className='text-white text-[20px]'>How can i partake in the pre-sale Token?</p>
                <button className='flex rounded-full p-2 bg-[#6C8726] items-center'>
                    <ChevronDownIcon className='h-4 w-4'/>
                </button>
            </div>
            <div className='flex-grow bg-[#6C8726] h-[2px] opacity-30'></div>
            <div className='flex flex-row justify-between items-center w-full space-x-[30px]' >
                <p className='text-white text-[20px]'>How do i benefit rom KWN pre-sale Token?</p>
                <button className='flex rounded-full p-2 bg-[#6C8726] items-center'>
                    <ChevronDownIcon className='h-4 w-4'/>
                </button>
            </div>
          </div>
        </div>
  )
}

export default Faq