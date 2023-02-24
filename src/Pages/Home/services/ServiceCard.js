import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { name, details, price, img } = service
    return (
        <div className="card  bg-lime-300 shadow-2xl mx-5">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title ">{name}</h2>
                <p>{details.slice(0, 100)}...</p>
                <p className=' text-2xl font-bold '>{price} $</p>
                <div className="card-actions">
                    <Link to='/fooddetails'><button className="btn border-none text-black  bg-lime-500">View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;