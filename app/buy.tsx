"use client";

import { useGlobalContext } from './Context/store'

function Buy() {
    const {open} = useGlobalContext()
  return (
    <><div className='flex flex-row gap-[25px] sm:gap-[90px] md:gap-[250px] mt-[30px]'>
          <button className='bg-[#6C8726] px-[15px] rounded-[40px] py-[13px] sm:px-[20px] text-white font-semibold text-[14px] sm:text-[17px] lg:text-[20px]'>Purchase Token</button>
          <button className='bg-white  px-[15px] rounded-[40px] py-[13px] sm:px-[20px] text-[#6C8726] font-semibold text-[14px] sm:text-[17px] lg:text-[20px]'>Join Airdrop</button>
      </div>
          <div className={`flex flex-col md:flex-row  items-center justify-between px-[30px] ${open && "md:flex-col gap-[60px]"} ${open && "lg:flex-row px-[150px]"} lg:px-[87px] py-[73px] w-full bg-[#140E3A] rounded-[27px]`}>
              <div className='flex flex-col gap-[65px]'>
                  <div className='leading-9'>
                      <h4 className='text-[#6C8726] font-bold text-[20px]'>PRESALE</h4>
                      <h4 className='text-white font-semibold text-[40px]'>KIWINATIVE</h4>
                      <h4 className='bg-[#6C8726] text-white font-semibold text-[20px] rounded-[4px] px-4 sm:px-[34px] py-[13px] mt-[12px]'>Add Token To Wallet</h4>
                  </div>
                  <div>
                      <h4 className='text-[#6C8726] font-bold text-[18px] mb-2'>INSTRUCTIONS:</h4>
                      <ul className='text-[16px] leading-5 list-disc'>
                          <li>Minimum purchase allowed 0.1BNB</li>
                          <li>To add token to wallet, click the add button</li>
                      </ul>
                  </div>
              </div>
              <div className='flex flex-col gap-[35px]  border-solid border-2 py-[43px] px-[12px] sm:px-[51px] border-[#9CAB72] rounded-[25px]'>
                  <div>
                      <p className='text-[16px]'>Amount BNB</p>
                      <div className='w-[236px] h-[50px] bg-[#6C8726] rounded-[14px] opacity-[41%]'></div>
                  </div>
                  <div>
                      <p className='text-[16px]'>Rate</p>
                      <div className='w-[236px] h-[50px] bg-[#6C8726] rounded-[14px] opacity-[41%]'></div>
                  </div>
                  <button className='w-[236px] h-[50px] bg-[#6C8726] rounded-[5px] text-[18px] mb-[43px]'>BUY</button>
              </div>
          </div></>
  )
}

export default Buy