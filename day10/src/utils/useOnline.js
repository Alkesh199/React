import { useEffect, useState } from "react";



const useOnline = () =>{
    const [isOnline,setIsOnline] = useState(true);

    useEffect(()=>{
        const OnlineHandler = () =>{
            setIsOnline(true);
            console.log("online status sets to true");
        }
        
        const OfflineHandler = () =>{
            setIsOnline(false);
            console.log("online status sets to false");
        }
        window.addEventListener("online",OnlineHandler);
        window.addEventListener("offline",OfflineHandler);

        return()=>{
            window.removeEventListener("online",OnlineHandler);
            window.removeEventListener("offline",OfflineHandler);
        }

    },[]);
    return isOnline;
}



export default useOnline;