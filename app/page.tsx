import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Sidebar from './Sidebar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex  flex-row h-screen w-full ${inter.className}`}>
      <Sidebar />
      <main className='w-full h-full bg-[#050023] flex flex-col items-center gap-[65px]'>
          <div className='flex flex-col gap-[45px] px-3 mt-[140px] md:px-6'>
              <h1 className='text-white font-semibold text-5xl leading-[55px] text-center md:text-6xl md:leading-[72.5px] lg:text-[80px] lg:leading-[90px]' >KIWINATIVE Development <br /> And Exchange Token</h1>
              <p className='text-white text-center text-[16px] md:text-[24px] lg:text-[30px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
          <div className='flex flex-col gap-[42px] items-center lg:px-[50px] lg:flex-row lg:items-start'>
            <div className='flex flex-col gap-[44px]'>
              <p className='text-white font-semibold text-[20px]'>Presale is LIVE!</p>
              {/* calender */}
              <div className='flex flex-row gap-[30px]'>
                <div className='flex flex-col gap-[13px] items-center'>
                  <p className='rounded-[9px] bg-[#2F333F] px-[12px] py-[15px] text-white text-[25px]'>
                    07
                  </p>
                  <p className='text-white text-[16px]'>Days</p>
                </div>
                <div className='flex flex-col gap-[13px] items-center'>
                  <p className='rounded-[9px] bg-[#2F333F] px-[12px] py-[15px] text-white text-[25px]'>
                    11
                  </p>
                  <p className='text-white text-[16px]'>Hours</p>
                </div>
                <div className='flex flex-col gap-[13px] items-center'>
                  <p className='rounded-[9px] bg-[#2F333F] px-[12px] py-[15px] text-white text-[25px]'>
                    20
                  </p>
                  <p className='text-white text-[16px]'>Minutes</p>
                </div>
                <div className='flex flex-col gap-[13px] items-center'>
                  <p className='rounded-[9px] bg-[#2F333F] px-[12px] py-[15px] text-white text-[25px]'>
                    35
                  </p>
                  <p className='text-white text-[16px]'>Seconds</p>
                </div>
              </div>
            </div>
            <div className='border-dotted lg:border-solid border-[#D3E89E] w-full lg:h-[176px] border-[1px]'></div>
            <div className='flex flex-col gap-[44px]'>
              <p className='text-white font-semibold text-[20px]'>Presale</p>
              {/* progress bar */}
              <div className="mb-6 h-[20px] w-[450px] bg-[#4D4D4D] dark:bg-neutral-600 rounded-[42px]">
                <div className="h-[20px] bg-[#6C8726] w-[45%] rounded-[42px]"></div>
                <div className='border-solid border-[#D3E89E]  border-[1px] h-12 w-0 ml-5'>
                <div className='border-solid border-[#D3E89E]  border-[1px] h-12 w-0 ml-[100px]'>
                <div className='border-solid border-[#D3E89E]  border-[1px] h-12 w-0 ml-[300px]'></div>
                </div>
                </div>
              </div>
            </div>
          </div>
      </main>
    </div>
  )
}
