'use client';
import React from 'react';
import { useFetch } from '../../../helpers/hooks';
import { fetchTourList } from '../../../helpers/backend';
import PageTitle from '../../../components/common/title';
import Table from '../../../components/common/table';

const TourList = () => {
    const [data, getData] = useFetch(fetchTourList)
    console.log("tourList", data)
    const columns = [
        { text: "Name", dataField: "name" },
        { text: "Explorer", dataField: "explorer" },
        { text: "Duration", dataField: "duration" },
        { text: "Highlights", dataField: "highlights" },
        { text: "Offer Name", dataField: "offer_name" },
        { text: "Start Price", dataField: "start_price" },
        { text: "Offer Price", dataField: "offer_price" },
        { text: "Facilities", dataField: "facilities" },
    ];


    return (
        <div>
            <PageTitle title="Tour List" />
            <Table
                columns={columns}
                data={data}
                onReload={getData}
                pagination
                indexed
            />
        </div>
    );
};

export default TourList;