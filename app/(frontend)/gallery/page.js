"use client"
import React from 'react'
import Banner from '../../components/common/banner'
import 'react-medium-image-zoom/dist/styles.css'
import dynamic from 'next/dynamic';

const Zoom = dynamic(() => import('react-medium-image-zoom'), { ssr: false });
const page = () => {
    return (
        <div className='relative'>
            <div className="h-[100vh] w-full fixed left-0 right-0 bottom-0 -z-10">
                <img src="/contact.jpg" alt="" className='h-full w-full object-cover' />
            </div>
            <Banner title="Gallery" page="Gallery" />
            <div className="bg-white py-20">
                <div className="container mx-auto">
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-4">
                            <div className='hover:opacity-70 duration-300'>
                                <Zoom>
                                    <img src="/gallery-1.jpg" className='w-full h-full' alt="" />
                                </Zoom>
                            </div>
                            <div className='hover:opacity-70 duration-300'>
                                <Zoom>
                                    <img src="/gallery-2.jpg" className='w-full h-full' alt="" />
                                </Zoom>
                            </div>
                            <div className='hover:opacity-70 duration-300'>
                                <Zoom>
                                    <img src="/gallery-1.jpg" className='w-full h-full' alt="" />
                                </Zoom>
                            </div>
                            <div className='hover:opacity-70 duration-300'>
                                <Zoom>
                                    <img src="/gallery-2.jpg" className='w-full h-full' alt="" />
                                </Zoom>
                            </div>
                            <div className='hover:opacity-70 duration-300'>
                                <Zoom>
                                    <img src="/gallery-1.jpg" className='w-full h-full' alt="" />
                                </Zoom>
                            </div>
                            <div className='hover:opacity-70 duration-300'>
                                <Zoom>
                                    <img src="/gallery-2.jpg" className='w-full h-full' alt="" />
                                </Zoom>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page