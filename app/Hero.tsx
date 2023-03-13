import React from 'react'

export const Hero = () => {
  return (
    <div className='flex flex-col items-center text-center w-[100%] absolute gap-[59px]'>
        <div className='text-white mx-[82px]'>
            <h1 className=' leading-[73px] font-semibold text-6xl'>KIWINATIVE Development <br /> and Exchange Token</h1>
            <p className='mt-[25px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='text-white flex flex-col items-start p-[10px] gap-[10px]'>
            <div className='flex flex-row items-center gap-[42px]'>
                <div className='flex flex-col items-start p-[10px] gap-[44px]'>
                    <p className='font-semibold text-[20px] leading-6'>Presale is LIVE!</p>
                    <div className='flex flex-row items-start gap-[30px]'>
                        <div className='flex flex-col items-center gap-[13px]'>
                            <div className='bg-[#2F333F] p-[15px] font-semibold text-[25px] leading-7 normal rounded-[9px] '>
                                <h4>07</h4>
                            </div>
                            <p className='text-[#B4B4B4] font-semibold text-[16px] normal'> Days </p>
                        </div>
                        <div className='flex flex-col items-center gap-[13px]'>
                            <div className='bg-[#2F333F] p-[15px] font-semibold text-[25px] leading-7 normal rounded-[9px] '>
                                <h4>07</h4>
                            </div>
                            <p className='text-[#B4B4B4] font-semibold text-[16px] normal'> Hours </p>
                        </div>
                        <div className='flex flex-col items-center gap-[13px]'>
                            <div className='bg-[#2F333F] p-[15px] font-semibold text-[25px] leading-7 normal rounded-[9px] '>
                                <h4>07</h4>
                            </div>
                            <p className='text-[#B4B4B4] font-semibold text-[16px] normal'> Minutes </p>
                        </div>
                        <div className='flex flex-col items-center gap-[13px]'>
                            <div className='bg-[#2F333F] p-[15px] font-semibold text-[25px] leading-7 normal rounded-[9px] '>
                                <h4>07</h4>
                            </div>
                            <p className='text-[#B4B4B4] font-semibold text-[16px] normal'> Seconds </p>
                        </div>
                    </div>
                </div>
                <div className='h-[176px] border border-solid border-[#D3E89E]'></div>
                <div className='flex flex-col items-start p-[10px] gap-[44px]'>
                    <p className='font-semibold text-[20px] leading-6'>Presale!</p>
                    <div className='flex flex-col items-start'>
                        <div className='flex relative h-[58px] w-[453px]'>
                            <div className='absolute w-[100%] h-[20px] bg-[#4D4D4D] rounded-[42px]'></div>
                            <div className='absolute w-[40%] h-[20px] bg-[#6C8726] rounded-[42px]'></div>
                            <div className='absolute h-[58px] border border-solid border-[#D3E89E] left-[29px]'></div>
                            <div className='absolute h-[58px] border border-solid border-[#D3E89E] left-[163px]'></div>
                            <div className='absolute h-[58px] border border-solid border-[#D3E89E] left-[430px]'></div>
                        </div>
                        <div className='flex relative h-[18px] w-[453px]'>
                            <p className='absolute text-white left-[12px]'>Pre ICO</p>
                            <p className='absolute text-white left-[143px]'>Soft Cap</p>
                            <p className='absolute text-white left-[410px]'>Bonus</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex flex-col items-start p-[10px] gap-[10px]'>
            <div className='flex flex-row items-start gap-[285px]'>
                <button className='bg-[#6C8726] text-white font-semibold px-[35px] py-[12px] rounded-[27px]'>Purchase Tokens</button>
                <button className='bg-white text-[#6C8726] font-semibold px-[35px] py-[12px] rounded-[27px]'>Purchase Tokens</button>
            </div>
        </div>
    </div>
  )
}
