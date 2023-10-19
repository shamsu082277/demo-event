import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import PrimaryLayout from '../Layout/PrimaryLayout';
import ErrorPage from '../Pages/ErrorPage404/ErrorPage';
import Home from '../Pages/HomePage/Home';
import AboutUsPage from '../Pages/AboutUsPage/AboutUsPage';
import ServicesPage from '../Pages/ServicesPage/ServicesPage';
import BlogPage from '../Pages/BlogPage/BlogPage';
import ContactPage from '../Pages/ContactPage/ContactPage';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const myCreatedRoute = createBrowserRouter([
    {
        path:"/",
        element:<PrimaryLayout></PrimaryLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children:[
            {
                path:"/",
                element:<Home></Home>,
                loader:()=>fetch('/event.json')
            },
            {
                path:"/about",
                element:<PrivateRoute>
                    <AboutUsPage></AboutUsPage>
                </PrivateRoute>
                
            },
            {
                path:"/services",
                element:<ServicesPage></ServicesPage>,
                loader:()=> fetch('/event.json')
            },
            {
                path:"/services/:id",
                element: <PrivateRoute>
                    <ServicesPage></ServicesPage>
                </PrivateRoute> ,
                loader: ()=> fetch ('/event.json')
            },
            {
                path:"/blog",
                element: <PrivateRoute>
                    <BlogPage></BlogPage>
                </PrivateRoute>
                
            },
            {
                path:"/contact",
                element:<ContactPage></ContactPage>
            },
            {
                path:"/login",
                element:<Login></Login>
            },
            {
                path:"/register",
                element:<Register></Register>
            }
        ]
    }
])

export default myCreatedRoute;