import { useSelector } from "react-redux";

const BillDetails = () =>{

   
 
  const cartItems = useSelector((store)=>store.cart.items);
  const totalPrice = ()=>cartItems.reduce((acc,curr)=>{
               return acc+curr.quantity*curr.price/100;
  },0);

  let ammount = totalPrice();

 const priceObj = {
    ammount:ammount,
    platformCharge:2,
    deliveryFee:30,
    tax:ammount*3/100,

 }


    return(
        <>  
           <div className="max-w-[1320] mx-auto flex flex-col items-center justify-center mb-14">
             <p className="font-bold text-2xl">Bill Details</p>
             <p>Item Total : <span className="before:content-['\20B9']">{priceObj.ammount}</span></p>
             <p className="">Delivery Fee : <span className="before:content-['\20B9']">{priceObj.deliveryFee}</span></p>
             <p>Platform fee: <span className="before:content-['\20B9']"> {priceObj.platformCharge}</span></p>
             <p className="">Govt Taxes & Other Charges: <span className="before:content-['\20B9']">{priceObj.tax}</span></p>
             <p className="border-2 border-green-600 bg-gray-100 p-3">Total Payable Ammount: <span className="before:content-['\20B9'] text-red-600 font-bold">{Math.round((priceObj.ammount+priceObj.deliveryFee+priceObj.platformCharge+priceObj.tax)*100)/100}</span></p>
           </div>
        </>
    )
}

export default BillDetails;