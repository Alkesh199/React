import {Link} from "react-router-dom";
import { cloudnary_img_url } from "../../config";
import appstoreLogo from "../assets/app-store.png";
import googlPlayStoreLogo from "../assets/google-play-store.png";

export const Footer = () =>{
    return (
        <div className="footer-div">
            <div>
                <p className="footer-title">Company</p>
               <li><Link to="#">About us</Link> </li>
               <li><Link to="#">Team</Link> </li>
               <li><Link to="#">Careers</Link> </li>
               <li><Link to="#">FV Blog</Link> </li>
               <li><Link to="#">Bug Bounty</Link> </li>
               <li><Link to="#">FV One</Link></li> 
               <li><Link to="#">FV Corporate</Link> </li>
               <li><Link to="#">FV Instamart</Link> </li>
               <li><Link to="#">FV Genie</Link></li>
            </div>
            
            <div>
                <p className="footer-title">Contact</p>
               <li><Link to="#">Help & Support</Link> </li>
               <li><Link to="#">Partner with us</Link> </li>
               <li><Link to="#">Ride with us</Link> </li>
            </div>
            <div>
                <p className="footer-title">LEGAL</p>
                <li><Link to="#">Terms & Conditions</Link> </li>
                <li><Link to="#">Refund & Cancellation</Link></li> 
                <li><Link to="#">Privacy Policy</Link> </li>
                <li><Link to="#">Cookie Policy</Link></li> 
                <li><Link to="#">Offer Terms</Link> </li>
                <li><Link to="#">Phishing & Fraud</Link> </li>
                <li><Link to="#">Corporate – FV Money Codes Terms and Conditions</Link> </li>
                <li><Link to="#">FV Instamart</Link> </li>
                <li><Link to="#">Corporate - FV Discount Voucher Terms and Conditions</Link></li>
            </div>
            
            <div className="img-div">
                <img src = {appstoreLogo}></img>
                <img src = {googlPlayStoreLogo}></img>
            </div>
        </div>
    );
}
