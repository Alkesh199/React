import { filterData } from "../utils/helper";
import {useState} from "react";
const SearchBar = ({allRestaurents,setAllRestaurents,setRestaurents}) =>{

    const [searchValue,setSearchValue] = useState("");

    return(
          
        <div className = "flex justify-center items-center  max-w-[70%] mx-auto h-12 rounded my-12 lg:max-w-[500px]">
        <input type="text" data-testid = "search-input" className= "w-[70%] px-7 py-[10px] box-content border-2 border-black" placeholder="search your favourite restaurent" value={searchValue} 
        onChange={
          (e)=>{
             setSearchValue(e.target.value);
          }
        }></input>
        <button data-testid="search-btn" className="ml-10 w-[30%]  h-12  bg-black text-white px-7" onClick={()=>{
            let fData = filterData(searchValue,allRestaurents);
            setRestaurents(fData);
        }
        }>Search</button>
        {/* <h2>{searchValue}</h2> */}
    </div>

    )
}

export default SearchBar;