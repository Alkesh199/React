
import { cloudnary_img_url } from "../../config";
import ShimmerUI from "./ShimmerUI";
import RestaurentMenuCard from "./RestaurentMenuCard";
import useRestaurent from "../utils/useRestaurent";
import { useParams } from "react-router-dom";

const RestaurentMenu = ()=>{
    const param = useParams();
    const {id} = param;
   const resMenu = useRestaurent(id);

    return (!resMenu)?<ShimmerUI></ShimmerUI>:(
        <>
        <RestaurentMenuCard resMenu={resMenu}></RestaurentMenuCard>
       
        </>
    )
}

export default RestaurentMenu;