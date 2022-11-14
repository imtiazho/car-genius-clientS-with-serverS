import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import axios from 'axios';

const Ordered = () => {
    const [orders, setOrders] = useState([])
    const [user] = useAuthState(auth)

    useEffect(() => {
        const getOrders = async () => {
            const userEmail = user?.email;
            const url = `http://localhost:5000/allOrders?email=${userEmail}`

            try {
                const { data } = await axios.get(url, {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                setOrders(data)
            }
            catch (error) {
                console.log(error.message)
            }
        }

        getOrders()
    }, [user])

    return (
        <div>
            <h1>Total Orders: {orders?.length}</h1>
        </div>
    );
};

export default Ordered;