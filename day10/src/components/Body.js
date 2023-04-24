import RestaurantCard  from "./RestaurantCard";
import { restaurentList,dataApiUrl} from "../../config";
import React from 'react';
import Search from "./Search";
import { useState,useEffect } from "react";
import ShimmerUiCard from "./ShimmerUICard";
import ShimmerUi from "./ShimmerUI";
import AboutUs from "./AboutUs";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";


const Body = () =>{


    const [searchValue,setSearchValue] = useState("");
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
        return (
            <div className="no-result-div">
        <h1 className="no-result-text">your Filtered Restaurent does not found</h1>
        </div>);
    }

    return (allRestaurents.length===0)?<ShimmerUi></ShimmerUi>:(
        
        <React.Fragment>
    
        <div className = "flex justify-center items-center border-2 border-black max-w-[500px] mx-auto h-12 rounded my-12">
            <input type="text" className= "w-[70%] px-7" placeholder="Gulabi Rasoi" value={searchValue} 
            onChange={
              (e)=>{
                 setSearchValue(e.target.value);
                 console.log(searchValue);
              }
            }></input>
            <button className="ml-10 w-[30%]  h-12  bg-black text-white px-7" onClick={()=>{
                let fData = filterData(searchValue,allRestaurents);
                setRestaurents(fData);
            }
            }>Search</button>
            {/* <h2>{searchValue}</h2> */}
        </div>
        
        <div className ="max-w-[1320px] mx-auto flex justify-center flex-wrap mt-2">
        
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