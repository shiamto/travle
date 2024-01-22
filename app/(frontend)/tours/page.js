"use client"
import { Checkbox, Collapse, Radio, Space } from 'antd';
import React, { useState } from 'react'
import { IoFilter } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa6";
import { FaMinus, FaPlus } from 'react-icons/fa';
import IconSlider from '../../components/common/IconSlider';
import { Slider } from 'antd';
const onChange = (value) => {
    console.log('onChange: ', value);
};
const onChangeComplete = (value) => {
    console.log('onChangeComplete: ', value);
};

const page = () => {
    const [durationActive, setdurationActive] = useState(false);
    return (
        <div>
            <div className="container mx-auto">
                <div className="">
                    <h1>Afica Tour Package</h1>
                    <p>Sensational South Africa Kenya Tours</p>

                    <p>Venture into the Wild! South Africa is one of the most enthralling destinations for travellers from all over the world, as it has seemingly endless numbers of natural parks, beautiful mountains, and lunar-like landscapes vigilantly carved by nature. With savannas and never-ending safari adventures, South Africa Kenya Tours are a must. From the wild grasslands of Kruger Park to prehistoric caves, from the pristine Boulders Beach to Gold Reef City, you really do have a world in one country. Kesari's South </p>
                </div>
                <hr className='my-10' />
                <div className="flex gap-10">
                    <div className="min-w-[320px]">
                        <div className="text-[1.6rem] text-white bg-primary px-5 py-4 flex items-center font-semibold rounded-md">
                            <IoFilter className='mr-3 text-4xl' />
                            <p>Sort & Filter</p>
                        </div>
                        <div className="border border-gray-300 my-5">
                            <div className="">
                                <div className="flex justify-between items-center px-6 py-2 text-2xl font-normal text-primary" onClick={() => setdurationActive(!durationActive)}>
                                    <h1>Duration</h1>
                                    <FaAngleDown className={`text-gray-500 cursor-pointer duration-300 ${durationActive && "rotate-[180deg]"}`} />
                                </div>
                                <div className="px-5">
                                    <div className="">
                                        <div className="flex justify-between items-center text-[14px]">
                                            <h1 className='font-semibold'>Min. <span className='font-normal ms-4'>Duration</span></h1>
                                            <h1 className='font-semibold'>Max. <span className='font-normal ms-4'>Duration</span></h1>
                                        </div>
                                    </div>
                                    <div className="">
                                        <Slider
                                            range
                                            step={10}
                                            defaultValue={[20, 50]}
                                            onChange={onChange}
                                            onChangeComplete={onChangeComplete}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia deleniti repellendus exercitationem quasi dolorum esse quaerat ipsum expedita ducimus modi, doloremque maiores fugiat necessitatibus aspernatur similique veniam itaque, illo corporis cum error animi? Pariatur dicta expedita inventore illum doloremque modi sunt odio ipsam ducimus iure, in quas dolore recusandae perferendis obcaecati corporis rerum optio placeat dignissimos! Ducimus unde vitae eos velit mollitia porro veritatis, eum quia quibusdam consectetur, corrupti blanditiis, nihil consequatur ut aperiam corporis nisi! Nemo quae voluptatibus commodi maiores qui suscipit ad, praesentium dolor adipisci dolore accusantium, reprehenderit excepturi tenetur sapiente eos repellat perferendis aliquam atque? Iste perferendis soluta amet accusantium ipsa labore architecto corporis alias aliquam explicabo? Totam sapiente, nulla quas perferendis id esse ut neque, animi laudantium pariatur accusantium ipsa ratione exercitationem sed laboriosam voluptas minus sequi fugit in nisi. Temporibus consequatur omnis reiciendis quisquam unde alias repellendus vel nulla laudantium. Libero ratione possimus facilis officia consectetur nam fugiat voluptatem facere, voluptate ut corrupti blanditiis laborum earum voluptates nemo, quae, est numquam ex cupiditate eum aperiam. Harum laboriosam saepe numquam unde vel, quam beatae placeat iste ut cupiditate alias ipsam id asperiores libero et nam adipisci eaque atque porro. Accusamus sequi vel error ipsa quidem possimus voluptates laudantium obcaecati, distinctio, asperiores quo deleniti natus quibusdam quas veritatis, sit impedit consectetur accusantium quae non ullam. Unde atque adipisci quasi nisi ipsam velit blanditiis, dolore quia qui deleniti autem veniam, at cum magnam maxime, veritatis rerum itaque exercitationem deserunt reprehenderit debitis dicta quo quae ipsum! Repudiandae officiis rerum similique natus aperiam ut, assumenda iste quos nam expedita laborum et, placeat exercitationem fuga sed itaque. Voluptate voluptatibus assumenda similique error totam dolores nostrum deserunt laboriosam sunt, doloribus ex ducimus impedit, sed dolorum, dicta excepturi nihil autem pariatur architecto recusandae et modi amet itaque. Quaerat fugiat sequi in facilis magnam!</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default page