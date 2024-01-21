import Link from 'next/link'
import React from 'react'

const Banner = ({title, page}) => {
  return (

    <div className="bg-[rgba(0,0,0,0.3)]  w-full">
          <div className="container mx-auto ">
            <div className=" !h-[400px] flex items-center justify-center ">
                <div className=" text-center">
                    <h1 className='md:text-[60px] text-[35px] text-white font-semibold'>{title}</h1>
                   <div className=" text-white text-[16px]">
                      <Link href="/" className="">HOME</Link>
                      <span className='mx-2'>/</span>
                      <span>{page}</span>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner