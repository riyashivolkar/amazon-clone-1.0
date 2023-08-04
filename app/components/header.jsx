import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import AmazonLogo from "../../public/images/logo.png"
import DefaultImage from "../../public/images/default.png" 
import {AiOutlineSearch} from 'react-icons/ai'
import {TiShoppingCart} from 'react-icons/ti'
import { Space_Grotesk } from 'next/font/google'

const Header = () => {
  return (
    <div className='sticky top-0 left-0 w-full p-5 py-5 bg-white shadow-sm md:px-14'>
    <div  className='flex items-center justify-between space-x-3 ' >
        <div >
            <Image src = {AmazonLogo} width = {140}  alt='logo image' priority = {true} className='relative top-[-0px] lg:w-[140px]  w-[100px]'/>
            </div>
            <div className='hidden w-full lg:block '>
                <form className='flex'>
                    <input type="text" className='w-full px-1 py-0 border outline-none rounded-l-xl focus:border-[#ff9900]' 
                    placeholder='Search here'/>
                    <button className='text-3xl bg-[#ff9900] px-2
                     rounded-r-xl'>
                      <AiOutlineSearch />
                    </button>
                </form>
            </div>
            <div className='flex items-center space-x-4'>
              <Link href={"/cart"} className='relative bottom-[-3px]'>
                <button className='text-[26px] bg-[#ff9900]  rounded relative'>
                <TiShoppingCart />
                <span className='absolute px-1 py-0 text-sm text-white bg-black rounded-full -top-3 -right-2' >
                  0
                </span>
                </button>
              </Link>
              <button>
              <Image src = {DefaultImage} width = {30}  alt='default image' priority = {true} className='relative top-[-5px] lg:w-[55px] w-[30px]  bottom-1'/>

              </button>
            </div>
     </div> 
     <div className='w-full mt-3 lg:hidden'>
                <form className='flex'>
                    <input type="text" className='w-full px-1 py-0 border outline-none rounded-l-xl focus:border-[#ff9900]' 
                    placeholder='Search here'/>
                    <button className='text-3xl bg-[#ff9900] px-2
                     rounded-r-xl'>
                      <AiOutlineSearch />
                    </button>
                </form>
            </div>
     </div>
  )
}

export default Header