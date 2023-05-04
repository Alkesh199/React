import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
    name:"cart",
    initialState:{
        items:[],
        count:0,
    },
    reducers:{
        addItems:(state,action)=>{
        //   state.items.push(action.payload);
         state.count=state.count+1;
        // increase quantity by 1
        let payloadId= action.payload.id; 
        let flagDuplicate = false;
        for(let i =0;i<state.items.length;i++){
            if(state.items[i].id==payloadId){
                if(state.items[i]?.quantity>0)
                {
                    state.items[i]={...state.items[i],quantity:state.items[i].quantity+1};
                }
                flagDuplicate=true;
                break;
            }
        }

        if(!flagDuplicate){
            state.items.push({...action.payload,quantity:1});
        }
        },

        removeItem:(state,action)=>{
            let payloadId= action.payload.id; 
            state.count=state.count-1;
            for(let i=0;i<state.items.length;i++){
                if(state.items[i].id==payloadId){
                    if(state.items[i].quantity==1){
                        state.items.pop(i);
                       
                    }
                    else{
                        state.items[i] = {...state.items[i],quantity:state.items[i].quantity-1}
                       
                    }
                    break;
                }
            }
        },

        clearCart:(state)=>{
         state.items = [];
         state.count=0;
        }
    }
});
export const {addItems,removeItem,clearCart} = cartSlice.actions;
export default cartSlice.reducer;
