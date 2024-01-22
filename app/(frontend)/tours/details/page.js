"use client";
import React, { useState } from 'react';
import Banner from '../../../components/common/banner';
import { Carousel, Button } from 'antd';
import { CiPhone, CiTimer } from 'react-icons/ci';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { BsCheck2Circle } from "react-icons/bs";



const TourDetails = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    return (
        <>
            <div className='relative'>
                <div className="w-full fixed -top-[100px] left-0 right-0 bottom-0 -z-10">
                    <img src="/banner.jpg" alt="" className='h-full w-full object-cover' />
                </div>
                <Banner title="Tour Details" page="Details" />
                <div className=" bg-white py-20">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
                            <div className="col-span-2">
                                <Carousel autoplay prevArrow={<Button className="carousel-arrow" icon={<FiChevronLeft />} />} nextArrow={<Button className="carousel-arrow" icon={<FiChevronRight />} />}>
                                    <div>
                                        <img src="../td1.jpg" alt="" className='rounded-xl w-full lg:h-[420px] object-cover h-[290px] shadow-lg' />
                                    </div>
                                    <div>
                                        <img src="../td2.jpg" alt="" className='rounded-xl w-full lg:h-[420px] object-cover h-[290px] shadow-lg' />
                                    </div>
                                    <div>
                                        <img src="../td3.jpg" alt="" className='rounded-xl w-full lg:h-[420px] object-cover h-[290px] shadow-lg' />
                                    </div>
                                    <div>
                                        <img src="../td5.jpg" alt="" className='rounded-xl w-full lg:h-[420px] object-cover h-[290px] shadow-lg' />
                                    </div>
                                </Carousel>

                                <div className="flex w-auto p-4 mt-12 bg-white border border-gray-200 rounded-lg shadow-lg overflow-scroll md:overflow-hidden gap-x-8">
                                    <div className='basis-1/4'>
                                        <p className='text-lg font-semibold text-gray-800 border-b-2 border-secondary inline-block whitespace-pre'>
                                            Tour Details
                                        </p>
                                    </div>
                                    <p className='text-lg font-semibold text-gray-800 inline-block basis-1/4'>Highlights</p>
                                    <p className='text-lg font-semibold text-gray-800 inline-block basis-1/4'>Itinerary</p>
                                    <p className='text-lg font-semibold text-gray-800 inline-block basis-1/4'>Hotels</p>
                                </div>

                                <div className='mt-8'>
                                    <h2 className="text-xl font-semibold text-gray-800">Details</h2>
                                    <div className="flex items-center gap-x-2 py-1 2">
                                        <BsCheck2Circle size={18} />
                                        <p className='text-sm text-primary'>Great Pyramids of Giza and also get a chance to enter the second Pyramid to see what lies inside.</p>
                                    </div>
                                    <div className="flex items-center gap-x-2 py-1">
                                        <BsCheck2Circle size={18} />
                                        <p className='text-sm text-primary'>Photograph yourself in the background of the giant figure of Sphinx.</p>
                                    </div>
                                    <div className="flex items-center gap-x-2 py-1">
                                        <BsCheck2Circle size={18} />
                                        <p className='text-sm text-primary'>Experience Life on water as you enjoy 3N on the famous Nile Cruise.</p>
                                    </div>
                                    <div className="flex items-center gap-x-2 py-1">
                                        <BsCheck2Circle size={18} />
                                        <p className='text-sm text-primary'>Kom Ombo Temple - An unusual double temple in the town of Kom Ombo.</p>
                                    </div>
                                    <div className="flex items-center gap-x-2 py-1">
                                        <BsCheck2Circle size={18} />
                                        <p className='text-sm text-primary'>Edfu Temple - One of the best preserved shrines in Egypt.</p>
                                    </div>
                                    <div className="flex items-center gap-x-2 py-1">
                                        <BsCheck2Circle size={18} />
                                        <p className='text-sm text-primary'>Enter in the Tomb of Tutunkhamun in Valley of the Kings - A Spectacular mummy over 3,300 years old.</p>
                                    </div>
                                    <div className="flex items-center gap-x-2 py-1">
                                        <BsCheck2Circle size={18} />
                                        <p className='text-sm text-primary'>Shopping at the bustling Khan El Khalili bazaar.</p>
                                    </div>
                                    <div className="flex items-center gap-x-2 py-1">
                                        <BsCheck2Circle size={18} />
                                        <p className='text-sm text-primary'>Egyptian Museum - home to an extensive collection of ancient Egyptian antiquities.</p>
                                    </div>
                                    <div className="flex items-center gap-x-2 py-1">
                                        <BsCheck2Circle size={18} />
                                        <p className='text-sm text-primary'>Dolphin Watching at Hurghada.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-span-1 mt-4 md:mt-0">
                                <div className="flex flex-col">
                                    <h2 className="text-2xl font-semibold text-gray-800">Egypt with Hurghada</h2>
                                    <p className='text-md mt-1  text-secondary'>8N/9D</p>
                                    <p className='text-base mt-1  text-primary'>Starts and End City : <span className='text-base font-semibold text-primary'>Mumbai</span></p>
                                    <div className='py-4'>

                                        <a href="#" className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
                                            <p className='text-sm font-semibold text-primary'>Starting From</p>
                                            <h5 className="py-2 text-4xl font-bold tracking-tight text-secondary">₹170,000*</h5>
                                            <div className='flex py-1 gap-x-2 items-center'>
                                                <CiTimer size={20} />
                                                <p className='text-sm text-primary mt-3'>
                                                    Comprehensive <span className='text-secondary text-sm text-semibold'>
                                                        Tour Price Inclusions and Exclusions
                                                    </span>
                                                </p>
                                            </div>
                                            <div className='flex mt-2 gap-x-2 items-center'>
                                                <CiPhone size={20} />
                                                <p className='text-sm text-primary'>
                                                    Call us for details <span className='text-secondary text-sm text-semibold'>
                                                        +91 9876543210
                                                    </span>
                                                </p>
                                            </div>

                                            <button className="block w-full py-3 mt-4 text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:bg-secondary transform transition duration-300 ease-in-out hover:-translate-y-2"> Book Now </button>
                                        </a>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </>
    );
};

export default TourDetails;