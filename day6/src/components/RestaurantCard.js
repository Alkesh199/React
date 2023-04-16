import { cloudnary_img_url } from "../../config";
const RestaurantCard = ({cloudinaryImageId,name,cuisines,avgRating,lastMileTravelString} ) =>{
   
    return(
        <div className='card-container'>
            <div className='rest-img'>
                <img src={cloudnary_img_url+cloudinaryImageId}></img>
            </div>
            <div className='res-desc-conatiner'>
                <p className="retaurant-name">{name}</p>
                <p className="tags">{cuisines.join(", ")}</p>
            </div>

            <div className='card-bottom'>
                <p className="rating">{avgRating} star</p>
                <p className="distance">{lastMileTravelString}</p>
            </div>
        </div>
    )
}

export default RestaurantCard;