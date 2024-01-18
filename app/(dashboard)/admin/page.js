import React from 'react';
import PageTitle from '../../components/common/title';
import { BsFillBoxSeamFill, BsCartDash, BsBagDash } from 'react-icons/bs';
import { FiUsers } from 'react-icons/fi';

const AdminDashboard = () => {
  return (
    <div>
      <PageTitle title="Admin Dashboard" />
      <div className="flex lg:flex-row flex-col gap-8">
        <div className="lg:w-1/3 md:w-1/2 w-full bg-white shadow-lg rounded-lg h-24">
          <div className="flex justify-between items-center px-4 py-4">
            <div className="">
              <p className="text-muted">{('Total Vehicle')}</p>
              <p className="header_7 mt-2">20</p>
            </div>
            <div className="bg-primary rounded-full w-16 h-16 flex justify-center items-center -mt-20">
              <BsFillBoxSeamFill className="text-white" size={24} />
            </div>
          </div>
        </div>


        <div className="lg:w-1/3 md:1/2 w-full bg-white shadow-lg rounded-lg h-24">
          <div className="flex justify-between items-center px-4 py-4">
            <div className="">
              <p className="text-muted">{('Total Categories')}</p>
              <p className="header_7 mt-2">15</p>
            </div>
            <div className="bg-primary rounded-full w-16 h-16 flex justify-center items-center -mt-20">
              <BsCartDash className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:1/2 w-full bg-white shadow-lg rounded-lg h-24">
          <div className="flex justify-between items-center px-4 py-4">
            <div className="">
              <p className="text-muted">{('Total Ride & Rent')}</p>
              <p className="header_7 mt-2">18</p>
            </div>
            <div className="bg-primary rounded-full w-16 h-16 flex justify-center items-center -mt-20">
              <BsBagDash className="text-white" size={24} />
            </div>
          </div>
        </div>

      </div>

      <div className="flex lg:flex-row flex-col gap-8 mt-8">
        <div className="lg:w-1/3 md:1/2 w-full bg-white shadow-lg rounded-lg h-24">
          <div className="flex justify-between items-center px-4 py-4">
            <div className="">
              <p className="text-muted">{('Total User')}</p>
              <p className="header_7 mt-2">20</p>
            </div>
            <div className="bg-primary rounded-full w-16 h-16 flex justify-center items-center -mt-20">
              <FiUsers className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:1/2 w-full bg-white shadow-lg rounded-lg h-24">
          <div className="flex justify-between items-center px-4 py-4">
            <div className="">
              <p className="text-muted">{('Total Driver')}</p>
              <p className="header_7 mt-2">20</p>
            </div>
            <div className="bg-primary rounded-full w-16 h-16 flex justify-center items-center -mt-20">
              <FiUsers className="text-white" size={24} />
            </div>
          </div>
        </div>

        <div className="lg:w-1/3 md:1/2 w-full bg-white shadow-lg rounded-lg h-24">
          <div className="flex justify-between items-center px-4 py-4">
            <div className="">
              <p className="text-muted">{('Total Owner')}</p>
              <p className="header_7 mt-2">20</p>
            </div>
            <div className="bg-primary rounded-full w-16 h-16 flex justify-center items-center -mt-20">
              <FiUsers className="text-white" size={24} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;