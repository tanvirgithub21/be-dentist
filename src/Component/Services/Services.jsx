import React, { useEffect, useState } from 'react';
import { useServicesData } from '../Customhooks/Customhooks';
import './Services.css'
import SingleServices from './SingleServices/SingleServices';


const Services = () => {

    const [services, setServives, loding] = useServicesData()

    return (
        <div>
            <h2 className='headerText text-3xl font-semibold text-center my-7 '>Our Services</h2>
            <div className='servicesContainer grid gap-4 grid-cols-3 justify-center '>
                {
                    services.map(singleServics => <SingleServices key={singleServics.id} services={singleServics}/>)
                }
            </div>
        </div>  
    );
};

export default Services;