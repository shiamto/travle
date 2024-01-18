"use client";

import Sidebar from "../../components/layout/sidebar";
import Header from "../../components/layout/header";
import {
  FaCar,
  FaHome,
  FaWrench,
  FaUser,
} from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { PiNewspaperLight } from "react-icons/pi";
import { useEffect, useState } from "react";
import { fetchUser } from "../../helpers/backend";
import MainLoader, { hideLoader } from "../../components/common/loader";
import { useRouter } from "next/navigation";
import { BiCategory, BiCreditCard, BiDollar, BiGlobe } from "react-icons/bi";
import UserContext from "../../contexts/user";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { ImExit } from "react-icons/im";
import { FaUsers } from "react-icons/fa6";
import { IoFlagOutline } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";

const Layout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  // useEffect(() => {
  //   fetchUser().then(({ error, data }) => {
  //     if (error === false && data.role === "admin") {
  //       hideLoader();
  //       setUser(data);
  //     } else {
  //       router.push("/login");
  //     }
  //   });
  // }, []);

  // if (!user) {
  //   return (
  //     <>
  //       <MainLoader />
  //     </>
  //   );
  // }

  return (
    <div className="min-h-screen bg-gray-100">
      {!!user && (
        <>
          <UserContext.Provider value={user}>
            <Sidebar title="Wilhloesch" menu={menu} />
            <Header title="Wilhloesch" />
            <div className="content">
              <div className="p-4">{children}</div>
            </div>
          </UserContext.Provider>
        </>
      )}
    </div>
  );
};

export default Layout;

const menu = [
  {
    menu: "Menu",
  },
  {
    label: "Dashboard",
    href: "/admin",
    icon: <MdOutlineSpaceDashboard />,
  },
  {
    label: "Live Site",
    href: "/",
    icon: <ImExit />,
  },
  {
    label: "Categories",
    href: "/admin/category",
    icon: <BiCategory />,
  },
  {
    label: "Users",
    href: "/admin/users",
    icon: <FaUsers />,
  },
  {
    label: "Vehicle List",
    href: "/admin/vehicle",
    icon: <FaCar />,
  },
  {
    label: "Currencies",
    icon: <BiDollar />,
    href: "/admin/currencies",
    childHrefs: ["/admin/currencies/add", "/admin/currencies/edit/.*"],
  },
  {
    label: "Countries",
    icon: <IoFlagOutline />,
    href: "/admin/countries",
    childHrefs: ["/admin/countries/add", "/admin/countries/edit/.*"],
  },
  {
    label: "Payment Methods",
    icon: <BiCreditCard />,
    href: "/admin/payment_method",
    childHrefs: ["/admin/payment_method/add", "/admin/payment_method/edit/.*"],
  },
  {
    label: "Subscription",
    href: "/admin/subscription",
    icon: <MdSubscriptions />,
  },
  {
    label: "Newsletter",
    href: "/admin/newsletter",
    icon: <PiNewspaperLight />,
  },
  {
    label: "Contacts",
    href: "/admin/contacts",
    icon: <MdOutlineContactSupport />,
  },
  {
    label: "Settings",
    href: "/admin/settings",
    icon: <FaWrench />,
  },
  {
    label: "Page Settings",
    href: "/admin/page-setting",
    icon: <FaWrench />,
  },
];
