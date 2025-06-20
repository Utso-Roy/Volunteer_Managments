import React from 'react';
import Root from '../Root/Root';
import Home from '../Home/Home'

import {
  createBrowserRouter,

} from "react-router";
import Login from '../Login/Login';
import Register from '../Register/Register';
import PrivateRoute from '../Private/PrivateRoute';
import AddVolunteer from '../AddVolunteer/AddVolunteer';
import VolunteerNeed from '../VolunteerNeed/VolunteerNeed';
import VolunteerDetails from '../VolunteerDetails/VolunteerDetails';
import BeAVolunteers from '../BeAVolunteers/BeAVolunteers';
import ManagePost from '../ManagePost/ManagePost';
import AllVolunteerDetails from '../AllVolunteerDetails/AllVolunteerDetails';


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
      },
      {
        path: '/volunteer-needs',
        element : <PrivateRoute> <VolunteerNeed> </VolunteerNeed></PrivateRoute>
      },
      
      {
        path: '/add-volunteer',
        element : <PrivateRoute> <AddVolunteer></AddVolunteer> </PrivateRoute>
      },
      {
        path: '/volunteer-details/:id',
        element : <PrivateRoute> <VolunteerDetails></VolunteerDetails> </PrivateRoute>
      },
      {
        path: '/be-a-volunteer',
        element : <PrivateRoute> <BeAVolunteers></BeAVolunteers> </PrivateRoute>
      },
      {
        path: '/manage_post/:id',
        element : <PrivateRoute> <ManagePost></ManagePost> </PrivateRoute>
      },
      {
        path: '/all_Volunteer_details/:id',
        element : <PrivateRoute> <AllVolunteerDetails></AllVolunteerDetails> </PrivateRoute>
      }
      






    ]
  },
]);