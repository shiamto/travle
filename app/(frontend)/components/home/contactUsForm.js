"use client";
import { Form, message } from 'antd';
import React from 'react';
import { postContactUs } from '../../../helpers/backend';
import ButtonHome from '../../../components/common/button_home';

const ContactUsForm = ({ contactUsData }) => {
    const [form] = Form.useForm();

    return (
        <div className="py-16">
            <div className="container mx-auto">
                <h1 className='header_2 text-dark_text'>{contactUsData?.heading} </h1>
                <div className="grid md:grid-cols-3 grid-cols-1 gap-4 mt-16">
                    <Form className='col-span-2' layout="vertical"
                        form={form}
                        onFinish={
                            async (values) => {
                                const { err, msg } = await postContactUs(values);
                                if (err) {
                                    message.error(msg);
                                } else {
                                    message.success(msg);
                                    form.resetFields();
                                }
                            }
                        }
                    >
                        <div className="flex lg:flex-row flex-col gap-8">
                            <div className='flex flex-col md:w-full w-auto'>
                                <label htmlFor="name" className='text-dark_secondary paragraph_3'>Name</label>
                                <Form.Item name="name" rules={[{ required: true, message: 'Please input your name!' }]} >
                                    <input type='text' name='name' placeholder='Mr Howday' className="text-dark_text paragraph_3  placeholder-secondary_text placeholder:paragraph_3 border-b py-1 focus:outline-none focus:border-b-2 focus:border-b-primary border-b-secondary_text transition-colors w-full" />
                                </Form.Item>
                            </div>

                            <div className='flex flex-col md:w-full w-auto'>
                                <label htmlFor="email" className='text-dark_secondary paragraph_3'>Email</label>
                                <Form.Item name="email" rules={[{ required: true, message: 'Please input your email!' }]} >
                                    <input type='email' name='email' className="text-dark_text paragraph_3  placeholder-secondary_text placeholder:paragraph_3 border-b py-1 focus:outline-none  focus:border-b-2 focus:border-b-primary border-b-secondary_text transition-colors w-full" placeholder='howdy@gmail.com' />
                                </Form.Item>

                            </div>
                        </div>

                        <div className="flex lg:flex-row flex-col gap-8 mt-7">
                            <div className='flex flex-col md:w-full w-auto'>
                                <label htmlFor="phone" className='text-dark_secondary paragraph_3'>Phone</label>
                                <Form.Item name="phone" rules={[{ required: true, message: 'Please input your phone!' }]} >
                                    <input type='text' name='phone' className="text-dark_text paragraph_3  placeholder-secondary_text placeholder:paragraph_3 border-b py-1 focus:outline-none  focus:border-b-2 focus:border-b-primary border-b-secondary_text transition-colors w-full" placeholder='(123 567 9876)' />
                                </Form.Item>

                            </div>

                            <div className='flex flex-col md:w-full w-auto'>
                                <label htmlFor="subject" className='text-dark_secondary paragraph_3'>Subject</label>
                                <Form.Item name="subject">
                                    <input type='text' name='subject' className="text-dark_text paragraph_3  placeholder-secondary_text placeholder:paragraph_3 border-b py-1 focus:outline-none  focus:border-b-2 focus:border-b-primary border-b-secondary_text transition-colors w-full" placeholder='MR - How Day' />
                                </Form.Item>

                            </div>
                        </div>

                        <div className='mt-8 flex flex-col md:w-full w-auto'>
                            <label htmlFor="message" className='text-dark_secondary paragraph_3'>Message</label>
                            <Form.Item name="message">
                                <textarea rows={3} name='message' className="text-dark_text header_6 placeholder-secondary_text border-b py-1 bg-dark_gray focus:outline-none  focus:border-b-2 focus:border-b-primary border-b-secondary_text transition-colors w-full" placeholder='Write Your Message' />
                            </Form.Item>

                        </div>
                        <ButtonHome className={'paragraph_4 font-bold  mt-10 rounded-lg'}  >
                            Submit
                        </ButtonHome>
                    </Form>

                    <div className="lg:max-w-full w-auto lg:max-h-[500px] lg:mt-0 mt-6 bg-[#29292F] rounded-lg p-4">
                        <div className="flex flex-col gap-6">
                            <div>
                                <p className='paragraph_3 text-secondary_text'>Email</p>
                                <h4 className='header_6 text-white'>{contactUsData?.email}</h4>
                            </div>

                            <div>
                                <p className='paragraph_3 text-secondary_text'>Phone</p>
                                <h4 className='header_6 text-white'>{contactUsData?.phone}</h4>
                            </div>

                            <div>
                                <p className='paragraph_3 text-secondary_text'>Our Offices</p>
                                {
                                    contactUsData?.office_addresses?.map((val, index) => {
                                        return (
                                            <h4 className='header_6 text-white' key={index}>{val?.address}</h4>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactUsForm;