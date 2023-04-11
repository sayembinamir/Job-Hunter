import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './Home';
import Statistics from './Statistics';
import AppliedJobs from './AppliedJobs';
import Blog from './Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path:'/',
        element: <Home></Home>,
      },
      {
        path:'statistics',
        element: <Statistics></Statistics>,
      },
      {
        path:'appliedjobs',
        element:<AppliedJobs></AppliedJobs>,
      },
      {
        path:'blog',
        element: <Blog></Blog>,
      },
    ]
  },

]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
