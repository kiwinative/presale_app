"use client";

import { useGlobalContext } from './Context/store'
import { useAddress, useSigner } from "@thirdweb-dev/react";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { DocumentDuplicateIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import twitter from '../public/twitter_icon.svg'
import discord from '../public/discord_icon.svg'
import reddit from '../public/reddit_icon.svg'
import { crowdsale_details } from './contract';

async function Buy() {
    const {open, isPresale, setIsPresale} = useGlobalContext()
    const address = useAddress();
    const signer = useSigner();
    const sdk = ThirdwebSDK.fromSigner(signer);
    const contract = await sdk.getContract(
        crowdsale_details['contract address'], 
        crowdsale_details.abi, 
    );
  return (
    <><div className={`flex flex-row gap-[25px] sm:gap-[150px] md:gap-[250px] ${open && "md:gap-[100px]"} mt-[30px]`}>
          <button className={`bg-[#6C8726] px-[15px] rounded-[40px] py-[13px] sm:px-[20px] text-white font-semibold text-[14px] sm:text-[17px] lg:text-[20px]`} onClick={() => {setIsPresale(true)}}>Purchase Token</button>
          <button className='bg-white  px-[15px] rounded-[40px] py-[13px] sm:px-[20px] text-[#6C8726] font-semibold text-[14px] sm:text-[17px] lg:text-[20px]'onClick={() => {setIsPresale(false)}}>Join Airdrop</button>
      </div>
          <div className={`${!isPresale && "hidden duration-200"} flex flex-col gap-10 md:flex-row  items-center justify-evenly px-[30px] ${open && "md:flex-col gap-[60px]"} ${open && "lg:flex-row px-[150px]"} lg:px-[87px] py-[73px] w-full bg-[#140E3A] rounded-[27px]`}>
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
              <div className={`flex flex-col gap-[35px]  border-solid border-2 py-[43px] px-[12px] sm:px-[51px] ${open && "sm:px-7"} border-[#9CAB72] rounded-[25px] `}>
                  <div>
                      <p className='text-[16px]'>Amount BNB</p>
                      <input type={'number'} className='w-[236px] h-[50px] bg-[#383F32] rounded-[14px] focus:outline-none px-3'>
                      </input>
                  </div>
                  <div>
                      <p className='text-[16px]'>Rate</p>
                      <input type={'number'} value={0.0000025} readOnly className='w-[236px] h-[50px] bg-[#383F32] rounded-[14px] p-3 focus:outline-none '></input>
                  </div>
                  <div className='flex items-center flex-col'>
                  <button  className={`w-[236px] h-[50px] bg-[#6C8726] rounded-[5px] text-[18px] mb-5`} >BUY</button>
                  <p className={`${address && "hidden"} text-red-500 mb-[40px]`}>No wallet connected</p>
                  </div>
              </div>
          </div>

          {/* Airdrop */}

          <div className={`${isPresale && "hidden duration-200"} flex flex-col gap-10 md:flex-row  items-center justify-evenly px-[30px] ${open && "md:flex-col gap-[60px]"} ${open && "lg:flex-row px-[150px]"} lg:px-[87px] py-[73px] w-full bg-[#140E3A] rounded-[27px]`}>
              <div className='flex flex-col gap-[65px]'>
                  <div className='leading-9'>
                      <h4 className='text-[#6C8726] font-bold text-[20px]'>AIRDROP</h4>
                      <h4 className='text-white font-semibold text-[40px]'>KIWINATIVE</h4>
                      <h4 className={`${address && "hidden"} bg-[#6C8726] text-white font-semibold text-[20px] rounded-[4px] px-4 sm:px-[34px] py-[13px] mt-[12px]`}>Connect Wallet to show task</h4>
                      <h4 className={`${!address && "hidden"} max-w-[327px] truncate bg-[#6C8726] text-white font-semibold text-[20px] rounded-[4px] px-4 sm:px-[34px] py-[13px] mt-[12px]`}>{address}</h4>
                  </div>
                  <div>
                  <h4 className='text-[#6C8726] font-bold text-[18px] mb-2'>TASKS:</h4>
                  <p className={`${address && "hidden"} text-red-500 mb-[40px]`}>No wallet connected</p>
                    <div className={`${!address && "hidden"} flex flex-col space-y-4 text-white text-[17px] font-bold`}>
                      <div className='flex flex-row items-center space-x-2 flex-grow bg-[#CCCCCC] rounded-[9px] p-[10px] border-l-[10px] border-[#6C8726]'>
                        <CheckCircleIcon className='h-6 w-6'/>
                        <p>Join Our <a href='https://t.me/+0g-hPTQ3OAZlMGI8' className='text-[#6C8726]'>Telegram Channel</a></p>
                      </div>
                      <div className='flex flex-col space-y-1 flex-grow bg-[#CCCCCC] rounded-[9px] p-[10px] border-l-[10px] border-[#6C8726]'>
                        <div className='flex flex-row items-center space-x-2'>
                            <Image className='h-6 w-6' src={twitter} alt={'twitter'}/>
                            <p>Twitter</p>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <CheckCircleIcon className='h-6 w-6'/>
                            <p><a href='https://twitter.com/KIWINATIVEKWN?t=Viy21C9rs8BgUQVv8LKLQA&s=09' className='text-[#6C8726]'>Follow, Like and retweet post</a></p>
                        </div>
                      </div>
                      <div className='flex flex-col space-y-1 flex-grow bg-[#CCCCCC] rounded-[9px] p-[10px] border-l-[10px] border-[#6C8726]'>
                        <div className='flex flex-row items-center space-x-2'>
                            <Image className='h-6 w-6' src={discord} alt={'discord'}/>
                            <p>Discord</p>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <CheckCircleIcon className='h-6 w-6'/>
                            <p><a href='https://discord.gg/KhCa6tuJ' className='text-[#6C8726]'>Join our Community</a></p>
                        </div>
                      </div>
                      <div className='flex flex-col space-y-1 flex-grow bg-[#CCCCCC] rounded-[9px] p-[10px] border-l-[10px] border-[#6C8726]'>
                        <div className='flex flex-row items-center space-x-2'>
                            <Image className='h-6 w-6' src={reddit} alt={'reddit'}/>
                            <p>Reddit</p>
                        </div>
                        <div className='flex flex-row items-center space-x-2'>
                            <CheckCircleIcon className='h-6 w-6'/>
                            <p><a href='https://discord.gg/KhCa6tuJ' className='text-[#6C8726]'>Follow our community</a></p>
                        </div>
                      </div>
                    </div>
                    <p className={`${!address && "hidden"} mb-[40px] mt-1`}>Complete tasks to earn 7000 KWN</p>
                  </div>
                  
              </div>
              <div className={`flex flex-col gap-[35px]  border-solid border-2 py-[43px] px-[12px] sm:px-[45px] ${open && "sm:px-7"} border-[#9CAB72] rounded-[25px] `}>
                  <div>
                    <p className='text-[16px]'>Airdrop Balance</p>
                    <input type={'text'} value={"0.00 KWN"} readOnly className='w-[236px] h-[50px] bg-[#383F32] rounded-[14px] p-3 focus:outline-none '></input>
                  </div>
                  <div  className='flex flex-col space-y-2 font-semibold'>
                  <p>Refer Friends to Earn  KWN tokens</p>
                  <p><span className='text-[#6C8726]'>No of Referred friends:</span> 52</p>
                  </div>
                  <div className='flex items-center flex-col mt-10'>
                  <button  className={`w-[236px] h-[50px] bg-[#6C8726] rounded-[5px] text-[18px] mb-5`}>GENERATE REFERAL LINK</button>
                  <div className='flex items-center space-x-2'>
                  <p className={`font-semibold`}>Share your Link: <span className='text-[#808080]'>https://kiwinative.io/kjuhgf</span></p>
                  <DocumentDuplicateIcon className={`h-10 w-10 ${open && "lg:h-10 lg:w-10"} xs:h-4 xs:w-4 cursor-pointer`}/>
                  </div>
                  </div>
              </div>
          </div>
          </>
  )
}

export default Buy