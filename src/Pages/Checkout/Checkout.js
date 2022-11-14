import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Checkout = () => {
    const { serviceId } = useParams();

    const [service, setServices] = useState({});

    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/services/${serviceId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [serviceId])


    const placeOrder = e => {
        e.preventDefault();

        const order = {
            servieName: service?.name,
            userEmail: user?.email,
            address: e.target.address.value,
            phone: e.target.phone.value,
        }

        axios.post('http://localhost:5000/order', order)
            .then(function (response) {
                const { data } = response;
                if(data.insertedId){
                    console.log('Order Done')
                }
            })

    }
    return (
        <div className='w-50 mx-auto'>
            <h1>This is Proceed Checkout: {service?.name}</h1>
            <form onSubmit={placeOrder}>
                <input className='w-100 mb-2' name='name' value={user?.displayName} placeholder='name' required type="text" readOnly /> <br />
                <input className='w-100 mb-2' value={user?.email} name='email' placeholder='email' required type="email" readOnly /> <br />
                <input className='w-100 mb-2' readOnly value={service.name} name='service' placeholder='service' required type="text" /> <br />
                <input className='w-100 mb-2' autoComplete='off' name='address' placeholder='address' required type="text" /> <br />
                <input autoComplete='off' className='w-100 mb-2' name='phone' placeholder='phone' required type="text" /> <br />
                <input className='btn btn-primary' type="submit" value="Submit Order" />
            </form>
        </div>
    );
};

export default Checkout;