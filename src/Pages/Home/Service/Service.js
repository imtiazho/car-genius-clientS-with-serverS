import React from 'react';
import './Service.css'

const Service = ({ service }) => {
    const {name, price, description, img} = service;

    return (
        <div className='service-card'>
            <img src={img} alt="" />
            <div className="service-info">
                <h3>{name}</h3>
                <h4>Price: {price}$</h4>
                <p>{description}</p>
            </div>
            <button className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;