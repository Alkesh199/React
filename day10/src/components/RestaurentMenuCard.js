import { cloudnary_img_url } from "../../config";


const RestaurentMenuCard = ({resMenu}) =>{
    console.log("inside restmenucard");
    return (
        
        <>

        <div className="flex justify-between max-w-[900px] border-b border-dotted border-gray-400 m-auto pb-10">
            <div className="">
                <p className="text-lg font-bold text-gray-900 mb-2">{resMenu?.cards[0]?.card?.card?.info?.name}</p>
                <p className="text-gray-500 text-sm">{resMenu?.cards[0]?.card?.card?.info?.areaName}</p>
                <p className ="text-gray-500 text-sm mb-5">{resMenu?.cards[0]?.card?.card?.info?.feeDetails.message}</p>
            </div>

            <div className="flex items-center flex-col justify-evenly px-5 mb-4 border border-dotted rounded border-gray-400">
               <div className="rs-top">
                  <p className = "rs-rating">{resMenu?.cards[0]?.card?.card?.info?.avgRating}</p>
               </div>
               <div className="border-t border-dotted pt-1 border-gray-400">
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
                                    <div className="flex max-w-[900px] m-auto border-b border-dotted rounded py-10 border-gray-400" key={innerItem?.card?.info?.id}>
                                    <div className="w-[70%]">
                                        <p className="text-slate-900 font-bold text-lg">{innerItem?.card?.info?.name}</p>
                                        <p className="text-slate-900 text-base before:content-['\20B9']">{innerItem?.card?.info?.price/100}</p>
                                        <p className="text-slate-500 text-sm">{innerItem?.card?.info?.description}</p>
                                    </div>
                                    <div className="w-[30%] flex flex-col items-center">
                                       {innerItem?.card?.info?.imageId &&  <img src = {cloudnary_img_url+innerItem?.card?.info?.imageId } className='w-[118px] h-[96px] object-cover rounded-md m-auto' ></img>}
                                       <button className="text-lime-700 font-semibold border rounded py-1 px-4 mt-[-20px] bg-white">ADD</button>
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