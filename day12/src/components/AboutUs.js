import { Outlet } from "react-router-dom";
import Profile from "./Profile";
import ProfileSecond from "./ProfileSecond";
import React from 'react';
import UserContext from "../utils/UserContext";

class AboutUs extends React.Component{

    constructor(props){
        super(props);
        console.log("parent constructor");
    }

    componentDidMount(){
        console.log("parent componentDidMount");
    }

    render(){
        console.log("parent render");
            return(
            <div className = "main-container">
            <p>About Us Page</p>
            <UserContext.Consumer>
                {({user})=><div className ="font-bold"><span >{user.name}</span><br></br><span>{user.email}</span></div>}
            </UserContext.Consumer>
            <Profile name={"alkesh class1"} role={"developer1 class"} val={1} userName={"Alkesh199"}></Profile>
            {/* <Profile name={"alkesh class2"} role={"developer2 class"} val={2} userName = {"Alkesh199"}></Profile> */}
            <ProfileSecond name={"alkesh function"} role={"developer function"}></ProfileSecond>
           
        </div>
        );
    };
}
export default AboutUs;