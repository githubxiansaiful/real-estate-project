import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../main_layout/MainLayout";
import Home from "../pages/Home";
import Error from "../pages/Error";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyProfile from "../pages/MyProfile";
import PrivateRoute from "./PrivateRoute";
import EditProfile from "../pages/EditProfile";
import PropertyItem from "../components/PropertyItem";


const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/real_estate.json')
            },
            {
                path: '/property/:id',
                element: <PrivateRoute><PropertyItem></PropertyItem></PrivateRoute>,
                loader: () => import('/real_estate.json')
            },
            {
                path: "/about-us",
                element: <AboutUs></AboutUs>
            },
            {
                path: "/contact-us",
                element: <Contact></Contact>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/my-profile",
                element: <PrivateRoute>
                    <MyProfile></MyProfile>
                </PrivateRoute>
            },
            {
                path: "/edit-profile",
                element: <PrivateRoute>
                    <EditProfile></EditProfile>
                </PrivateRoute>
            }
        ]
    }
])

export default router;