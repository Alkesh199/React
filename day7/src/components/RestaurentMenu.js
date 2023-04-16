import { useParams } from "react-router-dom";
import {useEffect,useState} from "react";
import { cloudnary_img_url } from "../../config";
import ShimmerUI from "./ShimmerUI";
import RestaurentMenuCard from "./RestaurentMenuCard";
import ReststaurentDetails from "./RestaurentDetails";


const RestaurentMenu = ()=>{
   const [resMenu,setRestaurentsMenu] = useState();
   const param = useParams();
   const {id} = param;
   console.log(param);

useEffect(()=>{
    getRestaurentMenu();
    
},[]);


async function getRestaurentMenu(){
    const MenuData = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=${id}&submitAction=ENTER`);
    const menuDataJson = await MenuData.json();
    console.log("menu data json");
    console.log(menuDataJson);

    setRestaurentsMenu(menuDataJson.data);
   

}
   
    return (!resMenu)?<ShimmerUI></ShimmerUI>:(
        <>
        <RestaurentMenuCard resMenu={resMenu}></RestaurentMenuCard>
        <RestaurentMenuCard resMenu={resMenu}></RestaurentMenuCard>
        </>
    )
}

export default RestaurentMenu;