"use client";
import React, { useEffect, useState } from 'react';
import { fetchAdminTourDetails } from '../../../../helpers/backend';
import { Carousel } from 'antd';
import Button from '../../../../components/common/button';
import { CiPhone, CiTimer } from 'react-icons/ci';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { BsCheck2Circle } from "react-icons/bs";

const AdminTourDetails = ({ params }) => {
    const [tour, setTour] = useState()
    const [tab, setTab] = useState("details")
    const [details, setDetails] = useState(true)
    const [high, setHigh] = useState(false);
    const [itinerary, setItinerary] = useState(false);
    const [hotels, setHotels] = useState(false);
    useEffect(() => {
        getProduct()
    }, [])
    const getProduct = () => {
        fetchAdminTourDetails(params.id).then(({ success, data }) => {
            if (success) {
                setTour(data)
            }
        })
    }

    console.log("product ---", tour)
    return (
        <div>
            <div className='relative'>
                <div className=" bg-white py-20">
                    <div className="container">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8">
                            <div className="col-span-2">
                                <Carousel autoplay prevArrow={<Button className="carousel-arrow" icon={<FiChevronLeft />} />} nextArrow={<Button className="carousel-arrow" icon={<FiChevronRight />} />}>
                                    {
                                        tour?.images?.map((item, index) =>
                                            <div key={index}>
                                                <img src={item} alt="" className='rounded-xl w-full lg:h-[420px] object-cover h-[290px] shadow-lg' />
                                            </div>
                                        )
                                    }

                                </Carousel>

                                <div className="flex justify-between w-auto p-4 mt-12 bg-white border border-gray-200 rounded-lg shadow-lg overflow-scroll md:overflow-hidden gap-x-8">
                                    <p className={`text-lg cursor-pointer font-semibold text-gray-800 inline-block ${details && 'border-b-2 border-secondary inline-block'}`} onClick={() => { setDetails(true); setHigh(false); setItinerary(false); setHotels(false) }}> Tour Details</p>
                                    <p className={`text-lg cursor-pointer font-semibold text-gray-800 inline-block ${high && 'border-b-2 border-secondary inline-block'}`} onClick={() => { setDetails(false); setHigh(true); setItinerary(false); setHotels(false) }}>Highlights</p>
                                    <p className={`text-lg cursor-pointer font-semibold text-gray-800 inline-block ${itinerary && 'border-b-2 border-secondary inline-block'}`} onClick={() => { setDetails(false); setHigh(false); setItinerary(true); setHotels(false) }}>Itinerary</p>
                                    <p className={`text-lg cursor-pointer font-semibold text-gray-800 inline-block ${hotels && 'border-b-2 border-secondary inline-block'}`} onClick={() => { setDetails(false); setHigh(false); setItinerary(false); setHotels(true) }}>Hotels</p>
                                </div>

                                <div className='mt-8'>
                                    {details && <div className="">
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
                                    </div>}

                                    {high && <div className="">{tour?.highlights}</div>}

                                    {itinerary &&
                                        <div className="">
                                            <h1 className='text-2xl mb-5 text-primary'>Tour Itinerary</h1>
                                            <div className="flex gap-6">{
                                                tour?.itineraries?.map((item, index) => {
                                                    return (
                                                        <div key={index} className="flex items-center gap-x-2">
                                                            <div className="bg-secondary text-white py-2 px-4 rounded-full">
                                                                <p>Month {item?.month}</p>
                                                            </div>
                                                            <div className="text-secondary">
                                                                {
                                                                    item?.dates?.map((item, index) => {
                                                                        return (
                                                                            <div key={index}>
                                                                                <p className='text-primary'>{item?.departure_place}</p>
                                                                                <p className='text-primary'>{item?.days}</p>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </div>
                                                    )
                                                })
                                            }
                                            </div>
                                        </div>
                                    }

                                    {hotels && <div className="">
                                        <h1 className='text-2xl mb-5 text-primary'>Hotels</h1>
                                        <table className='table border text-center w-full'>
                                            <thead>
                                                <tr>
                                                    <th>Place</th>
                                                    <th>Hotel</th>
                                                    <th>night</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    tour?.hotels?.map((hotel, index) => {
                                                        return (
                                                            <tr key={index} className='border'>
                                                                <td className='border'>{hotel?.place}</td>
                                                                <td>{hotel?.name}</td>
                                                                <td>{hotel?.nights}</td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>}

                                </div>
                            </div>

                            <div className="col-span-1 mt-4 md:mt-0">
                                <div className="flex flex-col">
                                    <div className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
                                        <h2 className="text-2xl font-semibold text-gray-800">{tour?.name}</h2>
                                        <p className='text-md mt-1  text-secondary'>{tour?.duration}</p>
                                        <p className='text-base mt-1  text-primary'>Starts and End City : <span className='text-base font-semibold text-primary'>Mumbai</span></p>

                                        <p className='text-sm font-semibold text-primary'>Offer Name: {tour?.offer_name}</p>
                                        <p className='py-2 text-sm font-semibold text-primary'>Offer Price: {tour?.offer_price}</p>

                                        <h5 className="text-sm font-bold tracking-tight">Start Price: {tour?.start_price}</h5>
                                        <div className='flex py-1 gap-x-2 items-center'>
                                            <CiTimer size={20} />
                                            <p className='text-sm text-primary mt-3'>
                                                <span className='text-secondary text-sm text-semibold'>
                                                    {tour?.notes}
                                                </span>
                                            </p>
                                        </div>
                                        <div className='flex mt-2 gap-x-2 items-center'>
                                            <p className='text-sm text-primary'>
                                                <span className='text-secondary text-sm text-semibold'>
                                                    {tour?.highlights}
                                                </span>
                                            </p>
                                        </div>

                                        <button className="block w-full py-3 mt-4 text-center text-white bg-secondary rounded-lg hover:bg-secondary focus:bg-secondary transform transition duration-300 ease-in-out hover:-translate-y-2"> Book Now </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AdminTourDetails;