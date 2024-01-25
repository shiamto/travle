"use client";
import { Form } from 'antd';
import React, { useEffect, useState } from 'react';
import FormInput from '../../components/form/input';
import Button from '../../components/common/button';
import { FiTrash } from 'react-icons/fi';
import FormImage from '../../components/common/image';
import { fetchSiteSettings, postAdminSettings } from '../../helpers/backend';
import { useAction, useFetch } from '../../helpers/hooks';

const Settings = () => {
    const [form] = Form.useForm()
    const [data, setData] = useState({})
    const getSettings = () => {
        fetchSiteSettings().then(({ success, data }) => {
            if (success) {
                form.setFieldsValue({
                    ...data,
                    main_logo: data?.main_logo?.length > 0 ? [{ id: data?.main_logo[0]?.id, path: data?.main_logo[0]?.path}] : [],
                    footer_logo: data?.footer_logo?.length > 0 ? [{ id: data?.footer_logo[0]?.id, path: data?.footer_logo[0]?.path }] : [],
                    social_link: data?.socials?.length > 0 ? data?.socials?.map((item) => {
                        return {
                            ...item,
                            icon: item?.icon?.length > 0 ? [{ id: item?.icon[0]?.id, path: item?.icon[0]?.path}] : []
                        }
                    }) : []
                })
                setData(data)
                
            }
        })
    }
    useEffect(() => {
        getSettings()
    }, [])
    return (
        <div>
            <Form form={form} layout='vertical' onFinish={async (values) => {

                const payload = {
                    name: values.name, 
                    email: values.email,
                    phone: values.phone,
                    address: values.address,
                    footer_text: values.footer_text,
                    description: values.description,
                    map: values.map,
                    main_logo: values?.main_logo?.length > 0 ? values.main_logo[0].id : 0,
                    footer_logo: values?.footer_logo?.length > 0 ? values.footer_logo[0].id : 0,
                    social_link: values?.social_link && values?.social_link?.map((item) => {
                        return {
                            ...item,
                            icon: item?.icon?.length > 0 ? item.icon[0].id : 0
                        }
                    }) 
                }

                console.log(payload)
                await useAction(postAdminSettings, payload, () => {
                    getSettings();

                });

            }}>

                <h2 className='text-2xl font-bold'>Hero Section</h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                    <div>
                        <FormInput label='Site Name' name='name' />
                    </div>
                    <div>
                        <FormInput label='Phone Number' name='phone' />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                    <div>
                        <FormInput label='Site Email' name='email' rules={[{ type: 'email' }]} />
                    </div>
                    <div>
                        <FormInput label='Address' name='address' />
                    </div>

                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                    <div>
                        <FormInput label='Footer Text' name='footer_text' />
                    </div>
                    <div>
                        <FormInput label='Description' name='description' />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                    <div>
                        <FormImage label='Main Logo' name={'main_logo'} />

                    </div>
                    <div>
                        <FormImage label='Footer Logo' name={'footer_logo'} />
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4">
                    <div>
                        <FormInput label='Map Link' name='map' />
                    </div>
                    <Form.List name={['social_link']}>
                        {(fields, { add, remove }) => {
                            return (
                                <div>
                                    {fields.map((field, index) => (
                                        <div key={field.key} className='grid grid-cols-1 lg:grid-cols-4 gap-x-4'>
                                            <div>
                                                <FormInput label='Name' name={[field.name, 'name']} />
                                            </div>
                                            <div>
                                                <FormInput label='Url' name={[field.name, 'url']} />
                                            </div>
                                            <div>
                                                <FormImage label='Icon' name={[field.name, 'icon']} />
                                            </div>
                                            <div className=''>
                                                <FiTrash
                                                    onClick={() => remove(field.name)}
                                                    className="text-secondary cursor-pointer mt-9"
                                                    role="button" size={18}
                                                    title='Remove file'
                                                />
                                            </div>

                                        </div>
                                    ))}
                                    <div onClick={() => add()} className='w-32 mt-4 bg-indigo-400 hover:text-white text-white hover:bg-none rounded px-4 py-2 text-sm font-medium'>Add Card Data</div>
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