import React from 'react'
import Banner from '../../components/common/banner'
import { FaCheck } from "react-icons/fa6";
import { MdOutlineTravelExplore } from "react-icons/md";


const page = () => {
    return (
        <div className="">
            <div className='relative'>
                <div className="h-[100vh] w-full fixed left-0 right-0 bottom-0 -z-10">
                    <img src="/banner.jpg" alt="" className=' w-full object-cover' />
                </div>
                <Banner title="About Us" page="About" />
                <div className=" bg-thm_gray ">
                    <div className="relative">
                        <div className="absolute top-0 lg:block hidden">
                            <img src="/leaf.png" alt="" />
                        </div>
                        <div className=" absolute top-10 left-[200px] lg:block hidden">
                            <img src="/sun.png" alt="" />
                        </div>
                        <div className="container mx-auto py-20 text-center relative z-10">
                            <div className="relative inline-block  mb-16">
                                <h1 className='uppercase font-barlow md:text-[100px] text-[60px] text-primary'>Enjoy your trips</h1>
                                <h2 className='font-satisfy md:text-[60px] text-[30px] text-[#ff0143] md:absolute -bottom-8 md:right-0 '>Like Never Before!</h2>
                            </div>

                            <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 ">
                                <div className="border-dashed p-2 bg-white border-primary border border-opacity-40">
                                    <img src="/gallery1.jpg" className='w-full h-full' alt="" />
                                </div>
                                <div className="border-dashed p-2 bg-white border-primary border border-opacity-40">
                                    <img src="/gallery1.jpg" className='w-full h-full' alt="" />
                                </div>
                                <div className="border-dashed p-2 bg-white border-primary border border-opacity-40">
                                    <img src="/gallery1.jpg" className='w-full h-full' alt="" />
                                </div>
                                <div className="border-dashed p-2 bg-white border-primary border border-opacity-40">
                                    <img src="/gallery1.jpg" className='w-full h-full' alt="" />
                                </div>
                                <div className="border-dashed p-2 bg-white border-primary border border-opacity-40">
                                    <img src="/gallery1.jpg" className='w-full h-full' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute right-0 top-1/2">
                            <img src="/plane.png" alt="" />
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
                                <h1 className='md:text-[50px] text-[30px] font-barlow font-bold text-primary'>Transforming Trips into Tales</h1>
                                <p className=' leading-[30px]'>Wilh. Loesch Travel was born from a legacy of exploration and a dedication to sharing the world's wonders with fellow wanderers. With expertise in the travel industry, our team curates immersive journeys that reflect our passion for adventure, culture and authenticity. Every trip we plan is a testament to our commitment to excellence and personalized service.</p>
                                <div className="my-6">
                                    <ul className=' text-secondaryText space-y-2'>
                                        <li className='text-[20px] flex items-center'><span className='text-secondary text-base mr-3'><FaCheck /></span> <p>Meticulously Planned Itineraries</p></li>
                                        <li className='text-[20px] flex items-center'><span className='text-secondary text-base mr-3'><FaCheck /></span> <p>Exclusive Tours & Sightseeing</p></li>
                                        <li className='text-[20px] flex items-center'><span className='text-secondary text-base mr-3'><FaCheck /></span> <p>Luxury Accommodations & Stays</p></li>
                                        <li className='text-[20px] flex items-center'><span className='text-secondary text-base mr-3'><FaCheck /></span> <p>Expert Guidance & Local Insights</p></li>
                                        <li className='text-[20px] flex items-center'><span className='text-secondary text-base mr-3'><FaCheck /></span> <p>Personalized Concierge Services</p></li>
                                        <li className='text-[20px] flex items-center'><span className='text-secondary text-base mr-3'><FaCheck /></span> <p>Private Transport Arrangements</p></li>
                                        <li className='text-[20px] flex items-center'><span className='text-secondary text-base mr-3'><FaCheck /></span> <p>Curated Dining Experiences</p></li>
                                        <li className='text-[20px] flex items-center'><span className='text-secondary text-base mr-3'><FaCheck /></span> <p>Curated Dining Experiences</p></li>
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
                        <h1 className='md:text-[50px] text-[30px] font-barlow font-semibold text-primary'>Our partnership with Makhan Bhog</h1>
                        <p className='leading-[25px] text-secondaryText py-3'>Our partnership with Makhan Bhog, founded in 2019, epitomizes our steadfast commitment to excellence. This esteemed alliance signifies our dedication to delivering unmatched destination management services with extraordinary experiences.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-8 mx-auto gap-5">
                        <div className="mx-auto">
                            <img src="/brand1.png" className='' alt="" />
                        </div>
                        <div className="md:my-0 my-5 mx-auto">
                            <img src="/brand2.png" className='' alt="" />
                        </div>
                        <div className="mx-auto ">
                            <img src="/brand3.png" className='' alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:bg-[url('/map.png')] bg-gray-200 bg-[length:100%_100%] py-20">
                <div className="container mx-auto">
                    <div className="text-center max-w-[720px] mx-auto">
                        <h1 className='text-[50px] font-barlow font-semibold text-primary'>Time to Pack and Travel!</h1>
                    </div>
                    <div className="grid items-center text-center grid-cols-1 lg:grid-cols-3 my-8 gap-6">
                        <div className="">
                           <div className="cursor-pointer h-[130px] w-[130px] mx-auto rounded-full justify-center items-center flex text-white bg-[#6ebd32] duration-300 hover:shadow-[1px_8px_19px_7px_rgba(20,255,70,0.36)]">
                                <span className='text-[80px]'><MdOutlineTravelExplore /></span>
                           </div>
                           <h1 className='text-[24px] text-primary my-5 font-semibold'>verety</h1>
                           <p className='text-secondaryText'>Explore diverse destinations, from vibrant  cities to serene natural wonders, for a personalized kaleidoscope of travel experiences.</p>
                        </div>
                        <div className="">
                           <div className="cursor-pointer h-[130px] w-[130px] mx-auto rounded-full justify-center items-center flex text-white bg-secondary duration-300 hover:shadow-[1px_8px_19px_7px_rgba(222,33,67,0.29)]">
                           <span className='text-[80px]'><MdOutlineTravelExplore /></span>

                           </div>
                           <h1 className='text-[24px] text-primary my-5 font-semibold'>verety</h1>
                           <p className='text-secondaryText'>Explore diverse destinations, from vibrant  cities to serene natural wonders, for a personalized kaleidoscope of travel experiences.</p>
                        </div>
                        <div className="">
                           <div className="cursor-pointer h-[130px] w-[130px] mx-auto rounded-full justify-center items-center flex text-white bg-[#40b9eb] duration-300 hover:shadow-[1px_8px_19px_7px_rgba(0,142,222,0.29)]">
                           <span className='text-[80px]'><MdOutlineTravelExplore /></span>

                           </div>
                           <h1 className='text-[24px] text-primary my-5 font-semibold'>verety</h1>
                           <p className='text-secondaryText'>Explore diverse destinations, from vibrant  cities to serene natural wonders, for a personalized kaleidoscope of travel experiences.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default page