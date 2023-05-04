import { filterData } from "../utils/helper";
import {useState} from "react";
const SearchBar = ({allRestaurents,setAllRestaurents,setRestaurents}) =>{

    const [searchValue,setSearchValue] = useState("");

    return(
          
        <div className = "flex justify-center items-center border-2 border-black max-w-[70%] mx-auto h-12 rounded my-12 lg:max-w-[500px]">
        <input type="text" className= "w-[70%] px-7 py-[10px]" placeholder="Gulabi Rasoi" value={searchValue} 
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

    )
}

export default SearchBar;