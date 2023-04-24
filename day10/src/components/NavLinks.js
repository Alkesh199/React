import {Link} from "react-router-dom";

const NavLinks = () =>{
    return(
        <>
           <Link to="/"><li className="text-lg">Home</li></Link>
                <Link to="/about-us"><li className="text-lg">About</li></Link>
                <Link to="/contact-us"><li className="text-lg">contact us</li></Link>
                <Link to="/my-cart"><li className="text-lg">cart</li></Link>
                <Link to="/instamart"><li className="text-lg">IM</li></Link>
        </>
    );
}

export default NavLinks;