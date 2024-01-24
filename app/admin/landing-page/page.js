"use client";
import React, { useEffect } from 'react';
import { Form, Row, Col, Button } from 'antd';
import FormImage from '../../components/common/image';
import FormInput from '../../components/form/input';
import Card from '../../components/common/card';
import { FiTrash } from 'react-icons/fi';
import { useAction, useFetch } from '../../helpers/hooks';
import { fetchLandingPage, postAdminLandingPage } from '../../helpers/backend';


const LandingPage = () => {
    const [form] = Form.useForm()

    const [landingData, getLandingData] = useFetch(fetchLandingPage)
    console.log("🚀 ~ LandingPage ~ landingData:", landingData)

    useEffect(() => {
        if(!!landingData?.content) {
            form.setFieldsValue({
                ...landingData
            })
        }
    }, [landingData?.content])

    return (
        <div>
            <div className='bg-white shadow-lg p-4'>
                <Form form={form} layout='vertical' onFinish={(values) => {
                    console.log("values", values);
                    
                    return useAction(postAdminLandingPage, { ...values, page: "Landing Page"}, () => {
                        getLandingData()
                    })
                    
                }}>

                    <div>
                        <h2 className='text-2xl font-bold'>Hero Section</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                            <Form.Item label='Title' name={['content', 'hero_section', 'title']} >
                                <FormInput />
                            </Form.Item>
                            <Form.Item label='Sub Title' name={['content', 'hero_section', 'sub_title']} >
                                <FormInput />
                            </Form.Item>
                        </div>
                        <h1 className='text-2xl font-bold'>Card</h1>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                            <Form.Item label='Card Title' name={['content', 'hero_section', 'card', 'title']} >
                                <FormInput />
                            </Form.Item>
                            <Form.Item label='Card Sub Title' name={['content', 'hero_section', 'card', 'sub_title']} >
                                <FormInput />
                            </Form.Item>
                        </div>

                        <Form.Item label='Images' name={['content', 'hero_section', 'images']} >
                            <FormInput />
                        </Form.Item>



                        <h2 className='text-2xl font-bold'>Why Section</h2>
                        <Form.Item label='Title' name={['content', 'why_seciotn', 'title']} >
                            <FormInput />
                        </Form.Item>
                        <Form.List name={['content', 'why_seciotn', 'card']}>
                            {(fields, { add, remove }) => {
                                return (
                                    <div>
                                        {fields.map((field, index) => (
                                            <div key={field.key} className='grid grid-cols-1 lg:grid-cols-4 gap-x-4'>
                                                <Form.Item label='Title' name={[field.name, 'title']} >
                                                    <FormInput />
                                                </Form.Item>
                                                <Form.Item label='Description' name={[field.name, 'description']} >
                                                    <FormInput />
                                                </Form.Item>
                                                <Form.Item label='Image' name={[field.name, 'image']} >
                                                    <FormInput />
                                                </Form.Item>
                                                {/* <Button onClick={() => remove(field.name)}><FiTrash /></Button> */}
                                                <div className='col-span-1 flex items-center'>
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

                        <h2 className='text-2xl font-bold'>Service Section</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                            <Form.Item label='Heading' name={['content', 'service_section', 'heading']} >
                                <FormInput />
                            </Form.Item>

                            <Form.Item label='Title' name={['content', 'service_section', 'title']} >
                                <FormInput />
                            </Form.Item>
                        </div>

                        <Form.Item label='Description' name={['content', 'service_section', 'description']} >
                            <FormInput textArea />
                        </Form.Item>

                        <Form.List name={['content', 'service_section', 'service_card']}>
                            {(fields, { add, remove }) => {
                                return (
                                    <div>
                                        {fields.map((field, index) => (
                                            <div key={field.key} className='grid grid-cols-1 lg:grid-cols-4 gap-x-4'>
                                                <Form.Item label='Title' name={[field.name, 'title']} >
                                                    <FormInput />
                                                </Form.Item>
                                                <Form.Item label='Description' name={[field.name, 'description']} >
                                                    <FormInput />
                                                </Form.Item>
                                                <Form.Item label='Icon' name={[field.name, 'icon']} >
                                                    <FormInput />
                                                </Form.Item>
                                                <div className='col-span-1 flex items-center'>
                                                    <FiTrash
                                                        onClick={() => remove(field.name)}
                                                        className="text-secondary cursor-pointer"
                                                        role="button" size={18}
                                                        title='Remove file'
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <Button onClick={() => add()} className='mt-4'>Add Service Card</Button>
                                    </div>
                                )
                            }}
                        </Form.List>

                        <h2 className='text-2xl font-bold'>Discover Section</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                            <Form.Item label='Heading' name={['content', 'discover_section', 'heading']} >
                                <FormInput />
                            </Form.Item>


                            <Form.Item label='Title' name={['content', 'discover_section', 'title']} >
                                <FormInput />
                            </Form.Item>
                        </div>

                        <Form.Item label='Description' name={['content', 'discover_section', 'description']} >
                            <FormInput />
                        </Form.Item>

                        <Form.List name={['content', 'discover_section', 'discover_card']}>
                            {(fields, { add, remove }) => {
                                return (
                                    <div>
                                        {fields.map((field, index) => (
                                            <div key={field.key} className='grid grid-cols-1 lg:grid-cols-4 gap-x-4'>
                                                <Form.Item label='Title' name={[field.name, 'title']} >
                                                    <FormInput />
                                                </Form.Item>
                                                <Form.Item label='Image' name={[field.name, 'image']} >
                                                    <FormInput />
                                                </Form.Item>
                                                <Form.List name={[field.name, 'points']}>
                                                    {(fields, { add, remove }) => {
                                                        return (
                                                            <div>
                                                                {fields.map((field, index) => (
                                                                    <div key={field.key} className='flex items-center gap-x-2'>
                                                                        <Form.Item label='Point' name={[field.name]} >
                                                                            <FormInput />
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
                                                                <Button onClick={() => add()} className='mt-4'>Add</Button>
                                                            </div>
                                                        )
                                                    }}
                                                </Form.List>

                                                <div className='col-span-1 flex items-center'>
                                                    <FiTrash
                                                        onClick={() => remove(field.name)}
                                                        className="text-secondary cursor-pointer"
                                                        role="button" size={18}
                                                        title='Remove file'
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <Button onClick={() => add()} className='mt-4'>Add Discover Card</Button>
                                    </div>
                                )
                            }}
                        </Form.List>

                        <h2 className='text-2xl font-bold'>Next Section</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                            <Form.Item label='Title' name={['content', 'next_section', 'title']} >
                                <FormInput />
                            </Form.Item>

                            <Form.Item label='Sub Title' name={['content', 'next_section', 'sub_title']} >
                                <FormInput />
                            </Form.Item>
                        </div>
                        <Form.Item label='Image' name={['content', 'next_section', 'image']} >
                            <FormInput />
                        </Form.Item>


                    </div>

                    <Form.Item>
                        <Button className='bg-indigo-500 text-white mt-2' type='primary' htmlType='submit'>
                            Submit
                        </Button>
                    </Form.Item>



                </Form>
            </div>
        </div>
    );
};

export default LandingPage;
