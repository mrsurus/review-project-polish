import React, { useContext } from 'react';
import useTitle from '../../../Hooks/useTitle';
import ServiceCard from '../../Home/services/ServiceCard';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from '../Spinner/Spinner';

const Allservice = () => {
    const {services, loading} = useContext(AuthContext)
    useTitle('All Service')

    if(loading){
        return <Spinner></Spinner>
    }

    return (
        <div className='m-10 '>
            <div>
                <p className='text-center text-5xl text-lime-500 font-bold my-10'>All Of Our Food is Here</p>
            </div>
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
              {
                services.map((service, id) => <ServiceCard key={id} service={service}>

                </ServiceCard>)
              }
           </div>
        </div>
    );
};

export default Allservice;