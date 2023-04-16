import { cloudnary_img_url } from "../../config";


const RestaurentMenuCard = ({resMenu}) =>{
    console.log("inside restmenucard");
    return (
        
        <>

        <div className="rest-details-sec">
            <div className="rest-details-ls-div">
                <p className="rest-name">{resMenu?.cards[0]?.card?.card?.info?.name}</p>
                <p className="rest-address">{resMenu?.cards[0]?.card?.card?.info?.areaName}</p>
                <p className ="rest-message">{resMenu?.cards[0]?.card?.card?.info?.feeDetails.message}</p>
            </div>

            <div className="rest-details-rs-div">
               <div className="rs-top">
                  <p className = "rs-rating">{resMenu?.cards[0]?.card?.card?.info?.avgRating}</p>
               </div>
               <div className="rs-bottom">
                <p>{resMenu?.cards[0]?.card?.card?.info?.totalRatingsString}</p>
               </div>
            </div>
        </div>
        <div className="menu">
            <div className="rest-main-details">
        
            {resMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((item)=>{
                return(
                    
                        <div key={Math.random()}>
                            {
                            item?.card?.card?.itemCards?.map((innerItem)=>{
                                return (
                                    // <li key={Math.random()}>{innerItem.card.info.name}</li>
                                    <div className="item-list-div" key={innerItem?.card?.info?.id}>
                                    <div className="item-desc-left-div">
                                        <p className="item-name">{innerItem?.card?.info?.name}</p>
                                        <p className="item-price">{innerItem?.card?.info?.price/100}</p>
                                        <p className="item-desc">{innerItem?.card?.info?.description}</p>
                                    </div>
                                    <div className="item-desc-right-div">
                                       {innerItem?.card?.info?.imageId &&  <img src = {cloudnary_img_url+innerItem?.card?.info?.imageId}></img>}
                                       <button className="item-add-btn">ADD</button>
                                    </div>
                                    </div>
                                );
                            })
                            }
                        </div>
                );
            })}
            </div>
          
        </div>
        </>
    
    );
}

export default RestaurentMenuCard;