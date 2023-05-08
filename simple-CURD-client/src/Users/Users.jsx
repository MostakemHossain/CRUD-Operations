import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {
    const loadedData = useLoaderData();
    const [users, setUsers] = useState(loadedData)
    const handleDelete = (_id) => {
        console.log(_id);
        fetch(`http://localhost:4000/users/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Delete success fully')

                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining)
                }
            })
    }
    return (
        <div>
            <h1>{users.length}</h1>
            {
                users.map(user => <p
                    key={user._id}
                >  {user.name} : {user.email}
                    <Link to={`/update/${user._id}`}>
                        <button>Update</button>
                    </Link>

                    <button onClick={
                        () => handleDelete(user._id)
                    }>X</button></p>)
            }
        </div >
    );
};

export default Users;