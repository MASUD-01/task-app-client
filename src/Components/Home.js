import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {
    const { register, handleSubmit } = useForm();
    const [parts, setParts] = useState([])
    // console.log(parts)

    useEffect(() => {
        fetch('http://localhost:5000/task', {
            method: 'GET',
        })
            .then(res => res.json())
            .then(data => setParts(data))
    }, [parts]);
    const onSubmit = data => {
        const tas = data.firstName
        const tasks = { tas }
        // console.log(tasks)
        //send to your database
        fetch('http://localhost:5000/task', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',

            },
            body: JSON.stringify(tasks)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                alert('task atask')
            })
    };




    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input input-bordered w-full max-w-xs" placeholder='add task' {...register("firstName")} />
                <input className="btn" type="submit" />
            </form>

            {
                parts.map(task => <li key={task._id}>{task.tas}</li>)
            }


        </div>
    );
};

export default Home;