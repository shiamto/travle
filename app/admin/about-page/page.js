"use client";
import { Button, Form, Input } from 'antd';
import React, { useEffect, useState } from 'react';
import FormInput from '../../components/form/input';
import { FiTrash } from 'react-icons/fi';
import { useAction, useFetch } from '../../helpers/hooks';
import { fetchAboutPage, postAdminAbout } from '../../helpers/backend';
import FormImage from '../../components/common/image';


const { TextArea } = Input;

const AboutPage = () => {
    const [form] = Form.useForm()
    const [data, getData] = useFetch(fetchAboutPage)
    console.log("🚀 ~ AboutPage ~ data:", data)
    const [aboutData, setAboutData] = useState({})

    // useEffect(() => {
    //     if (!!data?.page) {
    //         form.setFieldsValue({
    //             ...data
    //         })
    //     }
    // }, [data?.content])

    useEffect(() => {
        if (!!data?.page) {
            console.log(":", data)
            form.setFieldsValue({
                ...data,
                content: {
                    ...data?.content,
                    enjoy_section: {
                        ...data?.content?.enjoy_section,
                        images: data?.content?.enjoy_section?.images?.map((item) => ({ id: item?.id, path: item?.path })) || [],
                    },
                    transforming_section: {
                        ...data?.content?.transforming_section,
                        image: data?.content?.transforming_section?.image?.length > 0 ? [{ id: data?.content?.transforming_section?.image?.id, path: data?.content?.transforming_section?.image?.path }] : [],
                    },
                    partnership_section: {
                        ...data?.content?.partnership_section,
                        images: data?.content?.partnership_section?.images?.map((item) => ({ id: item?.id, path: item?.path })) || [],
                    },
                    time: {
                        ...data?.content?.time,
                        card: data?.content?.time?.card?.map((item) => ({
                            ...item,
                            image: item?.image?.length > 0 ? [{ id: item?.image?.id, path: item?.image?.path }] : [],
                        })) || [],
                    },
                }
            })
            console.log("ddd", form.getFieldsValue())
        }
    }, [!!data?.page])



    return (
        <div>
            <div className='bg-white shadow-lg p-4'>
                <Form form={form} layout='vertical' onFinish={(values) => {
                    const payload = {
                        content: {
                            enjoy_section: {
                                title: values?.content?.enjoy_section?.title,
                                sub_title: values?.content?.enjoy_section?.sub_title,
                                images: values?.content?.enjoy_section?.images?.map((item) => item?.id) || [],
                            },
                            transforming_section: {
                                title: values?.content?.transforming_section?.title,
                                sub_title: values?.content?.transforming_section?.sub_title,
                                image: values?.content?.transforming_section?.image[0]?.id,
                                list: values?.content?.transforming_section?.list,
                            },
                            partnership_section: {
                                title: values?.content?.partnership_section?.title,
                                sub_title: values?.content?.partnership_section?.sub_title,
                                // images: values?.content?.partnership_section?.images[0]?.id,
                                images: values?.content?.partnership_section?.images?.map((item) => item?.id) || [],
                            },
                            time: {
                                title: values?.content?.time?.title,
                                card: values?.content?.time?.card?.map((item) => ({
                                    image: item?.image[0]?.id,
                                    title: item?.title,
                                    description: item?.description,
                                })),
                            },
                        },
                    };
                    console.log("payload", payload)
                    return useAction(postAdminAbout, payload, () => {
                        getData()
                    })

                }}>

                    <div>
                        <h2 className='text-2xl font-bold'>Enjoy Your Trips</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                            <Form.Item name={['content', 'enjoy_section', 'title']} label='Title'>
                                <Input />
                            </Form.Item>

                            <Form.Item name={['content', 'enjoy_section', 'sub_title']} label='Sub Title'>
                                <Input />
                            </Form.Item>
                        </div>

                        <FormImage name={['content', 'enjoy_section', 'images']} label='Images' />


                        <h2 className='text-2xl font-bold'>Transforming Trips into Tales</h2>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                            <Form.Item name={['content', 'transforming_section', 'title']} label='Title'>
                                <Input />
                            </Form.Item>

                            <Form.Item name={['content', 'transforming_section', 'sub_title']} label='Sub Title'>
                                <Input />
                            </Form.Item>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">

                            <FormImage name={['content', 'transforming_section', 'image']} label='Image' />

                            <Form.Item name={['content', 'transforming_section', 'list']} label='List'>
                                <TextArea rows={4} />
                            </Form.Item>
                        </div>

                        <h2 className='text-2xl font-bold'>Partnership Section</h2>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                            <Form.Item name={['content', 'partnership_section', 'title']} label='Title'>
                                <Input />
                            </Form.Item>

                            <Form.Item name={['content', 'partnership_section', 'sub_title']} label='Sub Title'>
                                <TextArea rows={3} />
                            </Form.Item>
                        </div>

                        <FormImage name={['content', 'partnership_section', 'images']} label='Images' />

                        <h2 className='text-2xl font-bold'>Time to Pack and Travel!</h2>
                        <Form.Item name={['content', 'time', 'title']} label='Title'>
                            <Input />
                        </Form.Item>

                        <Form.List name={['content', 'time', 'card']}>
                            {(fields, { add, remove }) => (
                                <>
                                    {fields.map(field => (
                                        <div key={field.key}>
                                            <h2 className='text-2xl font-bold'>Card</h2>
                                            <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-3'>

                                                <FormImage name={[field.name, 'image']} label='Image' />


                                                <Form.Item name={[field.name, 'title']} label='Title'>
                                                    <Input />
                                                </Form.Item>

                                                <Form.Item name={[field.name, 'description']} label='Description'>
                                                    <TextArea rows={4} />
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