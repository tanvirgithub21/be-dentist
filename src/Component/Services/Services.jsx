import React, { useEffect, useState } from 'react';
import './Services.css'
import SingleServices from './SingleServices/SingleServices';

const url = "https://raw.githubusercontent.com/tanvirgithub21/ass-10-data/gh-pages/services.json";

const Services = () => {

    const [services, setServives] = useState([]);

    useEffect( ()=>{
        fetch(url)
        .then(data => data.json())
        .then(response => setServives(response))
    },[])

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