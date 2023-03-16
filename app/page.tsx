"use client";

import Image from 'next/image'
import { Inter } from 'next/font/google'

import styles from './page.module.css'
import Sidebar from './Sidebar'
import { Hero } from './Hero'
import Buy from './buy'
import Faq from './Faq'
import Footer from './Footer'
import { Contact } from './Contact'
import { useGlobalContext } from './Context/store'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const {open} = useGlobalContext()
  return (
    <div className={`flex  flex-row h-full w-screen bg-[#050023] ${inter.className}`}>
      <Sidebar />
      <main className={`w-full overflow-auto ml-0 ${open ? "sm:ml-[260px]" : "sm:ml-[70px]"} bg-[#050023] flex flex-col items-center gap-[65px] p-9 text-white duration-500`}>
        {/* Hero */}
          <Hero/>
        {/* Purchase and Join */}
        <Buy/>
        {/* FAQ */}
        <Faq/>
        {/* contact */}
        <Contact/>
        {/* footer */}
        <Footer/>
      </main>
    </div>
  )
}
