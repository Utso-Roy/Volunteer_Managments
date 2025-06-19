import React from 'react';
import Root from '../Root/Root';
import Home from '../Home/Home'

import {
  createBrowserRouter,

} from "react-router";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    children: [
      {index  : true , path : '/' , element : <Home></Home>}
      






    ]
  },
]);