import React from "react";
import Root from "../Root/Root";
import Home from "../Home/Home";

import { createBrowserRouter } from "react-router";
import Login from "../Login/Login";
import Register from "../Register/Register";
import PrivateRoute from "../Private/PrivateRoute";
import AddVolunteer from "../AddVolunteer/AddVolunteer";
import VolunteerNeed from "../VolunteerNeed/VolunteerNeed";
import VolunteerDetails from "../VolunteerDetails/VolunteerDetails";
import BeAVolunteers from "../BeAVolunteers/BeAVolunteers";
import ManagePost from "../ManagePost/ManagePost";
import AllVolunteerDetails from "../AllVolunteerDetails/AllVolunteerDetails";
import Error from "../Error/Error";
import TheGuide from "../Page/TheGuide";
import Contact from "../Page/Contact";
import DashboardLayout from "../Root/DashboardLayout";
import Dashboard from "../Page/Dashboard";
import VolunteerPostList from "../Page/VolunteerPostList";
import VolunteerRequestList from "../Page/VolunteerRequestList";
import Event from "../Page/Event";
import ProfileSetting from "../Page/ProfileSetting";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root> </Root>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/Register",
        element: <Register></Register>,
      },
      {
        path: "/volunteer-needs",
        element: (
          <PrivateRoute>
            {" "}
            <VolunteerNeed> </VolunteerNeed>
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteerGuide",
        element: <TheGuide> </TheGuide>,
      },
      {
        path: "/contact",
        element: <Contact> </Contact>,
      },

      {
        path: "/volunteer-details/:id",
        element: (
          <PrivateRoute>
            {" "}
            <VolunteerDetails></VolunteerDetails>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/be-a-volunteer",
        element: (
          <PrivateRoute>
            {" "}
            <BeAVolunteers></BeAVolunteers>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/event",
        element: (
          <PrivateRoute>
            {" "}
            <Event></Event>{" "}
          </PrivateRoute>
        ),
      },

      {
        path: "/all_Volunteer_details/:id",
        element: (
          <PrivateRoute>
            {" "}
            <AllVolunteerDetails></AllVolunteerDetails>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/add-volunteer",
        element: (
          <PrivateRoute>
            {" "}
            <AddVolunteer></AddVolunteer>{" "}
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/volunteer_post",
        element: (
          <PrivateRoute>
            {" "}
            <VolunteerPostList></VolunteerPostList>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/volunteer_request",
        element: (
          <PrivateRoute>
            {" "}
            <VolunteerRequestList></VolunteerRequestList>{" "}
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            {" "}
            <ProfileSetting></ProfileSetting>{" "}
          </PrivateRoute>
        ),
      },
    ],
  },
]);
