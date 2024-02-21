import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Root from './routes/Root.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './routes/ErrorPage';
import Contact from './routes/ContactUsPage';
import AboutPage from './routes/AboutPage';
import LandingPage from './routes/LandingPage';
import SignupPage from './routes/SignupPage';
import LoginPage from './routes/LoginPage';
import BatchPage,{loader as batchPageLoader} from './routes/BatchPage';
import RecordedSessionPage,{loader as recordedSessionPageLoader} from './routes/RecordedSessionPage';
import AddSessionPage from './routes/AddSessionPage';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path:"/",
        element:<LandingPage/>
      },
      {
        path: "/contact",
        element: <Contact/>,
      },
      {
        path: "/about",
        element: <AboutPage/>,
      },
      {
        path:"/signup",
        element:<SignupPage/>
      },
      {
        path:"/login",
        element:<LoginPage/>
      },
      {
        path:"/batches",
        element:<BatchPage/>,
        loader:batchPageLoader
      },
      {
        path:"/batches/:batchId",
        element:<RecordedSessionPage/>,
        loader:recordedSessionPageLoader
        
      },
      {
        path:"/addSession",
        element:<AddSessionPage/>
      }
    ]
  }
 
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


