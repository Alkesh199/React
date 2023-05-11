import RestaurantCard  from "./RestaurantCard";
import { restaurentList,dataApiUrl} from "../../config";
import React from 'react';
import { useState,useEffect } from "react";
import ShimmerUiCard from "./ShimmerUICard";
import ShimmerUi from "./ShimmerUI";
import AboutUs from "./AboutUs";

import useOnline from "../utils/useOnline";
import SearchBar from "./SearchBar";


const Body = () =>{


    
    //to show visible rest on screen always
    const [restaurents,setRestaurents]=useState([]);
    //it will fetch allRest from APi , because we always want to filter data from here only
    const [allRestaurents,setAllRestaurents] = useState([]);
    
   const isOnline = useOnline();
    

    // wew want to fetch our data only once that's why it is inside useEffect
    useEffect(()=>{
        getRestaurants();
        console.log("inside use Effect")
    },[]);
    
    //this is to fetch data from swiggi's api
    async function getRestaurants(){
        const jsonData = await fetch(dataApiUrl);
        const liveData = await jsonData.json();
         setAllRestaurents(liveData.data.cards[2].data.data.cards);
         setRestaurents(liveData.data.cards[2].data.data.cards);
    }
    
    if(!isOnline){
        return(
            <div className="my-[20vh] mx-auto text-red-500 text-2xl max-w-[1320px] flex items-center">
                <h1>please check your internet connection</h1>
            </div>
            
        );
    }
    if(restaurents.length==0 && allRestaurents.length!=0){
        return (<>
            <SearchBar allRestaurents={allRestaurents} setAllRestaurents={setAllRestaurents} setRestaurents={setRestaurents}></SearchBar>
            <div className="no-result-div">
        <h1 className="text-center text-red-700 font-bold my-16">your Filtered Restaurent does not found</h1>
        </div>
        </>);
    }

    return (allRestaurents.length===0)?<ShimmerUi></ShimmerUi>:(
        
        <React.Fragment>
            <SearchBar allRestaurents={allRestaurents} setAllRestaurents={setAllRestaurents} setRestaurents={setRestaurents}></SearchBar>
       {/* here search code */}
        
        <div  data-testid="restro-div" className ="max-w-[1320px] mx-auto flex justify-center flex-wrap mt-2">
        
        { 
            restaurents.map((restaurent)=>
             {
                 return (<RestaurantCard {...restaurent.data} key={restaurent.data.id}></RestaurantCard>);
              })
        }
        </div>
        </React.Fragment>
        
    );
}

export default Body;