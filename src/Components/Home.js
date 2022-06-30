import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
    const { register, handleSubmit } = useForm();
    const [parts, setParts] = useState([])
    console.log(parts)

    useEffect(() => {
        fetch('http://localhost:5000/user', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => setParts(data))
    }, []);
    const onSubmit = data => {
        //send to your database
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                // authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(data.firstName)
        })
            .then(res => res.json())
            .then(inserted => {
                if (inserted.insertedId) {
                    // toast.success('product added successfully');
                    // reset()
                }
                else {
                    // toast.error('failed to add')
                }
            })
        console.log(data.firstName)
    };




    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input input-bordered w-full max-w-xs" placeholder='add task' {...register("firstName")} />
                <input className="btn" type="submit" />
            </form>


        </div>
    );
};

export default Home;