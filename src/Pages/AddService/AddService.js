import React from 'react';
import { useForm } from "react-hook-form";


const AddService = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('http://localhost:5000/services', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h2>Please Add a service</h2>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2' placeholder='Name' {...register("name")} />
                <textarea className='mb-2' placeholder='Description' {...register("description")} />
                <input className='mb-2' placeholder='Price' {...register("price")} />
                <input className='mb-2' placeholder='Photo Url' {...register("img")} />
                <input className='mb-2' type="submit" value='Add Service' />
            </form>
        </div>
    );
};

export default AddService;