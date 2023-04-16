import React from 'react';
import  ReactDOM  from 'react-dom/client';


import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {Footer} from './src/components/Footer';


const AppLayout = ()=>{
    return (
     <React.Fragment>
        <Header></Header>
        <Body></Body>
        <Footer></Footer>
     </React.Fragment>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>);