import { WalletIcon, BeakerIcon } from '@heroicons/react/24/solid'

function Sidebar() {
  return (
      <div className='hidden md:block h-screen bg-white p-5 w-[260px]'>
          <div>
              <button className="flex space-x-2 items-center w-[190px] hover:bg-[#90a55c] text-black font-[16px] py-2 px-4 rounded-[10px]">
                <WalletIcon className='h-[20px] w-[20px]'/>
                <p>Home</p>
            </button>
          </div>
    </div>
  )
}

export default Sidebar