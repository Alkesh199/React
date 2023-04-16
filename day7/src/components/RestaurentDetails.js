const ReststaurentDetails = ({resMenu})=>{
  return (
   
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
  )
}

export default ReststaurentDetails;