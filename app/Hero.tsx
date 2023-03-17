import { Poppins } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: '600'
  })
  

export const Hero = () => {
  return (
    <><div className='flex flex-col gap-[35px] px-3 mt-[140px] md:px-6 sm:mx-[10px]'>
          <h2 className={`${poppins} text-white font-semibold text-5xl leading-[55px] text-center md:text-6xl md:leading-[72.5px] lg:text-[55px] lg:leading-[70px]`}><span className='text-[#6C8726]'>KIWINATIVE</span> Development <br /> And Exchange Token</h2>
          <p className='text-white text-center text-[16px] md:text-[24px] lg:text-[20px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
      <div className='flex flex-col gap-[70px] items-center lg:px-[50px] lg:flex-row lg:items-start'>
            <div className='flex flex-col gap-[44px]'>
                <p className='text-white font-semibold text-[20px]'>Presale is LIVE!</p>
                {/* calender */}
                <div className='flex flex-row gap-[30px]'>
                    <div className='flex flex-col gap-[13px] items-center'>
                        <p className='rounded-[9px] bg-[#2F333F] px-[12px] py-[15px] text-white text-[25px]'>
                            07
                        </p>
                        <p className='text-[#B4B4B4] text-[16px]'>Days</p>
                    </div>
                    <div className='flex flex-col gap-[13px] items-center'>
                        <p className='rounded-[9px] bg-[#2F333F] px-[12px] py-[15px] text-white text-[25px]'>
                            11
                        </p>
                        <p className='text-[#B4B4B4] text-[16px]'>Hours</p>
                    </div>
                    <div className='flex flex-col gap-[13px] items-center'>
                        <p className='rounded-[9px] bg-[#2F333F] px-[12px] py-[15px] text-white text-[25px]'>
                            20
                        </p>
                        <p className='text-[#B4B4B4] text-[16px]'>Minutes</p>
                    </div>
                    <div className='flex flex-col gap-[13px] items-center'>
                        <p className='rounded-[9px] bg-[#2F333F] px-[12px] py-[15px] text-white text-[25px]'>
                            35
                        </p>
                        <p className='text-[#B4B4B4] text-[16px]'>Seconds</p>
                    </div>
                </div>
            </div>
            <div className='border-dotted lg:border-solid border-[#D3E89E] w-full lg:h-full lg:w-0 border-[1px]'></div>
            <div className='flex flex-col gap-[39px]'>
                <p className='text-white font-semibold text-[20px]'>Presale</p>
                {/* progress bar */}
                <div className='flex flex-col gap-[10px] font-semibold'>
                    <div className='flex flex-row p-[10px] gap-[90px] sm:gap-[120px]'>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-white text-[9px]'>PRE SELL</p>
                            <div className='border-solid border-[#D3E89E] h-[12px] w-0  border-[1.5px]'></div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-white text-[9px]'>SOFT CAP</p>
                            <div className='border-solid border-[#D3E89E] h-[12px] w-0  border-[1.5px]'></div>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <p className='text-white text-[9px]'>BONUS</p>
                            <div className='border-solid border-[#D3E89E] h-[12px] w-0  border-[1.5px]'></div>
                        </div>
                    </div>
                    <div className="h-[20px] w-full bg-[#4D4D4D] dark:bg-neutral-600 rounded-[42px]">
                        <div className="h-[20px] bg-[#6C8726] w-[45%] rounded-[42px]"></div>
                    </div>
                    <div className='flex flex-row p-[10px] gap-[150px]'>
                        <p className='text-white text-[10px]'>65% TARGET RAISED</p>
                        <p className='text-white text-[10px]'>1 BNB = $300 = 5737929 KWN</p>
                    </div>
                </div>
            </div>
          </div></>
  )
}
