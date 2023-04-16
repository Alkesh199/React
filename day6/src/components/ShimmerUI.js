import ShimmerUICard from "./ShimmerUICard";

const ShimmerUI=()=>{
    console.log("inside ShimmerUi");
    return (
        <div className="Shimmer-container">
               { 
                Array.apply(null, Array(20)).map((i)=>{
                 return <ShimmerUICard key={Math.random()}></ShimmerUICard>
               })} 
       </div>);
}

export default ShimmerUI;