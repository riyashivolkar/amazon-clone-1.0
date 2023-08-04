import React from 'react'
import Link from "next/link"
import {MdWindow} from "react-icons/md"
import {RiBillFill} from "react-icons/ri"
import {IoLogoGoogle} from "react-icons/io"
import { v4 } from 'uuid'



const Sidebar = () => {
    let categories = ['Electronics', 'Home & Garden', 'Fashion', 'Beauty Products', 'Automotive', 'Books', 'Games', 'Watch']

  return (
    <div className='w-[500px] h-[80vh] py-5 bg-white border shadow-sm rounded-xl relative xl:block hidden'>
        <div className='flex items-center space-x-10'>
            <div className='w-1 h-10 bg-[#ff9900]'></div>
          <div className='flex items-center space-x-3'>
          <span className='text-3xl'> <MdWindow /></span>
            <span className='text-2xl font-light tracking-widest uppercase'>categories</span>
          </div>
        </div>
        <div className='px-[85px] py-4'> 
            {
                categories.map((category) =>(
                    <Link href="/" key={v4()}>
                <button className='text-xl hover:text-[#ff9900] block py-2'>{category}</button>
            </Link>
                ))
                
            }
        </div>
        <div className='px-10'>
            <Link href={'/'}>
                <button className='flex items-center space-x-2 text-2xl font-light uppercase rounded-xl w-full py-3 px-5 hover:bg-[#ff990062]'> 
                    <span className='text-3xl'> <RiBillFill /> </span>
                     <span >Orders</span>
                </button>
            </Link>
        </div>
        <div className='absolute w-full px-0 mx-auto bottom-10'>
            <button className='flex items-center justify-center w-[90%] py-2 space-x-2 text-xl text-white uppercase  bg-black mx-auto rounded-md px-0'>
                <span><IoLogoGoogle /></span>
                <span>login with google</span>
            </button>
        </div>
    </div>
  )
}

export default Sidebar