import {Link} from "react-router-dom";
import appstoreLogo from "../assets/app-store.png";
import googlPlayStoreLogo from "../assets/google-play-store.png";
import Title from "./Title.js";
import facebookLogo from "../assets/facebook.png";
import instaLogo from "../assets/insta.png";
import linkedinLogo from '../assets/linkedin.png';




export const Footer = () =>{

    // const {user} = useContext(UserContext);
   
    return (
        <div className="bg-black w-[100%]">
        <div className="flex max-w-[1320px]  justify-center  items-start  text-white py-14 border-b-2 border-white lg:flex-nowrap flex-wrap mx-[10%] lg:mx-auto">
           
            <div className="lg:w-[20%] w-[50%] mt-7">
                <p className="text-gray-300 mb-7">Company</p>
                <ul>
               <li className="text-base hover:font-bold"><Link to="#">About us</Link> </li>
               <li className="mt-3 text-base hover:font-bold"><Link to="#">Team</Link> </li>
               <li className="mt-3 text-base hover:font-bold"><Link to="#">Careers</Link> </li>
               <li className="mt-3 text-base hover:font-bold"><Link to="#">FV Blog</Link> </li>
               <li className="mt-3 text-base hover:font-bold"><Link to="#">Bug Bounty</Link> </li>
               <li className="mt-3 text-base hover:font-bold"><Link to="#">FV One</Link></li> 
               <li className="mt-3 text-base hover:font-bold"><Link to="#">FV Corporate</Link> </li>
               <li className="mt-3 text-base hover:font-bold"><Link to="#">FV Instamart</Link> </li>
               <li className="mt-3 text-base hover:font-bold"><Link to="#">FV Genie</Link></li>
               </ul>
            </div>
            
            <div className="lg:w-[20%] w-[50%] mt-7">
                <p className="text-gray-300 mb-7">Contact</p>
                <ul>
               <li className="text-base hover:font-bold"><Link to="#">Help & Support</Link> </li>
               <li className="mt-3 text-base hover:font-bold"><Link to="#">Partner with us</Link> </li>
               <li className="mt-3 text-base hover:font-bold"><Link to="#">Ride with us</Link> </li>
               </ul>
            </div>
            <div className="lg:w-[40%] w-[50%] mt-7">
                <p className="text-gray-300 mb-7">LEGAL</p>
                <ul>
                <li className="text-base hover:font-bold"><Link to="#">Terms & Conditions</Link> </li>
                <li className="mt-3 text-base hover:font-bold"><Link to="#">Refund & Cancellation</Link></li> 
                <li className="mt-3 text-base hover:font-bold"><Link to="#">Privacy Policy</Link> </li>
                <li className="mt-3 text-base hover:font-bold"><Link to="#">Cookie Policy</Link></li> 
                <li className="mt-3 text-base hover:font-bold"><Link to="#">Offer Terms</Link> </li>
                <li className="mt-3 text-base hover:font-bold"><Link to="#">Phishing & Fraud</Link> </li>
                <li className="mt-3 text-base hover:font-bold"><Link to="#">Corporate – FV Money Codes Terms and Conditions</Link> </li>
                <li className="mt-3 text-base hover:font-bold"><Link to="#">FV Instamart</Link> </li>
                <li className="mt-3 text-base hover:font-bold"><Link to="#">Corporate - FV Discount Voucher Terms and Conditions</Link></li>
                </ul>
            </div>
            
            <div className="lg:w-[25%] w-[50%] lg:flex lg:flex-col lg:items-end mt-7">
                <img src = {appstoreLogo} className="w-[60%]"></img>
                <img src = {googlPlayStoreLogo} className="w-[60%] mt-8"></img>
            </div>
        </div>


        <div className="flex items-center justify-between flex-col  text-white mx-auto max-w-[1320px] py-12 lg:flex-row">
            <Title></Title>
            <div className=""><p className = "font-normal text-base my-3 text-center"><span className = "font-bold text-lg"> © 2023 </span>Food Villa</p></div>
            <div className="flex justify-around">
               <a href="https://www.facebook.com/profile.php?id=100008755813617" data-testid="facebookLink" target="_blank" className="hover:animate-pulse"><img src={facebookLogo} alt="facebook logo" className="max-h-10"></img></a>
            <a href="https://www.instagram.com/__a__k__y/" target="_blank" data-testid="instagramLink" className="hover:animate-pulse"><img src={instaLogo} alt="insta logo" className="max-h-10 mx-6"></img></a>
            <a href="https://www.linkedin.com/in/alkesh-yadav-9720b7165/" data-testid="linkedinLink" target="_blank" className="hover:animate-pulse"> <img src={linkedinLogo} alt="twitter logo" className="max-h-10 "></img></a>
            </div>
        </div>

        <div className="pb-14 max-w-[1320px] m-auto flex items-center justify-center">
            <p className="text-white text-center">This site is developed by <span className="font-bold animate-pulse text-lime-700">ALKESH YADAV</span></p>
        </div>
        </div>
        
    );
}
