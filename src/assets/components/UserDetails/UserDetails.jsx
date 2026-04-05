import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
    const user = useLoaderData();
    const {website,name} = user
    return (
        <div>
            <h2>User details here</h2>
            <h4>Name: {name}</h4>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;