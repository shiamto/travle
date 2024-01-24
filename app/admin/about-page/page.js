"use client";
import { Button, Form } from 'antd';
import React, { useEffect, useState } from 'react';
import FormInput from '../../components/form/input';
import { FiTrash } from 'react-icons/fi';
import { useAction, useFetch } from '../../helpers/hooks';
import { fetchAboutPage, postAdminAbout } from '../../helpers/backend';


const AboutPage = () => {
    const [form] = Form.useForm()
    const [data, getData] = useFetch(fetchAboutPage)
    console.log("🚀 ~ AboutPage ~ data:", data)
    const [aboutData, setAboutData] = useState({})

    useEffect(() => {
        if (!!data?.content) {
            form.setFieldsValue({
                ...data
            })
        }
    }, [data?.content])

   

    return (
        <div>
            <div className='bg-white shadow-lg p-4'>
                <Form form={form} layout='vertical' onFinish={(values) => {
                    return useAction(postAdminAbout, {...values, page: "About Page"}, () => {
                        getData()
                    })

                }}>

                    <div>
                        <h2 className='text-2xl font-bold'>Enjoy Your Trips</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                            <Form.Item name={['content', 'enjoy_section', 'title']} label='Title'>
                                <FormInput />
                            </Form.Item>

                            <Form.Item name={['content', 'enjoy_section', 'sub_title']} label='Sub Title'>
                                <FormInput />
                            </Form.Item>
                        </div>

                        <Form.Item name={['content', 'enjoy_section', 'images']} label='Images'>
                            <FormInput />
                        </Form.Item>

                        <h2 className='text-2xl font-bold'>Transforming Trips into Tales</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                            <Form.Item name={['content', 'transforming_section', 'title']} label='Title'>
                                <FormInput />
                            </Form.Item>

                            <Form.Item name={['content', 'transforming_section', 'sub_title']} label='Sub Title'>
                                <FormInput />
                            </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                            <Form.Item name={['content', 'transforming_section', 'image']} label='Image'>
                                <FormInput />
                            </Form.Item>

                            <Form.Item name={['content', 'transforming_section', 'list']} label='List'>
                                <FormInput textArea />
                            </Form.Item>
                        </div>

                        <h2 className='text-2xl font-bold'>Partnership Section</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                            <Form.Item name={['content', 'partnership_section', 'title']} label='Title'>
                                <FormInput />
                            </Form.Item>

                            <Form.Item name={['content', 'partnership_section', 'sub_title']} label='Sub Title'>
                                <FormInput />
                            </Form.Item>
                        </div>

                        <Form.Item name={['content', 'partnership_section', 'images']} label='Images'>
                            <FormInput />
                        </Form.Item>

                        <h2 className='text-2xl font-bold'>Time to Pack and Travel!</h2>
                        <Form.Item name={['content', 'time', 'title']} label='Title'>
                            <FormInput />
                        </Form.Item>

                        <Form.List name={['content', 'time', 'card']}>
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(field => (
                                        <div key={field.key}>
                                            <h2 className='text-2xl font-bold'>Card</h2>
                                            <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-3'>
                                                <Form.Item name={[field.name, 'image']} label='Image'>
                                                    <FormInput />
                                                </Form.Item>

                                                <Form.Item name={[field.name, 'title']} label='Title'>
                                                    <FormInput />
                                                </Form.Item>

                                                <Form.Item name={[field.name, 'description']} label='Description'>
                                                    <FormInput textArea />
                                                </Form.Item>
                                                <div className='flex items-center'>
                                                    <FiTrash
                                                        onClick={() => remove(field.name)}
                                                        className='text-secondary cursor-pointer' />
                                                </div>
                                            </div>

                                        </div>
                                    ))}
                                    <Form.Item>
                                        <Button type="button" className='bg-indigo-400 text-white' onClick={() => add()}>+ Add More</Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
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

export default AboutPage;