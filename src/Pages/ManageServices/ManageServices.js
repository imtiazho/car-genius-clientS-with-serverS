import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleDelete = (id) => {
        const procced = window.confirm('Are  you sure to delete?');
        if(procced){
            const url = `http://localhost:5000/services/${id}`;
            fetch(url, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data =>  {
                if(data.deletedCount > 0){
                    const remaining = services.map(service => service._id !== id);
                    setServices(remaining)
                }
            })
            console.log('Delete', id)
        }
    }

    return (
        <div className='w-50 mx-auto'>
            <h1>Manage your Services</h1>

            {
                services.map(service => (
                    <div key={service._id}>
                        <h4>{service.name}</h4>
                        <button onClick={() => handleDelete(service._id)}>X</button>
                    </div>
                ))
            }
        </div>
    );
};

export default ManageServices;