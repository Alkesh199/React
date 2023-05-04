import { useSelector } from "react-redux";

const BillDetails = () =>{

   
 
  const carItems = useSelector((store)=>store.cart.items);
  const totalPrice = ()=>carItems.reduce((acc,curr)=>{
               return acc+curr.quantity*curr.price/100;
  },0);
  let ammount = totalPrice();
 const priceObj = {
    ammount:ammount,
    platformCharge:2,
    deliveryFee:30,
    tax:ammount*8/100,

 }


    return(
        <>  
           <div className="max-w-[1320] mx-auto flex flex-col items-center justify-center mb-14">
             <p className="font-bold text-2xl">Bill Details</p>
             <p>Item Total : <span className="before:content-['\20B9']">{priceObj.ammount}</span></p>
             <p className="">Delivery Fee : <span className="before:content-['\20B9']">{priceObj.deliveryFee}</span></p>
             <p>Platform fee: <span className="before:content-['\20B9']"> 2</span></p>
             <p className="border-b-2 border-gray-500">Govt Taxes & Other Charges: <span className="before:content-['\20B9']">{priceObj.tax}</span></p>
             <p className="border-b-2 border-gray-500">Total Payable Ammount: <span className="before:content-['\20B9']">{priceObj.ammount+priceObj.deliveryFee+priceObj.platformCharge+priceObj.tax}</span></p>
           </div>
        </>
    )
}

export default BillDetails;