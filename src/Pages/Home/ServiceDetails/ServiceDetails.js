import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const { serviceId } = useParams()
    return (
        <div>
            <h1>This is service details of {serviceId}</h1>
            <Link to='/checkout'>Proceed CheckOut</Link>
        </div>
    );
};

export default ServiceDetails;