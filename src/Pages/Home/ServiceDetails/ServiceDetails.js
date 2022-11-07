import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setServices] = useState({})
    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [serviceId])


    return (
        <div>
            <h1>This is service details of {service?.name}</h1>
            <Link to='/checkout'>Proceed CheckOut</Link>
        </div>
    );
};

export default ServiceDetails;