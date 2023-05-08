import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const loadedData = useLoaderData();

    const updateUser = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const updateUser = { name, email }

        fetch(`http://localhost:4000/users/${loadedData._id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateUser),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
    }
    return (
        <div>
            <h1>Uptade information of :{loadedData.name}</h1>

            <form onSubmit={updateUser}>
                <input type="text" name="name" defaultValue={loadedData?.name} />
                <br />
                <input type="email" name="email" defaultValue={loadedData?.email} id="" />
                <br />
                <input type="submit" value="Update User" />



            </form>
        </div>
    );
};

export default Update;