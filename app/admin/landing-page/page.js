"use client";
import React from 'react';
import { Form, Row, Col, Button } from 'antd';
import FormImage from '../../components/common/image';
import FormInput from '../../components/form/input';
import Card from '../../components/common/card';
import { FiTrash } from 'react-icons/fi';

const LandingPage = () => {
    const [form] = Form.useForm()

    

    return (
        <div>
            <div className='bg-white shadow-lg p-4'>
                <Form form={form} layout='vertical' onFinish={(values) => {
                    const data = {
                        hero_section: {
                            images: values?.content?.hero_section?.images,
                            title: values?.content?.hero_section?.title,
                            sub_title: values?.content?.hero_section?.sub_title,
                            card: {
                                title: values?.content?.hero_section?.card?.title,
                                sub_title: values?.content?.hero_section?.card?.sub_title,
                            }
                        },
                        why_seciotn: {
                            title: values?.content?.why_seciotn?.title,
                            card: values?.content?.why_seciotn?.card?.map((card) => ({
                                title: card?.title,
                                description: card?.description,
                                image: card?.image,
                            })) || []
                        },
                        service_section: {
                            heading: values?.content?.service_section?.heading,
                            title: values?.content?.service_section?.title,
                            description: values?.content?.service_section?.description,
                            card: values?.content?.service_section?.service_card?.map((serviceCard) => ({
                                title: serviceCard?.title,
                                description: serviceCard?.description,
                                icon: serviceCard?.icon,
                            })) || []
                        },
                        discover_section: {
                            heading: values?.content?.discover_section?.heading,
                            title: values?.content?.discover_section?.title,
                            description: values?.content?.discover_section?.description,
                            card: values?.content?.discover_section?.discover_card?.map((discoverCard) => ({
                                title: discoverCard?.title,
                                image: discoverCard?.image,
                                points: discoverCard?.points?.map((point) => point) || []
                            })) || []
                        },
                        next_section: {
                            image: values?.content?.next_section?.image,
                            title: values?.content?.next_section?.title,
                            sub_title: values?.content?.next_section?.sub_title,
                        }
                    }

                    console.log("data", data)
                }}>
                    {/* Hero Section */}

                    <Form.Item name={['content', 'hero_section']}>
                        <h1 className='text-2xl font-bold'>Hero Section</h1>
                        <div>
                            <div>
                                <Form.Item name={['content', 'hero_section', 'images']} label="Images">
                                    <FormInput />
                                </Form.Item>
                            </div>
                            <div className="grid grid-cols-1 md:grid-col-2 gap-x-4">
                                <Form.Item name={['content', 'hero_section', 'title']} label="Title">
                                    <FormInput />
                                </Form.Item>
                                <Form.Item name={['content', 'hero_section', 'sub_title']} label="Sub Title">
                                    <FormInput />
                                </Form.Item>
                            </div>
                        </div>

                        {/* Card Section within Hero Section */}
                        <Form.Item name={['card']}>
                            <h2 className='text-lg font-bold'>Card</h2>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-x-4'>
                                <div>
                                    <Form.Item name={['title']}>
                                        <p className='text-sm'>Card Title</p>
                                        <FormInput />
                                    </Form.Item>
                                </div>
                                <div>
                                    <Form.Item name={['sub_title']}>
                                        <p className='text-sm'>Card Subtitle</p>
                                        <FormInput textArea={true} />
                                    </Form.Item>
                                </div>
                            </div>
                        </Form.Item>
                    </Form.Item>

                    {/* Why Section */}
                    <Form.Item name={['content', 'why_seciotn']}>
                        <h1 className='text-2xl font-bold'>Why Section</h1>
                        <div>
                            <Form.Item name={['title']}>
                                <h2 className='text-sm'>Title</h2>
                                <FormInput />
                            </Form.Item>

                            <Form.List label="Card" name={['why_card']}>
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name }) => (
                                            <div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                                                <div className="col-span-1">
                                                    <h2 className='text-sm'>Title</h2>
                                                    <FormInput
                                                        name={[name, 'title']}
                                                        placeholder="Write something.."
                                                        required
                                                    />
                                                </div>
                                                <div className="col-span-1 mt-4">
                                                    <h2 className='text-sm'>Description</h2>
                                                    <FormInput
                                                        name={[name, 'description']}
                                                        placeholder="Write something.."
                                                        required
                                                    />
                                                </div>
                                                <div className="col-span-1 mt-4">
                                                    <Form.Item
                                                        name={[name, 'image']}
                                                    >
                                                        <h2 className='text-sm'>Image</h2>
                                                        <FormInput />
                                                    </Form.Item>
                                                </div>
                                                <div className="col-span-1">
                                                    <FiTrash
                                                        onClick={() => remove(name)}
                                                        className="mt-2.5 text-danger cursor-pointer"
                                                        role="button" size={18}
                                                        title='Remove file'
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <Button type="button" className='bg-secondary text-white' onClick={() => add()}>Add</Button>
                                    </>
                                )}
                            </Form.List>
                        </div>
                    </Form.Item>

                    {/* Service Section */}
                    <Form.Item name={['content', 'service_section']}>
                        <h1 className='text-2xl font-bold'>Service Section</h1>
                        <div>
                            <Form.Item name={['heading']}>
                                <h2 className='text-sm'>Heading</h2>
                                <FormInput />
                            </Form.Item>

                            <div className='grid grid-cols-2 gap-x-6'>
                                <Form.Item name={['title']}>
                                    <h2 className='text-sm'>Title</h2>
                                    <FormInput />
                                </Form.Item>

                                <Form.Item name={['description']}>
                                    <h2 className='text-sm'>Description</h2>
                                    <FormInput textArea />
                                </Form.Item>
                            </div>

                            <Form.List label="Card" name={['service_card']}>
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name }) => (
                                            <div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                                                <div className="col-span-1">
                                                    <h2 className='text-sm'>Title</h2>
                                                    <FormInput
                                                        name={[name, 'title']}
                                                        placeholder="Write something.."
                                                        required
                                                    />
                                                </div>
                                                <div className="col-span-1 mt-4">
                                                    <h2 className='text-sm'>Description</h2>
                                                    <FormInput
                                                        name={[name, 'description']}
                                                        placeholder="Write something.."
                                                        required
                                                    />
                                                </div>
                                                <div className="col-span-1 mt-4">
                                                    <h2 className='text-sm'>Icon</h2>
                                                    <Form.Item
                                                        name={[name, 'icon']}
                                                    >
                                                        <FormInput />
                                                    </Form.Item>
                                                </div>
                                                <div className="col-span-1">
                                                    <FiTrash
                                                        onClick={() => remove(name)}
                                                        className="mt-2.5 text-danger cursor-pointer"
                                                        role="button" size={18}
                                                        title='Remove file'
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <Button type="button" className='bg-secondary text-white' onClick={() => add()}>Add</Button>
                                    </>
                                )}
                            </Form.List>
                        </div>
                    </Form.Item>


                    <Form.Item name={['content', 'discover_section']}>
                        <h1 className='text-2xl font-bold'>Discover Section</h1>
                        <div>
                            <div className='grid grid-cols-2 gap-x-6'>
                                <Form.Item name={['heading']}>
                                    <h2 className='text-sm'>Heading</h2>
                                    <FormInput />
                                </Form.Item>

                                <Form.Item name={['title']}>
                                    <h2 className='text-sm'>Title</h2>
                                    <FormInput />
                                </Form.Item>
                            </div>

                            <Form.Item name={['description']}>
                                <h2 className='text-sm'>Description</h2>
                                <FormInput textArea />
                            </Form.Item>

                            <Form.List label="Card" name={['discover_card']}>
                                {(fields, { add, remove }) => (
                                    <>
                                        {fields.map(({ key, name }) => (
                                            <div key={key} className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
                                                <div className="col-span-1">
                                                    <h2 className='text-sm'>Title</h2>
                                                    <FormInput
                                                        name={[name, 'title']}
                                                        placeholder="Write something.."
                                                        required
                                                    />
                                                </div>
                                                <div className="col-span-1 mt-4">
                                                    <h2 className='text-sm'>Image</h2>
                                                    <Form.Item
                                                        name={[name, 'image']}
                                                    >
                                                        <FormInput />
                                                    </Form.Item>
                                                </div>
                                                <div className="col-span-1 mt-4">
                                                    <h2 className='text-sm'>Points</h2>
                                                    <Form.List name={[name, 'points']}>
                                                        {(pointsFields, pointsOps) => (
                                                            <>
                                                                {pointsFields.map(({ key: pointsKey, name: pointsName, fieldKey, ...rest }) => (
                                                                    <Form.Item
                                                                        {...rest}
                                                                        key={pointsKey}
                                                                    >
                                                                        <FormInput name={[pointsName]} placeholder="Write something.." required />
                                                                    </Form.Item>
                                                                ))}
                                                                <Button
                                                                    type="button"
                                                                    onClick={() => pointsOps.add()}
                                                                >
                                                                    Add Point
                                                                </Button>
                                                            </>
                                                        )}
                                                    </Form.List>
                                                </div>

                                                <div className="col-span-1">
                                                    <FiTrash
                                                        onClick={() => remove(name)}
                                                        className="mt-2.5 text-danger cursor-pointer"
                                                        role="button" size={18}
                                                        title='Remove file'
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                        <Button type="button" className='bg-secondary text-white' onClick={() => add()}>Add</Button>
                                    </>
                                )}
                            </Form.List>
                        </div>
                    </Form.Item>



                    <Form.Item name={['content', 'next_section']}>
                        <h1 className='text-2xl font-bold'>Next Section</h1>
                        <div>
                            <div>
                                <Form.Item name={['image']}>
                                    <h2 className='text-sm'>Image</h2>
                                    <FormInput />
                                </Form.Item>
                            </div>
                            <div className="grid grid-cols-1 md:grid-col-2 gap-x-4">
                                <Form.Item name={['title']}>
                                    <p className='text-sm'>Title</p>
                                    <FormInput />
                                </Form.Item>
                                <Form.Item name={['sub_title']}>
                                    <p className='text-sm'>Subtitle</p>
                                    <FormInput />
                                </Form.Item>
                            </div>
                        </div>

                    </Form.Item>

                    {/* Submit Button */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Save Changes
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
};

export default LandingPage;
