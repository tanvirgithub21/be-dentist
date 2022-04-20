import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { useServicesData } from '../Customhooks/Customhooks';
import auth from '../firebase.init';

const CheckOut = () => {

    const {id} = useParams()
    const [services, setServives, loding] = useServicesData()

    const [singleServices, setSingleServices] = useState({})

    useEffect(() =>{
        services.map(index =>{
            if(index.id == id){
                setSingleServices(index)
            }
        })
    },[services])
    const {servicesName,price} = singleServices;

    //user information lode
    const [userEmail, SetUaerEmail] = useState('')

    const [user] = useAuthState(auth);

    useEffect(() =>{
        SetUaerEmail(user?.email);
    },[user])
    
    return (
        <div className='w-full'>
            <div className="leading-loose max-w-[36rem] mx-auto">
                <div className=' max-w-[30rem]  px-6 py-8 rounded shadow-2xl'>
                <htmlform className="">
                        <p className="text-gray-800 font-medium text-xl text-center mb-3">Checkout From</p>

                        <div className="mb-4">
                        <label className="block text-sm text-gray-00" htmlFor="cus_name">Services Name</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Services Name" aria-label="Name" value={servicesName && servicesName} />
                        </div>

                        <div className="">
                        <label className="block text-sm text-gray-00" htmlFor="cus_name">Name</label>
                        <input className="w-full px-5 py-1 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="Your Name" aria-label="Name"/>
                        </div>

                        <div className="mt-2">
                        <label className="block text-sm text-gray-600" htmlFor="cus_email">Email</label>
                        <input className="w-full px-5  py-4 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Your Email" aria-label="Email" value={userEmail && userEmail}/>
                        </div>
                        <div className="mt-2">
                        <label className=" block text-sm text-gray-600" htmlFor="cus_email">Address</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_email" name="cus_email" type="text" required="" placeholder="Street" aria-label="Email"/>
                        </div>
                        <p className="mt-4 text-gray-800 font-medium">Payment inhtmlFormation</p>
                        <div className="">
                        <label className="block text-sm text-gray-600" htmlFor="cus_name">Bkash Mobile Number</label>
                        <input className="w-full px-2 py-2 text-gray-700 bg-gray-200 rounded" id="cus_name" name="cus_name" type="text" required="" placeholder="01xxxxxxxxx" aria-label="Name"/>
                        </div>
                        <div className="mt-4">
                        <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 rounded" type="submit">$ {price && price}</button>
                        </div>
                    </htmlform> 
                </div>
            
            </div>
                    
        </div>
    );
};

export default CheckOut;