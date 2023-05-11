import React from "react";
import ReactDOM from "react-dom/client";
import logo from "/OL06ZJ0.jpg";
import userIcon from "/user_icon.png";


const HeaderComponent = () =>{
    return (
        <div id="header-container">
            <img src = {logo} className="headerImg"></img>
            <input type="text" placeholder="Search.."></input>
            <img src={userIcon} className="headerImg"></img>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>)