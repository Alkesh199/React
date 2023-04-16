import React,{lazy, Suspense} from 'react';
import  ReactDOM  from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import {Footer} from './components/Footer';
import AboutUs from './components/AboutUs';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage  from './components/ErrorPage';
import { Outlet } from 'react-router-dom';
import RestaurentMenu from './components/RestaurentMenu';
import Profile from './components/Profile';
import ProfileSecond from './components/ProfileSecond';
import ShimmerUI from './components/ShimmerUI';

const ContactUs = lazy(()=>import('./components/ContactUs'));
const AppLayout = ()=>{
    return (
     <React.Fragment>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
     </React.Fragment>
    );

    
   
}

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children:[
            {
                path:"/about-us",
                element:<AboutUs/>, 
               },
               {
                path:"/",
                element:<Body/>,
                
               },
               {
                path:"contact-us",
                element:<Suspense fallback={<ShimmerUI/>}><ContactUs/></Suspense>
               },
               {
                path:"/restaurants/:id",
                element:<RestaurentMenu/>
               }
        ]
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout></AppLayout>);
root.render(<RouterProvider router = {appRouter}></RouterProvider>)