import { useState } from "react";
import Title from "./Title.js";
import {Link} from "react-router-dom";

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
                <Link to="/"><li>Home</li></Link>
                <Link to="/about-us"><li>About</li></Link>
                <Link to="/contact-us"><li>contact us</li></Link>
                <Link to="/my-cart"><li>cart</li></Link>
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