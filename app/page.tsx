import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Sidebar from './Sidebar'
import { Hero } from './Hero'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`flex h-screen ${inter.className}`}>
      <Sidebar />
      <div className='flex flex-col items-start flex-wrap gap-5 bg-[#050023] w-full px-8 pt-[113px] pb-24 relative'>
        <Hero/>
      </div>
    </div>
  )
}
