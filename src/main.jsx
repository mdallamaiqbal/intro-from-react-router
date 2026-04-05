import { Component, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Root from './assets/components/Root/Root.jsx'
import Home from './assets/components/Home/Home.jsx'
import Mobiles from './assets/components/Mobiles/Mobiles.jsx'
import Laptops from './assets/components/Laptops/Laptops.jsx'
import Users from './assets/components/Users/Users.jsx'
import UserDetails from './assets/components/UserDetails/UserDetails.jsx'
import Posts from './assets/components/Posts/Posts.jsx'
import PostDetails from './assets/components/PostDetail/PostDetails.jsx'
const router =createBrowserRouter([
  {
    path:'/',
    Component: Root,
    children:[
      {index: true, Component:Home},
      {path: 'mobiles', Component:Mobiles},
      {path:'laptops', Component:Laptops},
      {path:'users',
       loader: () => fetch('https://jsonplaceholder.typicode.com/users'), 
      Component:Users},
       {
    path:'users/:userID',
    loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.userID}`),
    Component: UserDetails
    },
   {
    path:'posts',
    loader: () => fetch('https://jsonplaceholder.typicode.com/posts'),
    Component: Posts
   },
    {
    path:'posts/:postID',
    loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postID}`),
    Component: PostDetails
    },
    {
      path:'*',
      element: <h1>404 not found</h1>
    }
    ]
  },
  {
    path:'about',
    element: <div>this is about</div>
  },
  {
    path:'app',
    Component:App
  }
 
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
