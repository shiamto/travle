import { Dropdown,  Select, Space, message } from "antd";
import { FaBars } from "react-icons/fa";
import {  FiLock, FiLogOut, FiUser } from "react-icons/fi";
import { BiUser } from "react-icons/bi";
import { useRouter } from "next/navigation";
import { useUser } from "../../contexts/user";
import { useMemo, useState } from "react";



const Header = () => {
    const user = useUser()
    const router = useRouter()

    const [arrow, setArrow] = useState('Hide');
    

    const handleLogout = () => {
        localStorage.removeItem('token')
        message.success('Logged out successfully')
        router.push('/login')
    }

    const handleProfile = () => {
        if (user?.role === 'admin') {
            router.push('/admin/profile')
        }
    }

    const handleChangePassword = () => {
        if (user?.role === 'admin') {
            router.push('/admin/profile/change-password')
        }
    }

    const items = [
        {
            label: 'Profile',
            icon: <FiUser />,
            key: '1',
            onClick: handleProfile,
        },
        {
            label: 'Change Password',
            icon: <FiLock />,
            key: '2',
            onClick: handleChangePassword,
        },
        {
            label: 'Logout',
            icon: <FiLogOut />,
            key: '3',
            onClick: handleLogout,
        }
    ];

    return (
        <header className="header z-10">
            <div className="flex justify-between items-center h-full p-4">
                <div className="">
                    <FaBars
                        className="md:hidden"
                        role="button"
                        onClick={() => {
                            window.document.querySelector('.sidebar').classList.toggle('open')
                            window.document.querySelector('.sidebar-overlay').classList.toggle('open')
                        }}
                    />
                </div>

                <div className="flex items-center gap-x-6">
                    <Dropdown
                        menu={{
                            items,
                        }}
                    >
                        <a>
                            <Space>
                                {user && <span className="cursor-pointer">{user?.name}</span>}
                                <BiUser className="cursor-pointer" size={18} />
                            </Space>
                        </a>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}

export default Header

