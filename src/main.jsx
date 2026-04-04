import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router'
import Root from './assets/components/Root/Root.jsx'
import Home from './assets/components/Home/Home.jsx'
import Mobiles from './assets/components/Mobiles/Mobiles.jsx'
import Laptops from './assets/components/Laptops/Laptops.jsx'
import Users from './assets/components/Users/Users.jsx'
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
      Component:Users}
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
