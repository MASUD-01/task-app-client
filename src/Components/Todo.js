import React, { useEffect, useState } from 'react';

const Todo = () => {
    const [tasks, setTask] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTask(data))
    }, [])
    return (
        <div>
            <h1> Your Todo</h1>

            {
                tasks.map(task => <li key={task._id}>{task.tas}</li>)
            }
        </div>
    );
};

export default Todo;