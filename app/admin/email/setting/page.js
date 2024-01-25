'use client'
import { Form } from 'antd';
import React, { useEffect } from 'react';
import FormInput from '../../../components/form/input';
import { useAction, useFetch } from '../../../helpers/hooks';
import { fetchMailSetting, postAdminMailSetting } from '../../../helpers/backend';
import Button from '../../../components/common/button';

const EmailSettings = () => {
    const [form] = Form.useForm();
    const [settings, getSettings] = useFetch(fetchMailSetting)

    useEffect(() => {
        if (!!settings) {
            form.setFieldsValue({
                ...settings,
            })
        }
    }, [settings])

    return (
        <div>
            <div className='bg-white shadow-lg p-4'>
                <Form form={form} layout='vertical' onFinish={values => {
                    return useAction(postAdminMailSetting, values, () => {
                        getSettings()
                    })
                }}>
                    <FormInput name="MAIL_DRIVER" label="Mail Driver" required placeholder="smtp" />
                    <FormInput name="MAIL_HOST" label="Mail Host" required placeholder="smtp.gmail.com" />
                    <FormInput name="MAIL_PORT" label="Mail Port" required placeholder="587" />
                    <FormInput name="MAIL_USERNAME" label="Mail Username" required placeholder="username" />
                    <FormInput name="MAIL_PASSWORD" label="Mail Password" required placeholder="password" />
                    <FormInput name="MAIL_ENCRYPTION" label="Mail Encryption" required placeholder="tls" />
                    <Button className='mt-4' type='primary' htmlType='submit'>Submit</Button>
                </Form>
            </div>
            
        </div>
    );
};

export default EmailSettings;