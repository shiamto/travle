"use client"
import React, { useEffect, useState } from 'react'
import { IoFilter } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { Form, Modal, Slider } from 'antd';
import TourCard from '../../components/frontend/TourCard';
import Banner from '../../components/common/banner';
import { fetchTourList } from "../../helpers/backend";

const onChangeComplete = (value) => {
    console.log('onChangeComplete: ', value);
};

const tours = [
    {
        id: 1,
        title: 'Usa East And West Coast',
        image: "/banner.jpg",
        price: 20000,
        country: 1,
        city: 5,
        tag: "U3",
        duration: "12N/13D",
        month: [
            "jan",
            "apr",
            "may",
            "jun",
            "jul",
            "aug",
            "oct",
            "nov",
            "dec"
        ]
    },
    {
        id: 2,
        title: 'Usa East And West Coast',
        image: "/gallery-1.jpg",
        price: 20000,
        country: 1,
        city: 5,
        tag: "U3",
        duration: "12N/13D",
        month: [
            "feb",
            "mar",
            "may",
            "jun",
            "jul",
            "aug",
            "nov",
            "dec"
        ]
    }
]

const page = () => {
    const [durationActive, setdurationActive] = useState(false);
    const [depratureActive, setDepratureActive] = useState(true);
    const [itours, setItours] = useState(false);
    const [price, setPrice] = useState(false);
    const [min, setmin] = useState(2);
    const [max, setmax] = useState(20);
    const [pmin, setpmin] = useState(1000);
    const [pmax, setpmax] = useState(50000);

    const [tourList, setTourList] = useState(null)

    useEffect(() => {
        fetchTourList().then(({ success, data }) => {
            if (success === true) {
                setTourList(data)
            }
        })
    }, [])
    console.log(tourList);

    return (
        <div className=''>
            <div className="relative">
                <div className="w-full fixed -top-[100px] left-0 right-0 bottom-0 -z-10">
                    <img src="/banner.jpg" alt="" className='h-full w-full object-cover' />
                </div>
                <Banner title="Tours" page="tours" />
                <div className="bg-white py-20">
                    <div className="container mx-auto">
                        <div className="">
                            <h1 className='text-2xl font-semibold'>Afica Tour Package</h1>

                        </div>
                        <div className="" >
                            {/* <div className="md:min-w-[320px]">
                            <div className="text-[1.3rem] text-white bg-secondary px-5 py-4 flex items-center font-semibold rounded-md">
                                <IoFilter className='mr-3 text-2xl' />
                                <p>Sort & Filter</p>
                            </div>
                            <div className="border border-gray-300 my-5">
                                <div className="">
                                    <div className="flex justify-between items-center px-6 py-3 text-xl font-normal text-primary" onClick={() => setdurationActive(!durationActive)}>
                                        <h1>Duration</h1>
                                        <FaAngleDown className={`text-gray-500 cursor-pointer duration-300 ${durationActive && "rotate-[180deg]"}`} />
                                    </div>
                                    {
                                        durationActive && <div className="px-5">
                                            <div className="">
                                                <div className="flex justify-between items-center text-[14px]">
                                                    <h1 className='font-semibold'>Min. <span className='font-normal ms-1'>{min} days</span></h1>
                                                    <h1 className='font-semibold'>Max. <span className='font-normal ms-1'>{max} days</span></h1>
                                                </div>
                                            </div>
                                            <div className="my-7">
                                                <Slider
                                                    range
                                                    step={1}
                                                    defaultValue={[2, 20]}
                                                    min={2}
                                                    max={20}
                                                    onChange={(value) => {
                                                        setmin(value[0]);
                                                        setmax(value[1]);
                                                    }}
                                                    onChangeComplete={onChangeComplete}
                                                />
                                            </div>
                                        </div>
                                    }


                                </div>
                                <div className="border-t">
                                    <div className="flex justify-between items-center px-6 py-3 text-xl font-normal text-primary" onClick={() => setDepratureActive(!depratureActive)}>
                                        <h1>Departure Date</h1>
                                        <FaAngleDown className={`text-gray-500 cursor-pointer duration-300 ${depratureActive && "rotate-[180deg]"}`} />
                                    </div>
                                    {
                                        depratureActive && <div className="px-5">

                                            <div className="">
                                                <div className="flex justify-between items-center my-4">
                                                    <div className=" flex justify-center items-center">
                                                        <input type="checkbox" className='largerCheckbox mr-2' name='date' />
                                                        <label htmlFor="">January-2024</label>
                                                    </div>
                                                    <div className="">
                                                        <span className='text-[12px]'>20+</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center my-4">
                                                    <div className=" flex justify-center items-center">
                                                        <input type="checkbox" className='largerCheckbox mr-2' name='date' />
                                                        <label htmlFor="">January-2024</label>
                                                    </div>
                                                    <div className="">
                                                        <span className='text-[12px]'>20+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }


                                </div>
                                <div className="border-t">
                                    <div className="flex justify-between items-center px-6 py-3 text-xl font-normal text-primary" onClick={() => setItours(!itours)}>
                                        <h1>India Tour</h1>
                                        <FaAngleDown className={`text-gray-500 cursor-pointer duration-300 ${itours && "rotate-[180deg]"}`} />
                                    </div>
                                    {
                                        itours && <div className="px-5">
                                            <div className="">
                                                <div className="flex justify-between items-center my-4">
                                                    <div className=" flex justify-center items-center">
                                                        <input type="checkbox" className='largerCheckbox mr-2' name='date' />
                                                        <label htmlFor="">Andaman</label>
                                                    </div>
                                                    <div className="">
                                                        <span className='text-[12px]'>20+</span>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between items-center my-4">
                                                    <div className=" flex justify-center items-center">
                                                        <input type="checkbox" className='largerCheckbox mr-2' name='date' />
                                                        <label htmlFor="">Andhra Pradesh</label>
                                                    </div>
                                                    <div className="">
                                                        <span className='text-[12px]'>20+</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    }


                                </div>
                                <div className="border-t">
                                    <div className="flex justify-between items-center px-6 py-3 text-xl font-normal text-primary" onClick={() => setPrice(!price)}>
                                        <h1>Price</h1>
                                        <FaAngleDown className={`text-gray-500 cursor-pointer duration-300 ${price && "rotate-[180deg]"}`} />
                                    </div>
                                    {
                                        price && <div className="px-5">
                                            <div className="">
                                                <div className="flex justify-between items-center text-[14px]">
                                                    <h1 className='font-semibold'>Min. <span className='font-normal ms-1'> ₹{pmin} </span></h1>
                                                    <h1 className='font-semibold'>Max. <span className='font-normal ms-1'> ₹{pmax}</span></h1>
                                                </div>
                                            </div>
                                            <div className="my-7">
                                                <Slider
                                                    range
                                                    step={1000}
                                                    defaultValue={[1000, 50000]}
                                                    min={1000}
                                                    max={50000}
                                                    onChange={(value) => {
                                                        setpmin(value[0]);
                                                        setpmax(value[1]);
                                                    }}
                                                    onChangeComplete={onChangeComplete}
                                                />
                                            </div>
                                        </div>
                                    }


                                </div>
                            </div>
                        </div> */}
                            <div className=" py-10">
                                {
                                    tourList?.map((tour, i) => (
                                        <TourCard key={tour?.id} item={tour} />
                                    ))
                                }

                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default page