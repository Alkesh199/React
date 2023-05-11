import { useSelector,useDispatch } from "react-redux";
import store from "../utils/store";
import { cloudnary_img_url } from "../../config";
import { addItems, removeItem,clearCart } from "../utils/cartSlice";
import BillDetails from "./BillDetails";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const addFoodItem = (item) =>{
             console.log("click span trigger");
             dispatch(addItems(item));
    }
    const reduceItems = (item) =>{
         dispatch(removeItem(item));
    }
   
    const emptyCart = ()=>{
        dispatch(clearCart());
    }
    console.log(cartItems);

    if(cartItems.length==0){
        return <p className="text-center max-w-[1320px] my-16 text-red-700 font-bold text-2xl mx-auto">Cart is Empty</p>
    }
    return(
        <>
            <div className="flex max-w-[1320] items-center justify-center my-14 border-b-2 border-gray-400 mx-auto">
             <div data-testid= "cart-div" className="flex flex-col mb-6">
                {

                cartItems.map((item)=>{
                        
                        return <div className="flex flex-row mb-6 border-2  border-green-600 bg-gray-100 p-3" key={item.id}>
                                    <p className="">{item?.name}</p>
                                    <p className="px-3 border border-green-500 mx-7 hover:cursor-pointer"><span className="text-green font-bold" onClick = {()=>reduceItems(item)}>-</span><span data-testid="numberofCartItem" className="text-green font-bold mx-3">{item.quantity}</span><span data-testid="plus-btn" className="text-green font-bold" onClick={()=>addFoodItem(item)}>+</span></p>
                                    <p className="before:content-['\20B9']">{item.quantity*(item?.price || item?.defaultPrice)/100}</p>
                                 </div>
                               
                                })
                                }
                
                </div>
               
                
                
            </div>

            <div className="flex items-center my-8 justify-center"><button className="px-3 border border-green-500 mx-7 hover:cursor-pointer" onClick={()=>emptyCart()}>Clear cart</button></div>
            {cartItems.length>0 && <BillDetails></BillDetails>}
        </>
    )
}

export default Cart;