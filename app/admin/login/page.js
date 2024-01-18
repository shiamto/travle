'use client';
import { Form } from 'antd';
import React from 'react';
import FormInput from '../../components/form/input';
import FormPassword from '../../components/form/password';

const AdminLogin = () => {
    return (
        <div>
            <h1 className="title">Sign In</h1>
            <p className="error-msg">{error}</p>
            <Form layout="vertical" onFinish={async (values) => {
                setError('')
                showLoader()
                // let { success, message, data } = await postAdminLogin(values)
                console.log(values)
                hideLoader()
                if (success) {
                    localStorage.setItem('admin_token', data?.access_token)
                    push('/admin')
                } else {
                    setError(message)
                }

            }}>
                <FormInput label="Email" name="email" isEmail required />
                <FormPassword label="Password" name="password" required />
                <button
                    className="btn btn-primary w-100 mt-2"
                    type="submit"
                >
                    Log In
                </button>
            </Form>
        </div>
    );
};

export default AdminLogin;