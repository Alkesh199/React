import RestaurantCard  from "./RestaurantCard";
import { restaurentList } from "../../config";
import React from 'react';
import Search from "./Search";
import { useState } from "react";

const Body = () =>{


        const [searchValue,setSearchValue] = useState("");
    const [restaurents,setRestaurents]=useState(restaurentList);
    console.log(restaurents);
    const filterData = (searchValue,restaurents) =>{
        console.log("inside Filter Data function"); 
       return restaurents.filter(
        rest=>rest.data.name.toLowerCase().includes(searchValue.toLowerCase() )
        );
    }

    return (
        <React.Fragment>
        {/* <Search></Search> */}
        <div className = "search-container">
            <input type="text" placeholder="Gulabi Rasoi" value={searchValue} 
            onChange={
              (e)=>{
                 setSearchValue(e.target.value);
                 console.log(searchValue);
              }
            }></input>
            <button className="search-btn" onClick={()=>{
                let fData = filterData(searchValue,restaurents);
                setRestaurents(fData);
            }
            }>Search</button>
            {/* <h2>{searchValue}</h2> */}
        </div>
        
        <div className ="restaurent-conatiner">
        
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