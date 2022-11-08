import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Books from '../Components/AllBooks/Books';
import SignIn from '../Components/Authorization/SignIn/SignIn';
import SignUp from '../Components/Authorization/SignUp/SignUp';
import Blogs from '../Components/Blogs/Blogs';
import Details from '../Components/Details/Details';
import Favorite from '../Components/Favorite/Favorite';
import HomePages from '../Components/HomePages/HomePages/HomePages';
import MyReview from '../Components/MyReview/MyReview';
import Main from '../Layouts/Main';
import Rout404 from './Rout404';


export const projectRouter=createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<HomePages></HomePages>,
                loader:()=>fetch('http://localhost:5000/home-services')
            },
            {
                path:'/myreview',
                element:<MyReview></MyReview>
            },
            {
                path:'/signIn',
                element:<SignIn></SignIn>
            },
            {
                path:'/signUp',
                element:<SignUp></SignUp>
            },
            {
                path:'/blogs',
                element:<Blogs></Blogs>
            },
            {
                path:'/books',
                element:<Books></Books>,
                loader:()=>fetch('http://localhost:5000/all-services/')
            },
            {
                path:'/all-services/:id',
                element:<Details></Details>,
                loader:({params})=>fetch(`http://localhost:5000/all-services/${params.id}`)
            },
            {
                path:'/favorite',
                element:<Favorite></Favorite>
            }
        ]
    },
    {
        path:'*',
        element:<Rout404></Rout404>
    }
])

const Route = () => {
    return (
        <div>
            
        </div>
    );
};

export default Route;