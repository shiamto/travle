'use client';
import React from 'react'
import Banner from '../../components/common/banner'
import { FaCheck } from "react-icons/fa6";
import { MdOutlineTravelExplore } from "react-icons/md";
import { useFetch } from '../../helpers/hooks';
import { fetchAboutPage } from '../../helpers/backend';


const page = () => {
    const [about] = useFetch(fetchAboutPage)
    return (
        <div className="">
            <div className='relative'>
                <div className="h-[100vh] w-full fixed left-0 right-0 bottom-0 -z-10">
                    <img src="/banner.jpg" alt="" className='h-full w-full object-cover' />
                </div>
                <Banner title="About Us" page="About" />
                <div className=" bg-thm_gray ">
                    <div className="relative">

                        <div className="absolute top-0 lg:block hidden">
                            <img src="/leaf.png" alt="" />
                        </div>
                        <div className=" absolute top-10 left-[200px] lg:block hidden">
                            <img className='animate-rotate-sun' src="/sun.png" alt="" />
                        </div>
                        <div className="container mx-auto py-20 text-center relative z-10">
                            <div className="relative inline-block  mb-16">
                                <h1 className='uppercase font-barlow md:text-[100px] text-[60px] text-primary'>
                                    {about?.content?.enjoy_section?.title}
                                </h1>
                                <h2 className='font-satisfy md:text-[60px] text-[30px] text-[#ff0143] md:absolute -bottom-8 md:right-0 '>
                                    {about?.content?.enjoy_section?.sub_title}
                                </h2>
                            </div>

                            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
                                {about?.content?.enjoy_section?.images?.map((item) => (
                                    <div className="border-dashed p-2 bg-white border-primary border border-opacity-40">
                                        <img src={item?.image} className='w-full h-full' alt="" />
                                    </div>
                                ))}


                            </div>
                        </div>
                        <div className="absolute right-0 animate-plane top-1/2">
                            <img className='' src="/plane.png" alt="" />
                        </div>
                    </div>

                </div>
                <div className="bg-thm_gray py-20">
                    <div className="container">
                        <div className="md:flex gap-6">
                            <div className="basis-1/2 p-4 border-dashed border-2 border-gray-500">
                                <img src="/cta.jpg" alt="" className='h-full w-full' />
                            </div>
                            <div className="basis-1/2  md:mt-0 mt-5">
                                <h1 className='md:text-[50px] text-[30px] font-barlow font-bold text-primary'>
                                    {about?.content?.transforming_section?.title}
                                </h1>
                                <p className=' leading-[30px]'>
                                    {about?.content?.transforming_section?.sub_title}
                                </p>
                                <div className="my-6">
                                    <ul className=' text-secondaryText space-y-2'>
                                        {about?.content?.transforming_section?.list?.map((item) => (
                                            <li className='text-[20px] flex items-center'><span className='text-secondary text-base mr-3'><FaCheck /></span> <p>{item}</p></li>
                                        ))}

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-[#ECEEEF] py-20">
                <div className="container mx-auto">
                    <div className="text-center max-w-[720px] mx-auto">
                        <h1 className='md:text-[50px] text-[30px] font-barlow font-semibold text-primary'>
                            {about?.content?.partnership_section?.title}
                        </h1>
                        <p className='leading-[25px] text-secondaryText py-3'>
                            {about?.content?.partnership_section?.sub_title}
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 mx-auto gap-5">
                        {about?.content?.partnership_section?.images?.map((item) => (
                            <div className="mx-auto">
                                <img src={item?.image} className='' alt="" />
                            </div>
                        ))}

                    </div>
                </div>
            </div>
            <div className="md:bg-[url('/map.png')] bg-gray-200 bg-[length:100%_100%] py-20">
                <div className="container mx-auto">
                    <div className="text-center max-w-[720px] mx-auto">
                        <h1 className='text-[50px] font-barlow font-semibold text-primary'>
                            {about?.content?.time?.title}
                        </h1>
                    </div>
                    <div className="grid items-center text-center grid-cols-1 lg:grid-cols-3 my-8 gap-6">
                        {about?.content?.time?.card?.map((item) => (
                            <div className="">
                                <div className="cursor-pointer h-[130px] w-[130px] mx-auto rounded-full justify-center items-center flex text-white duration-300 hover:shadow-[1px_8px_19px_7px_rgba(20,255,70,0.36)]">
                                    <img src={item?.image} className='' alt="" />
                                </div>
                                <h1 className='text-[24px] text-primary my-5 font-semibold'>
                                    {item?.title}
                                </h1>
                                <p className='text-secondaryText'>
                                    {item?.description}
                                </p>
                            </div>
                        ))}

                        
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page