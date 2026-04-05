import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const navigate =useNavigate()
    const handleNavigate =()=>{
       navigate(`/posts/${post.id}`)
    }
    return (
        <div style={{border: '2px solid red'}}>
            <h3>Title : {post.title}</h3>
            <Link to={`/posts/${post.id}`}>
             <button>Post Details</button>
            </Link>
            <button onClick={handleNavigate}>Details of:</button>
        </div>
    );
};

export default Post;