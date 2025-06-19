import React from 'react';
import Root from '../Root/Root';
import Home from '../Home/Home'

import {
  createBrowserRouter,

} from "react-router";
import Login from '../Login/Login';
import Register from '../Register/Register';


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    children: [
      { index: true, path: '/', element: <Home></Home> },
      {
        path: '/login',
        element : <Login></Login>
      },
      {
        path: '/Register',
        element : <Register></Register>
      }
      






    ]
  },
]);