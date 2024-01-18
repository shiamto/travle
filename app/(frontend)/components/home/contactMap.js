import React from 'react';

const ContactMap = ({ contactData }) => {
    const data = contactData?.content;
    let mapData;
    try {
        mapData = JSON.parse(data)?.map;
    } catch (error) {
        console.error("Error parsing JSON:", error);
    }
    return (
        <div>
            <div className='container mx-auto'>
                <div className="lg:w-full w-auto mb-20">
                    {<iframe
                        className="w-[100%] rounded-lg border border-primary"
                        height={400}
                        frameBorder="0"
                        title="map"
                        src={mapData}
                    ></iframe>}
                </div>
            </div>
        </div>
    );
};

export default ContactMap;