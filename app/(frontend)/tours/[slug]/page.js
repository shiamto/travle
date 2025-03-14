"use client";
import React, { useEffect, useState } from 'react';
import Banner from '../../../components/common/banner';
import { Carousel, Button, Collapse } from 'antd';
import { CiPhone, CiTimer } from 'react-icons/ci';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { BsCheck2Circle } from "react-icons/bs";
import { fetchTour } from '../../../helpers/backend';
const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items = [
  {
    key: '1',
    label: 'This is panel header 1',
    children: <p>{text}</p>,
  },
  {
    key: '2',
    label: 'This is panel header 2',
    children: <p>{text}</p>,
  },
  {
    key: '3',
    label: 'This is panel header 3',
    children: <p>{text}</p>,
  },
];
const TourDetails = ({ params }) => {
    const slug = params.slug;
    const [tour, setTour] = useState(null)
    const [tab, setTab] = useState("details")
    const [details, setDetails] = useState(false)
    const [high, setHigh] = useState(false);
    const [itinerary, setItinerary] = useState(true);
    const [hotels, setHotels] = useState(false);

    useEffect(() => {
        fetchTour(slug).then(({ success, data }) => {
            if (success === true) {
                setTour(data)
            }
        })
    }, [])

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
                                    {
                                        tour?.images?.map((item, index) =>
                                            <div key={index}>
                                                <img src={item} alt="" className='rounded-xl w-full lg:h-[420px] object-cover h-[290px] shadow-lg' />
                                            </div>
                                        )
                                    }

                                </Carousel>

                                <div className="flex justify-between w-auto p-4 mt-12 bg-white border border-gray-200 rounded-lg shadow-lg overflow-scroll md:overflow-hidden gap-x-8">

                                    <p className={`text-lg cursor-pointer font-semibold text-gray-800 inline-block ${high && 'border-b-2 border-secondary inline-block'}`} onClick={() => { setDetails(false); setHigh(true); setItinerary(false); setHotels(false) }}>Highlights</p>
                                    <p className={`text-lg cursor-pointer font-semibold text-gray-800 inline-block ${itinerary && 'border-b-2 border-secondary inline-block'}`} onClick={() => { setDetails(false); setHigh(false); setItinerary(true); setHotels(false) }}>Itinerary</p>
                                    <p className={`text-lg cursor-pointer font-semibold text-gray-800 inline-block ${hotels && 'border-b-2 border-secondary inline-block'}`} onClick={() => { setDetails(false); setHigh(false); setItinerary(false); setHotels(true) }}>Hotels</p>
                                    <p className={`text-lg cursor-pointer font-semibold text-gray-800 inline-block ${details && 'border-b-2 border-secondary inline-block'}`} onClick={() => { setDetails(true); setHigh(false); setItinerary(false); setHotels(false) }}> Departure Date</p>

                                </div>

                                <div className='mt-8'>
                                    {details && <div className="">
                                    
                                    </div>}
                                    {high && <div className="">{tour?.highlights}</div>}
                                    {itinerary && <div className="">
                                        <h1 className='text-2xl mb-5 text-primary'>Tour Itinerary</h1>
                                        <div className="flex gap-6">
                                            <div className="inline-block bg-secondary text-white py-2 px-4 rounded-full">
                                                <p>Jul 14, 2023 to Mar 31, 2024</p>
                                            </div>
                                            <div className="inline-block border border-secondary text-secondary py-2 px-4 rounded-full">
                                                <p>Jul 14, 2023 to Mar 31, 2024</p>
                                            </div>
                                        </div>
                                        <div className="">
                                            <div className="">
                                                9 Days * Nights 9 Cities 1 Country
                                            </div>
                                            <div className="">
                                            <Collapse items={items} defaultActiveKey={['1']}  />
                                            </div>
                                        </div>
                                    </div>}
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
                                    <h2 className="text-2xl font-semibold text-gray-800">{tour?.name}</h2>
                                    <p className='text-md mt-1  text-secondary'>{tour?.duration}</p>
                                    <p className='text-base mt-1  text-primary'>Starts and End City : <span className='text-base font-semibold text-primary'>Mumbai</span></p>
                                    <div className='py-4'>

                                        <a href="#" className="block max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow-lg">
                                            <p className='text-sm font-semibold text-primary'>Starting From</p>
                                            <h5 className="py-2 text-4xl font-bold tracking-tight text-secondary">₹{tour?.start_price}*</h5>
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