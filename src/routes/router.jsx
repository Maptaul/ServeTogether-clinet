// Desc: Router for the application

import { createBrowserRouter } from "react-router-dom";
import MyVolunteerNeedPost from "../Components/MyVolunteerNeedPost";
import MyVolunteerRequestPost from "../Components/MyVolunteerRequestPost";
import UpdateVolunteerNeedPost from "../Components/UpdateVolunteerNeedPost";
import AuthLayout from "../Layouts/AuthLayout";
import HomeLayout from "../Layouts/HomeLayout";
import MainLayout from "../Layouts/MainLayout";
import AddVolunteer from "../Pages/AddVolunteer";
import AllVolunteerNeeds from "../Pages/AllVolunteerNeeds";
import ErrorPage from "../Pages/ErrorPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import VolunteerNeedDetails from "../Pages/VolunteerNeedDetails";
import ManageMyPostsRoute from "./../Layouts/ManageMyPostsRoute";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    element: <MainLayout />,
    children: [
      {
        path: "/AllVolunteer",
        element: <AllVolunteerNeeds />,
      },
      {
        path: "/AddVolunteer",
        element: (
          <PrivateRoute>
            <AddVolunteer />
          </PrivateRoute>
        ),
      },
      {
        path: "/VolunteerNeedDetails",
        element: (
          <PrivateRoute>
            <VolunteerNeedDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/volunteerneed/:id",
        element: (
          <PrivateRoute>
            <VolunteerNeedDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/update/:id",
        element: (
          <PrivateRoute>
            <UpdateVolunteerNeedPost />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "ManageMyPosts",
    element: <ManageMyPostsRoute />,
    children: [
      {
        path: "MyVolunteerNeedPost", // Relative path
        element: (
          <PrivateRoute>
            <MyVolunteerNeedPost />
          </PrivateRoute>
        ),
      },

      {
        path: "MyVolunteerRequestPost", // Relative path
        element: (
          <PrivateRoute>
            <MyVolunteerRequestPost />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login", // Relative path
        element: <Login />,
      },
      {
        path: "register", // Relative path
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
