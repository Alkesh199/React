import React,{lazy, Suspense, useState} from 'react';
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
import InstaMart from './components/InstaMart';
import UserContext from './utils/UserContext';

const ContactUs = lazy(()=>import('./components/ContactUs'));
const AppLayout = ()=>{

    const [user,setUser] = useState({
        name:"alkesh",
        email:"alkeshkumar199@gmail.com",
   });

    

    return (
     <React.Fragment>
        {/* //overriding the context value  */}

        <UserContext.Provider value={{user:user}}>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </UserContext.Provider>
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
               },
               {
                path:"instamart",
                element:<InstaMart/>
               }
        ]
    },
    
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout></AppLayout>);
root.render(<RouterProvider router = {appRouter}></RouterProvider>)