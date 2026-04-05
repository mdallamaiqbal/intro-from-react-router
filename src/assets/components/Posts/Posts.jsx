import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData()
    return (
        <div>
            <h2>These are my posts {posts.length}</h2>
            {
                posts.map((post,ind)=> <Post key={ind} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;