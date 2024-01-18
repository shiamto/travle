'use client';
import { Form, message } from 'antd';
import React from 'react';
import { Input } from 'antd';
import { postNewsLetter } from '../../../helpers/backend';
import ButtonHome from '../../../components/common/button_home';


const Newsletter = () => {
    const [form] = Form.useForm();

    const handleFinish = async (values) => {
        const { error, msg } = await postNewsLetter(values);
        if (error) {
            message.error(msg);
        } else {
            message.success(msg);
            form.resetFields();
        }
    }

    return (
        <div className="container mx-auto lg:!my-20">
            <div className="lg:h-[244px] h-full w-auto bg-[#141417] rounded-md lg:py-0 py-4">
                <div className="flex items-center justify-center flex-col p-3">
                    <h3 className='header_3 text-body_text lg:mt-12'>Get Subscribe for Newsletter</h3>
                    <div className="mt-3 lg:max-w-[960px] w-full">
                        <Form form={form} onFinish={handleFinish}>
                            <div className="flex lg:flex-row flex-col gap-x-2">
                                <Form.Item type="email" name={'email'}>
                                    <Input
                                        required
                                        className='input input-bordered lg:h-[67px] h-14 lg:w-[700px] w-auto focus:outline-none border-primary shadow-lg rounded-lg bg-[#EAEEF9]'
                                        placeholder='Enter your email'
                                        style={{ padding: '10px' }}  // Add padding to the input field
                                    />
                                </Form.Item>
                                {/* <button type='submit' className='lg:w-[260px] w-full lg:h-[67px] h-14 bg-primary text-white button_paragraph rounded-lg shadow-sm lg:mt-0 mt-2'>Subscribe</button> */}
                                <ButtonHome className='lg:w-[260px] w-full lg:!h-[67px] h-14 bg-primary text-white button_paragraph rounded-lg shadow-sm lg:mt-0 mt-2'  >
                                    Subscribe
                                </ButtonHome>
                            </div>
                        </Form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Newsletter;