import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { name, price, description, img, id } = service;
    const navigate = useNavigate()
    const serviceDetails = (id) => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='service-card'>
            <img src={img} alt="" />
            <div className="service-info">
                <h3>{name}</h3>
                <h4>Price: {price}$</h4>
                <p>{description}</p>
            </div>
            <button onClick={() => serviceDetails(id)} className='btn btn-primary'>Book: {name}</button>
        </div>
    );
};

export default Service;