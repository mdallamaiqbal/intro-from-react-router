import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {
    const post =useLoaderData();
    const navigate = useNavigate();
    const {title,body} = post
    return (
        <div>
           <h3>{title}</h3>
           <p>{body}</p>
           <button onClick={()=> navigate(-1)}>Go back</button>
        </div>
    );
};

export default PostDetails;