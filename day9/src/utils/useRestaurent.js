import { useParams } from "react-router-dom";
import {useEffect,useState} from "react";
import { RESTRO_URL } from "../../config";

const useRestaurent = (id) =>{
    const [resMenu,setRestaurentsMenu] = useState();
    

    useEffect(()=>{
        getRestaurentMenu();
        
    },[]);
    
    
    async function getRestaurentMenu(){
        const MenuData = await fetch(RESTRO_URL+id);
        const menuDataJson = await MenuData.json();
        console.log("menu data json");
        console.log(menuDataJson);
    
        setRestaurentsMenu(menuDataJson.data);
        
       
    
    }

    return resMenu;

}

export default useRestaurent;