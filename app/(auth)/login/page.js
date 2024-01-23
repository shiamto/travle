"use client"

import { Form, message as msg } from "antd";
import FormInput from "../../components/form/input";
import Button from "../../components/common/button";
import FormPassword from "../../components/form/password";
import { postAdminLogin } from "../../helpers/backend";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Login = () => {
    const router = useRouter()

    const [error, setError] = useState(null)

    const handleSubmit = async (values) => {
        setError(null)
        const { success, message, data } = await postAdminLogin(values)
        if (success === false) {
            setError(message)
            msg.error(message)
        } else {
            msg.success(message)
            localStorage.setItem('token', data?.access_token)
            router.push('/admin')
        }
    }

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center items-center sm:py-12">
            <div className="relative p-4 bg-white shadow-lg sm:rounded sm:p-8 w-[90vw] sm:w-[450px]">
                <div className="mb-6">
                    <h1 className="text-2xl text-gray-700 font-semibold">Login</h1>
                    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
                </div>
                <div className="divide-y divide-gray-200">
                    <div className="text-base text-gray-700 sm:text-lg sm:leading-7">
                        <Form layout="vertical" onFinish={handleSubmit}>
                            <FormInput
                                label="Email"
                                name="email"
                                isEmail
                                required />
                            <FormPassword
                                label="Password"
                                name="password"
                                required />
                            <Button>Submit</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;