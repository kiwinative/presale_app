import { HomeIcon, BuildingStorefrontIcon, StopCircleIcon, CircleStackIcon, CurrencyDollarIcon, ShoppingBagIcon, ChevronDoubleLeftIcon, ChevronDoubleRightIcon, ChevronDownIcon, ChevronUpIcon  } from '@heroicons/react/24/solid'

function Sidebar() {
  return (
      <div className='hidden md:block h-screen bg-white py-5 px-[32px] space-y-3 w-[260px]'>
          <div className='space-y-5'>
              <div className='py-[10px]'>
                <button className="flex space-x-2 items-center w-[190px] hover:bg-[#90a55c] text-black font-[16px] py-3 px-4 rounded-[10px]">
                    <HomeIcon className='h-[20px] w-[20px]'/>
                    <p>Home</p>
                </button>
              </div>
                <div className='py-[10px]'>
                    <button className="flex space-x-2 items-center w-[190px] hover:bg-[#90a55c] text-black font-[16px] py-3 px-4 rounded-[10px]">
                        <BuildingStorefrontIcon className='h-[20px] w-[20px]'/>
                        <p>Airdrop</p>
                    </button>
                </div>
            <div className='py-[10px]'>
            <button className="flex space-x-2 items-center w-[190px] hover:bg-[#90a55c] text-black font-[16px] py-3 px-4 rounded-[10px]">
                <StopCircleIcon className='h-[20px] w-[20px]'/>
                <p>KSports</p>
            </button>
            </div>
            <div className='py-[10px]'>
            <button className="flex space-x-2 items-center w-[190px] hover:bg-[#90a55c] text-black font-[16px] py-3 px-4 rounded-[10px]">
                <CircleStackIcon className='h-[20px] w-[20px]'/>
                <p>KCasino</p>
            </button>
            </div>
            <div className='py-[10px]'>
            <button className="flex space-x-2 items-center w-[190px] hover:bg-[#90a55c] text-black font-[16px] py-3 px-4 rounded-[10px]">
                <ShoppingBagIcon className='h-[20px] w-[20px]'/>
                <p>KStore</p>
            </button>
            </div>
            <div className='py-[10px]'>
            <button className="flex space-x-2 items-center w-[190px] hover:bg-[#90a55c] text-black font-[16px] py-3 px-4 rounded-[10px]">
                <CurrencyDollarIcon className='h-[20px] w-[20px]'/>
                <p>The Token</p>
            </button>
            </div>
          </div>
          <div className='border-solid border-2 border-[#515050] rounded-[12px] p-[16px] w-[190px] space-y-4'>
            <div className='flex items-center space-x-2'>
                <p>Information</p>
                <ChevronDownIcon className='h-3 w-3'/>
            </div>
            <div className='flex items-center space-x-2'>
                <p>Links</p>
                <ChevronDownIcon className='h-3 w-3'/>
            </div>
            <div>
                <p>Contract address:</p>
            </div>
          </div>
    </div>
  )
}

export default Sidebar