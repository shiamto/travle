import React from 'react'
import Banner from '../../components/common/banner'
import { FaLocationDot, FaPhoneVolume } from "react-icons/fa6";
import { IoMailOpenOutline } from "react-icons/io5";
import { Form } from 'antd';

const page = () => {
    return (
        <div className='relative'>
            <div className="h-[100vh] w-full fixed -top-[100px] left-0 right-0 bottom-0 -z-10">
                <img src="/contact.jpg" alt="" className='h-full w-full object-cover' />
            </div>
            <Banner title="Contact Us" page="Contact" />
            <div className=" bg-white">
                <div className="container mx-auto py-20">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                        <div className="flex justify-center items-center border md:p-10 p-5  hover:shadow-[1px_2px_10px_0px_rgba(0,0,0,0.2)]">
                            <div className="bg-secondary text-white h-[60px] min-w-[60px] rounded-full flex items-center justify-center mr-5">
                                <span className='text-2xl'><FaLocationDot /></span>
                            </div>
                            <div className="">
                                <p>50 Trang Thi, P. Hang Bong, Quan Hoan Kiem, Hanoi</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center border md:p-10 p-5  hover:shadow-[1px_2px_10px_0px_rgba(0,0,0,0.2)] duration-300 ">
                            <div className="bg-[#6ebd32] text-white h-[60px] min-w-[60px] rounded-full flex items-center justify-center mr-5">
                                <span className='text-2xl'><FaPhoneVolume /></span>
                            </div>
                            <div className="">
                                <p>Mobile: +84 584072398</p>
                            </div>
                        </div>
                        <div className="flex justify-center items-center border md:p-10 p-5  hover:shadow-[1px_2px_10px_0px_rgba(0,0,0,0.2)] duration-300 ">
                            <div className="bg-[#40b9eb] text-white h-[60px] min-w-[60px] rounded-full flex items-center justify-center mr-5">
                                <span className='text-2xl'><IoMailOpenOutline /></span>
                            </div>
                            <div className="">
                                <p>travel@wilhloesch.com</p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:flex py-20">
                        <div className="basis-1/2">
                            <h1 className='uppercase font-barlow text-xl text-[#ffa801] font-semibold'>Conatact with us</h1>
                            <h1 className='md:text-[50px] text-[40px] font-barlow font-semibold text-primary '>Let's Create Memories Together</h1>
                            <ul className="flex items-center space-x-3 mt-9">
                                <li>
                                    <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                            <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                            <path
                                                d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>

                                <li>
                                    <a href="#" title="" className="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-10 h-10 hover:bg-blue-600 focus:bg-blue-600">
                                        <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                            <path
                                                fill-rule="evenodd"
                                                clip-rule="evenodd"
                                                d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                            ></path>
                                        </svg>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="basis-1/2 lg:mt-0 mt-10">
                            <Form>
                                <div className="flex flex-col md:flex-row gap-5">
                                    <input type="text" name='name' placeholder='Your Name' className='text-secondaryText border-gray-300 text-lg outline-none border px-4 py-4 w-full' />
                                    <input type="text" name='email' placeholder='Email Address' className='text-secondaryText border-gray-300 text-lg outline-none border px-4 py-4 w-full' />
                                </div>
                                <div className="flex flex-col md:flex-row gap-5 my-4">
                                    <input type="text" name='number ' placeholder='phone' className='text-secondaryText border-gray-300 text-lg outline-none border px-4 py-4 w-full' />
                                    <input type="text" name='text' placeholder='Subject' className='text-secondaryText border-gray-300 text-lg outline-none border px-4 py-4 w-full' />
                                </div>
                                <textarea name="" id="" cols="30" className='text-secondaryText border-gray-300 text-lg outline-none border px-4 py-4 w-full' placeholder='Write Message'></textarea>
                                <button className="btn btn-primary mt-4 bg-[#ffa801] hover:bg-[#40b9eb] duration-300 text-white text-2xl px-5 py-2">Submit</button>
                            </Form>
                        </div>
                    </div>

                </div>
            </div>
            <div className="">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14895.475101446753!2d105.88203!3d21.037936!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135abf54b7ed745%3A0x2383e15e1aa8c276!2sLoesch%20Kaffee!5e0!3m2!1sen!2sin!4v1705833340880!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    )
}

export default page