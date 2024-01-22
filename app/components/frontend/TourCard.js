import { Form, Modal } from 'antd';
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBed, FaCamera, FaPlane, FaTrain } from 'react-icons/fa6'
import { ImSpoonKnife } from 'react-icons/im'

const TourCard = ({ item }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <div className="md:flex justify-between rounded-md mb-5" style={{ boxShadow: "0 0 12px #00000026" }}>
            <div className="w-full basis-1/3">
                <img src={item.image} className='w-full h-full' alt="" />
            </div>
            <div className="p-5 basis-2/3 ">
                <h1 className='text-secondary font-semibold'>Explorer <span className='bg-secondary text-white ms-2 rounded-sm p-1'>{item?.tag}</span></h1>
                <div className="my-2">
                    <Link href='/tours/details' className='text-2xl hover:text-secondary text-ellipsis overflow-hidden whitespace- '>{item?.title}</Link>
                </div>
                <div className="">
                    <div className="flex">
                        <h1 className='mr-2 text-[14px]'> <span className='font-semibold'>{item?.city}</span> Cities</h1>
                        <h1 className='text-[14px] mr-4'><span className='font-semibold'>{item?.country}</span> Country</h1>
                    </div>

                    <div className=" inline-block space-x-2 space-y-2">
                        {
                            item?.month?.map((val) => (
                                <div className="inline-block border p-1 text-[14px]">{val}</div>
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
                        <h1 className='text-[20px] font-semibold'>₹{item.price}</h1>
                    </div>
                </div>
                <div className="text-center mt-5 md:block flex flex-col">
                    <button onClick={showModal} className='hover:bg-secondary border-secondary border rounded-md hover:text-white text-secondary px-4 py-2 duration-300 mb-5  text-center'>Enquire Now</button>
                    <button className='bg-secondary text-white px-4 py-2  text-center rounded-md hover:opacity-90'>View Details</button>
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
        </div>
    )
}

export default TourCard