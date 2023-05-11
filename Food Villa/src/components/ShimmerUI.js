import ShimmerUICard from "./ShimmerUICard";

const ShimmerUI=()=>{
   
    return (
        <div data-testid="shimmer" className="flex   justify-center items-center flex-wrap max-w-[1320px] m-auto mt-16">
               { 
                Array.apply(null, Array(20)).map((i)=>{
                 return <ShimmerUICard key={Math.random()}></ShimmerUICard>
               })} 
       </div>);
}

export default ShimmerUI;