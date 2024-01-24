"use client"

import Sidebar from "../components/layout/sidebar";
import Header from "../components/layout/header";
import { FaCartPlus, FaHome, FaPrint, FaShoppingBag, FaUniversity, FaWallet, FaWrench } from "react-icons/fa";
import { FaBoxArchive } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { fetchUser } from "../helpers/backend";
import MainLoader, { hideLoader } from "../components/common/loader";
import { useRouter } from "next/navigation";
import UserContext from "../contexts/user";

const Layout = ({ children }) => {
    const router = useRouter()
    const [user, setUser] = useState(null)

    useEffect(() => {
        fetchUser().then(({ success, data }) => {
            if (success === true) {
                hideLoader()
                setUser(data)
            } else {
                router.push('/login')
            }
        })
    }, [])


    if (!user) {
        return (
            <>
                <MainLoader />
            </>
        )
    }

    return (
        <div className="min-h-screen bg-gray-100">
            <UserContext.Provider value={user}>
                <Sidebar title="Wilhloesch Travel" menu={menu} />
                <Header title="Wilhloesch Travel" />
                <div className="content">
                    <div className="p-4">
                        {children}
                    </div>
                </div>
            </UserContext.Provider>
        </div>
    )
}

export default Layout


const menu = [
    {
        menu: "Menu",
    },
    {
        label: "Dashboard",
        href: "/",
        icon: <FaHome />
    },
    {
        label: "Tour",
        icon: <FaBoxArchive />,
        child: [
            {
                label: "Add Tour",
                href: "/admin/tour/add",
            },
            {
                label: "Tour List",
                href: "/admin/tour/list",
            }
        ]
    },
    {
        label: "Sales",
        icon: <FaCartPlus />,
        child: [
            {
                label: "Sales",
                href: "/sales",
            },
            {
                label: "Customers",
                href: "/customers",
            }
        ]
    },
    {
        label: "Purchases",
        icon: <FaWallet />,
        child: [
            {
                label: "Purchases",
                href: "/purchases",
            },
            {
                label: "Vendors",
                href: "/vendors",
            }
        ],
    },
    {
        label: "Banking",
        icon: <FaUniversity />,
        child: [
            {
                label: "Accounts",
                href: "/accounts",
            },
            {
                label: "Currencies",
                href: "/currencies",
            },
            {
                label: "Transactions",
                href: "/transactions",
            },
            {
                label: "Transfer",
                href: "/transfer",
            },
            {
                label: "Reconciliations",
                href: "/reconciliations",
            }
        ]
    },
    {
        label: "About Page",
        href: "/admin/about-page",
        icon: <FaPrint />,
    },
    {
        label: "Landing Page",
        href: "/admin/landing-page",
        icon: <FaPrint />,
    },
    {
        label: "Gallery Page",
        href: "/admin/gallery",
        icon: <FaPrint />,
    },
    {
        label: "Settings",
        href: "/settings",
        icon: <FaWrench />
    },
]