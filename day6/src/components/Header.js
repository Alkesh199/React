import { useState } from "react";
import Title from "./Title.js";


const Header = () =>{
    const [isLoggedIn,setLogInLogOut] = useState(false);

    function logInHandler(){
        console.log(isLoggedIn);
         setLogInLogOut(!isLoggedIn);
    }

    return (
        <div className='header-container'>
           <Title />
           <div className = "item-nav">
            <ul>
                <li>Home</li>
                <li>About </li>
                <li>contact us</li>
                <li>cart</li>
            </ul>
        
           </div>
           <div className ="logindiv">
           {!isLoggedIn && <button onClick={logInHandler}>login</button>}
            {isLoggedIn && <button onClick={logInHandler}>logout</button>}
            </div>
        </div>
    );
}

export default Header;