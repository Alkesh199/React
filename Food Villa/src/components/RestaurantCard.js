import { cloudnary_img_url } from "../../config";
import { Link } from "react-router-dom";
const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating,lastMileTravelString,id} ) =>{
   
    return(
       <Link to={`/restaurants/${id}`}><div className='w-[260px] m-8  p-4 border border-black shadow-sm rounded lg:border-transparent lg:hover:border lg:hover:border-black lg:hover:shadow-sm lg:hover:rounded'>
            <div>
                <img src={cloudnary_img_url+cloudinaryImageId}></img>
            </div>
            <div className='mt-2'>
                <p className="text-xl font-semibold">{name}</p>
                <p className="mt-3 text-opacity-60 font-normal">{cuisines.join(", ")}</p>
            </div>

            <div className='flex justify-between mt-4'>
                <p className="rating">{avgRating} star</p>
                <p className="distance">{lastMileTravelString}</p>
            </div>
        </div>
        </Link>
    )
}

export default RestaurantCard;