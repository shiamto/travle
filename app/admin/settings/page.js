"use client";
import { Form } from 'antd';
import React from 'react';
import FormInput from '../../components/form/input';
import Button from '../../components/common/button';
import { FiTrash } from 'react-icons/fi';
import FormImage from '../../components/common/image';

const Settings = () => {
    const [form] = Form.useForm()

    return (
        <div>
            <Form form={form} layout='vertical' onFinish={(values) => {
                console.log("values", values);

                // return useAction(postAdminLandingPage, { ...values, page: "Landing Page" }, () => {
                //     getLandingData()
                // })

            }}>

                <h2 className='text-2xl font-bold'>Hero Section</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                    <Form.Item label='Site Name' name='name' >
                        <FormInput />
                    </Form.Item>
                    <Form.Item label='Phone Number' name='phone' >
                        <FormInput />
                    </Form.Item>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                    <Form.Item label='Site Email' name='email' rules={[{ type: 'email' }, { required: true }]}>
                        <FormInput />
                    </Form.Item>
                    <Form.Item label='Address' name='address' >
                        <FormInput />
                    </Form.Item>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                    <Form.Item label='Footer Text' name='footer_text' >
                        <FormInput />
                    </Form.Item>
                    <Form.Item label='Description' name='description' >
                        <FormInput />
                    </Form.Item>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                    <Form.Item label='Main Logo' name='main_logo' >
                        <FormImage name={'main_logo'} />

                    </Form.Item>
                    <Form.Item label='Footer Logo' name='footer_logo' >
                    <FormImage name={'footer_logo'} />
                    </Form.Item>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                    <Form.Item label='Map Link' name='map' >
                        <FormInput />
                    </Form.Item>
                    <Form.List name={['social_link']}>
                        {(fields, { add, remove }) => {
                            return (
                                <div>
                                    {fields.map((field, index) => (
                                        <div key={field.key} className='grid grid-cols-1 lg:grid-cols-4 gap-x-4'>
                                            <Form.Item label='Name' name={[field.name, 'name']} >
                                                <FormInput />
                                            </Form.Item>
                                            <Form.Item label='Url' name={[field.name, 'url']} >
                                                <FormInput />
                                            </Form.Item>
                                            <Form.Item label='Icon' name={[field.name, 'icon']} >
                                                <FormImage name={[field.name, 'icon']} />
                                            </Form.Item>
                                            <div className=''>
                                                <FiTrash
                                                    onClick={() => remove(field.name)}
                                                    className="text-secondary cursor-pointer"
                                                    role="button" size={18}
                                                    title='Remove file'
                                                />
                                            </div>

                                        </div>
                                    ))}
                                    <Button onClick={() => add()} className='mt-4 bg-indigo-400 hover:text-white text-white hover:bg-none'>Add Card Data</Button>
                                </div>
                            )
                        }}
                    </Form.List>

                </div>

                <Button className='bg-indigo-500 text-white mt-2' type='primary' htmlType='submit'>
                    Submit
                </Button>
            </Form>

        </div>
    );
};

export default Settings;