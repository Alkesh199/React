import {Link} from "react-router-dom";
import { useSelector } from "react-redux";
import store from "../utils/store";

const NavLinks = () =>{
    
    const cartS = useSelector((store)=>store.cart);
    
    return(
        <>
           <Link to="/"><li className="text-lg text-white  hover:text-orange-700 hover:font-bold">Home</li></Link>
                <Link to="/about-us"><li className="text-lg text-white  hover:text-orange-700 hover:font-bold">About</li></Link>
                <Link to="/contact-us"><li className="text-lg text-white hover:text-orange-700 hover:font-bold">contact us</li></Link>
                <Link to="/instamart"><li className="text-lg text-white  hover:text-orange-700 hover:font-bold">IM</li></Link>
                <Link to="cart" className="hidden lg:flex"><li className="text-lg  text-white hover:text-orange-700 hover:font-bold">cart <span data-testid="numberofCartItem" className="px-2 py-1 !text-red font-bold border border-red-700 rounded ">{cartS.count}</span></li></Link>

        </>
    );
}

export default NavLinks;