'use client';
import React from 'react';
import { useFetch } from '../../../helpers/hooks';
import { delAdminTour, fetchAdminTourList } from '../../../helpers/backend';
import PageTitle from '../../../components/common/title';
import Table from '../../../components/common/table';
import { useRouter } from 'next/navigation';

const TourList = () => {
    const [data, getData] = useFetch(fetchAdminTourList)
    const { push } = useRouter()
    const columns = [
        { text: "Name", dataField: "name" },
        { text: "Duration", dataField: "duration" },
        { text: "Start & City", dataField: "start_end_city" },
        { text: "Start Price", dataField: "start_price" },
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
                action
                onView={({ slug }) => push('/admin/tour/view/' + slug)}
                onDelete={delAdminTour}

            />
        </div>
    );
};

export default TourList;