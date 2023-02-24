import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Components/Context/AuthProvider';
import ServiceCard from './ServiceCard';

const Services = () => {
 const {services} = useContext(AuthContext)


    return (
        <div className='bg-base-200 py-10 px-10'>
            <p className='text-center text-5xl text-lime-500 font-bold py-5'>Our Foods</p>
            <p className='text-center'>One of the best restaurant foods that you have ever tasted is the mouth-watering steak served at a high-end Green Foods</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 my-10'>
            {
                services.slice(0,3).map( (service,id) => 
                <ServiceCard key={id} service= {service}>
                </ServiceCard>)
            }
            </div>
            <div className='text-center'>
                <Link to='/allservice'><button className='btn btn-primary'>See All Services</button></Link>
            </div>
        </div>
    );
};

export default Services;