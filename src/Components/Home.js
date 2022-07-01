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
        const task = data.firstName
        const tasks = { task }
        console.log(tasks)
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

    const handledelete = (id, tas) => {
        console.log(id, tas)
        const name = { tas }
        fetch(`http://localhost:5000/task/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {


                    fetch('http://localhost:5000/completed', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',

                        },
                        body: JSON.stringify(name)
                    })
                        .then(res => res.json())
                        .then(data => {
                            console.log(data)
                        })
                }
            })

    }


    return (
        <div className='wide'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="input input-bordered w-full max-w-xs" placeholder='add task' {...register("firstName")} />
                <input className="btn" type="submit" />
            </form>
            <div>

                {
                    parts.map(task => <li key={task._id} onClick={() => handledelete(task._id, task.task)}> <input type="checkbox" checked="checked" className="checkbox checkbox-xs" /> {task.task}</li>)

                }
            </div>


        </div>
    );
};

export default Home;