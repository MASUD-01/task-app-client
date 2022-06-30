// import React, { useState } from 'react';
// import { useEffect } from 'react';
// import { useParams } from 'react-router-dom'
// import { useForm } from 'react-hook-form';

// const UpdateUser = () => {
//     const { id } = useParams()
//     const [user, setUser] = useState([])
//     const { register, handleSubmit } = useForm();
//     console.log(user)
//     useEffect(() => {
//         fetch(`http://localhost:5000/update/${id}`)
//             .then(res => res.json())
//             .then(data => setUser(data))
//     }, [])

//     const onSubmit = data => {
//         const tas = data.firstName
//         const tasks = { tas }
//         console.log(tasks)
//         //send to your database
//         fetch(`http://localhost:5000/task/${id}`, {
//             method: 'PUT',
//             headers: {
//                 'content-type': 'application/json',

//             },
//             body: JSON.stringify(tasks)
//         })
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data)
//                 alert('task atask')
//             })
//     };
//     return (
//         <div className='wide'>
//             <h2>Update your Task {user.tas}</h2>
//             <form onSubmit={handleSubmit(onSubmit)}>
//                 <input className="input input-bordered w-full max-w-xs" placeholder='add task' {...register("firstName")} />
//                 <input className="btn" type="submit" />
//             </form>
//         </div>
//     );
// };

// export default UpdateUser;