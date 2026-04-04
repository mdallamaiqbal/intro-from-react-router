import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
    const users = useLoaderData();

    
    return (
        <div>
           <h2>
            this is user
           </h2>
           <div>
            {
                users.map((user ,ind)=> <User key={ind} user={user}></User>)
            }
           </div>
        </div>
    );
};

export default Users;