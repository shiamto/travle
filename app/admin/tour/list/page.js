'use client';
import React from 'react';
import { useFetch } from '../../../helpers/hooks';
import { fetchTourList } from '../../../helpers/backend';
import PageTitle from '../../../components/common/title';
import Table from '../../../components/common/table';

const TourList = () => {
    const [data, getData] = useFetch(fetchTourList)

    const columns = [
       
        { text: "Name", dataField: "name" },
        {
            text: "Vehicle Number",
            dataField: "vehicle_number",
        },
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