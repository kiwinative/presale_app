import { WalletIcon, BeakerIcon, Bars3Icon} from '@heroicons/react/24/solid'

function Header() {
  return (
      <header className='bg-white fixed w-full px-[20px] z-10 md:px-[40px]'>
          <div className="flex justify-between items-center">
        <div className='flex items-center space-x-3 '>
          <Bars3Icon className='h-[25px] w-[25px] sm:hidden cursor-pointer text-black' />
          <div className='flex flex-col items-center cursor-pointer text-black'>
                  <BeakerIcon className='h-[40px] w-[40px] text-black' />
                  <h1 className='font-[16px]'>KIWINATIVE</h1>
              </div>
              </div>
                <div>
                  <button className="flex justify-between space-x-2 items-center bg-[#6C8726] hover:bg-[#90a55c] text-white font-[16px] py-2 px-4 rounded-full cursor-pointer">
                      <WalletIcon className='h-[20px] w-[20px]'/>
                        <p>Connect Wallet</p>
                    </button>
                </div>             
          </div>
    </header>
  )
}

export default Header