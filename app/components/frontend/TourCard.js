import { Form, Modal } from 'antd';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBed, FaCamera, FaPlane, FaTrain } from 'react-icons/fa6'
import { ImSpoonKnife } from 'react-icons/im'

const TourCard = ({ item }) => {
    console.log(item)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [emailm, setEmailm] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const [selectedMonth, setSelectedMonth] = useState(false);
    const [data, setData] = useState([])
    const [dateModal, setDateModal] = useState(false);
    console.log("🚀  TourCard  data:", data)


    const openModal = (month) => {
        setSelectedMonth(month);
        // check which month is selected . show the dates under that month
        if (item?.itineraries?.length > 0) {
            const itineraries = item?.itineraries?.filter((val) => val?.month === month);
            setData(itineraries);
            setDateModal(true);
            const dates = itineraries?.map((val) => val?.dates);
            console.log("dates", dates);
            console.log("itineraries", itineraries);
        }
    };

    return (
        <div className="md:flex justify-between items-center rounded-md mb-6" style={{ boxShadow: "0 0 12px #00000026" }}>
            <div className="md:w-[400px] p-6">
                <img src={item.image} className='w-full h-full' alt="" />
            </div>
            <div className="p-5 basis-2/3 ">
                <h1 className='text-secondary font-semibold'>Explorer <span className='bg-secondary text-white ms-2 rounded-sm p-1'>{item?.explorer}</span></h1>
                <div className="my-2">
                    <Link href={`/tours/${item?.slug}`} className='text-2xl hover:text-secondary text-ellipsis overflow-hidden whitespace- '>{item?.name}</Link>
                </div>
                <div className="">
                    <div className="flex">
                        <h1 className='mr-2 text-[14px]'> <span className='font-semibold'>{item?.duration_details?.cities}</span> Cities</h1>
                        <h1 className='text-[14px] mr-4'><span className='font-semibold'>{item?.duration_details?.countries}</span> Country</h1>
                    </div>
                    {/* 
                    <div className=" inline-block space-x-2 space-y-2">
                        {
                            item?.itineraries?.map((val, i) => (
                                <div key={i} className="inline-block border p-1 text-[14px]">{val?.month}</div>
                            ))
                        }
                    </div> */}

                    <div className=" inline-block space-x-2 space-y-2">
                        {
                            item?.itineraries?.map((val, i) => (
                                <div key={i} onClick={() => openModal(val?.month)} className="inline-block hover:border-secondary cursor-pointer border p-1 text-[14px]"> {val?.month}</div>
                            ))
                        }
                    </div>

                </div>
                <div className=" text-lg mt-3">
                    <div className="inline-block p-2 rounded-full text-secondary bg-gray-100 mr-2">
                        <FaBed />
                    </div>
                    <div className="inline-block p-2 rounded-full text-secondary bg-gray-100 mr-2">
                        <ImSpoonKnife />
                    </div>
                    <div className="inline-block p-2 rounded-full text-secondary bg-gray-100 mr-2">
                        <FaCamera />
                    </div>
                    <div className="inline-block p-2 rounded-full text-secondary bg-gray-100 mr-2">
                        <FaTrain />
                    </div>
                    <div className="inline-block p-2 rounded-full text-secondary bg-gray-100 mr-2">
                        <FaPlane />
                    </div>
                </div>
            </div>
            <div className="p-5 basis-1/3">
                <div className="flex gap-4">
                    <div className="">
                        <h1 className='text-[14px] text-secondaryText'>Tour Duration</h1>
                        <h1 className='text-[15px] font-semibold'>{item.duration}</h1>
                    </div>
                    <div className="">
                        <h1 className='text-[14px] text-secondaryText'>Start From</h1>
                        <h1 className='text-[20px] font-semibold'>₹{item.start_price}</h1>
                    </div>
                </div>
                <div className="text-center mt-5 ">
                    <div className="w-full">
                        <button onClick={showModal} className='w-full hover:bg-secondary border-secondary border rounded-md hover:text-white text-secondary px-4 py-2 duration-300 mb-5  text-center'>Enquire Now</button>
                    </div>
                    <div className="flex gap-5">
                        <a href={`/tours/${item?.slug}`} className='w-full bg-secondary text-white px-4 py-2  text-center rounded-md hover:opacity-90'>View Details</a>
                        <button onClick={() => setEmailm(!emailm)} className='w-full bg-secondary text-white px-4 py-2  text-center rounded-md hover:opacity-90'>Email Itinerary</button>
                    </div>


                </div>

            </div>
            <Modal title="Enquiry Now" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null}>
                <Form>
                    <div className="flex flex-col md:flex-row gap-5">
                        <input type="text" name='name' placeholder='Your Name' className='text-secondaryText border-gray-300 text-lg outline-none border px-4 py-4 w-full' />
                        <input type="text" name='email' placeholder='Email Address' className='text-secondaryText border-gray-300 text-lg outline-none border px-4 py-4 w-full' />
                    </div>
                    <div className="flex flex-col md:flex-row gap-5 my-4">
                        <input type="text" name='number ' placeholder='phone' className='text-secondaryText border-gray-300 text-lg outline-none border px-4 py-4 w-full' />
                        <input type="text" name='text' placeholder='Current City' className='text-secondaryText border-gray-300 text-lg outline-none border px-4 py-4 w-full' />
                    </div>
                    <textarea name="" id="" cols="30" className='text-secondaryText border-gray-300 text-lg outline-none border px-4 py-4 w-full' placeholder='Write Qeuestions'></textarea>
                    <button className="btn btn-secondary mt-4 bg-[#ffa801] hover:bg-[#40b9eb] duration-300 text-white text-2xl px-5 py-2">Send Question</button>
                </Form>
            </Modal>
            <Modal title="Email Itinerary" open={emailm} onCancel={() => setEmailm(!emailm)} footer={null}>
                <Form>
                    <p>Get all the details for the Egypt With Hurghada tour package straight to your inbox.</p>
                    <div className="flex flex-col md:flex-row gap-5">
                        <input type="email" name='email' placeholder='Email Address' className='text-secondaryText border-gray-300 text-lg outline-none border px-4 py-4 w-full' />
                    </div>

                    <button className="btn btn-secondary mt-4 bg-[#ffa801] hover:bg-[#40b9eb] duration-300 text-white text-2xl px-5 py-2">Submit</button>
                </Form>
            </Modal>

            {selectedMonth && (
                <Modal
                    title={`Tour Itinerary for ${selectedMonth}`}
                    open={dateModal}
                    onOk={() => setDateModal(false)}
                    onCancel={() => setDateModal(false)}
                    footer={null}
                >
                    <div className="flex flex-col gap-5">
                        {data?.map((itinerary, index) => (
                            <div key={index} className="flex flex-col gap-5">
                                {itinerary?.dates?.map((date, i) => (

                                    <div key={i} className="bg-[#F5F5F7] h-auto rounded-md">
                                        {/* <div key={i} className="flex gap-5">
                                        <div className="w-1/3">
                                            <p className="text-secondaryText">{date?.from}</p>
                                        </div>
                                        <div className="w-2/3">
                                            <h1 className="text-2xl font-semibold">{date?.departure_place}</h1>
                                            <p>{date?.to}</p>
                                        </div>
                                    </div> */}

                                        <div className="grid grid-cols-1 lg:grid-cols-3 p-4 gap-x-4">
                                            <div>
                                                <h1 className='text-md text-primary'>{date?.from}</h1>
                                                <p className='text-xl font-semibold text-primary'>{date?.departure_place}</p>
                                            </div>
                                            <div>
                                                <h1 className='lg:pl-10 text-secondary text-sm'>{date?.days} Days</h1>
                                                <img src='../journay.png' alt='journey' />
                                            </div>
                                            <div>
                                                <h1 className='text-md text-primary'>{date?.to}</h1>
                                                <p className='text-xl font-semibold text-primary'>{date?.departure_place}</p>
                                            </div>
                                        </div>

                                    </div>
                                ))}

                            </div>
                        ))}
                    </div>
                </Modal>
            )}
        </div>
    )
}

export default TourCard