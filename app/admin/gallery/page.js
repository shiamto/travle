"use client";
import React from 'react';
import FormImage from '../../components/common/image';
import { Form } from 'antd';
import { useAction } from '../../helpers/hooks';
import { postGallery } from '../../helpers/backend';
import { useRouter } from 'next/navigation';

const GalleryPage = () => {
    const { push } = useRouter()
    const [form] = Form.useForm();

    // const handleSubmit = (values) => {
    //     console.log(values)
    //     const imageIds = values?.images?.map(image => image.id) || [];
    //     values.images = imageIds;
       
    //     return useAction(postGallery, values, () => {
    //         // push('/admin')
    //         console.log(values)
    //     })
    // }


    return (
        <div>
            <button className='btn btn-primary'>
                <Form form={form}>
                    <FormImage name="images" label="Image" />
                </Form>
            </button>
        </div>
    );
};

export default GalleryPage;