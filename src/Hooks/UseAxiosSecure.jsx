import axios from "axios";
import React, { use } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000",
});

const UseAxiosSecure = () => {
  const { user, logOutUser } = use(AuthContext);

  axiosInstance.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${user.accessToken}`;
    return config;
  });
  //response interceptor
  axiosInstance.interceptors.response.use((response) => {
    return response;
  }),
    (error) => {
      if (error.status === 401 || error.status === 403) {
        logOutUser
          .then(() => {
            console.log("Sign out user for 401 status code ");
          })
          .catch((error) => {
            console.log(error);
          });
      }
      return Promise.reject(error);
    };

  return axiosInstance;
};

export default UseAxiosSecure;
