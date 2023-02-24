import React from 'react';

const ServiceCard = ({ service }) => {
    const { name, details, price, img } = service
    return (
        <div className="card  bg-lime-400  shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{details.slice(0, 100)}...</p>
                <p className=' text-2xl font-bold '>{price} $</p>
                <div className="card-actions">
                    <button className="btn btn-primary">Details</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;