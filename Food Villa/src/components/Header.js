import { useState,useContext } from "react";
import Title from "./Title.js";
import {Link} from "react-router-dom";
import useOnline from "../utils/useOnline";
import lines from "../assets/lines.png";
import NavLinks from "./NavLinks.js";
import UserContext from "../utils/UserContext.js";
import { useSelector } from "react-redux";
import store from "../utils/store.js";


const Header = () =>{

    const [isLoggedIn,setLogInLogOut] = useState(false);
    const isOnline = useOnline();
    const [showItems,setShowItems] = useState(false);

    const {user} = useContext(UserContext);
    // console.log(user);
    const cartS = useSelector((store)=>store.cart);

    function logInHandler(){
        // console.log(isLoggedIn);
         setLogInLogOut(!isLoggedIn);
    }

    return (
        <>
        <div className="bg-black sticky top-0">
        <div className='items-center justify-between  mb-3 max-w-[1320px] py-5 mx-auto lg:flex hidden'>
           <Title />
           
            <ul className = "flex items-center justify-between w-[50%] pb-7 lg:pb-0">
                <NavLinks></NavLinks>
            </ul>
        
           

           {isOnline && <div data-testid="onlineheaderbig" className="w-6 h-6 bg-lime-600 rounded-[50%]"></div>}
           {!isOnline && <div className="w-6 h-6 bg-red-600 rounded-[50%]"></div>}
                 
           
           <div>
           {!isLoggedIn && <button onClick={logInHandler} data-testid= "loginBtn" className="text-black bg-white text-xl p-1 border-4 rounded-md border-black w-24 ">login</button>}
            {isLoggedIn && <div className="flex flex-col items-center"><button onClick={logInHandler} className="text-black bg-white text-xl p-1 border-4 rounded-md  border-black w-24">logout</button><p className="text-white">{user.name}</p></div>}
            </div>
        </div>
        </div>


        <div className='lg:hidden sticky top-0 bg-black'>
            <div className = "flex justify-between items-center px-5" >
                    <Title />
                    <Link to="cart"><li className="text-lg  text-white hover:text-orange-700 list-none">cart <span className="px-2 py-1 !text-red font-bold border border-red-700 rounded ">{cartS.count}</span></li></Link>
                    {isOnline && <div data-testid="onlineheadersmall" className="w-6 h-6 bg-lime-600 rounded-[50%]"></div>}
                    {!isOnline && <div className="w-6 h-6 bg-red-600 rounded-[50%]"></div>}
                    <div className ="">
                    {!isLoggedIn && <button onClick={logInHandler} className="text-black bg-white text-lg font-normal my-1 border-4 rounded-md border-black w-24 ">login</button>}

                    {isLoggedIn && <div className="flex flex-col items-center"><button onClick={logInHandler} className="text-black bg-white font-normal text-lg my-1 border-4 rounded-md  border-black w-24">logout</button><p className="text-white">{user.name}</p></div>}
                  </div>
                  <img src ={lines} alt="menu image" className="max-h-8 max-w-8 lg:max-h-14 lg:max-w-14 rounded-[50%]" onClick={()=>setShowItems(!showItems)}></img>
                    
           </div>

           
           {   
               showItems &&  <ul className = "flex  flex-col pl-5  text-white text-xl height:[400px] z-50 relative border-b-slate-400 border-b-2" onClick={()=>setShowItems(!showItems)}>
                <NavLinks></NavLinks>
            </ul>
          }
        
           

           
                 
           
           
            
        </div>
        </>
       
    );
}

export default Header;