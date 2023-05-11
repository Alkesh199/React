import Body from "../Body";
import {render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import store from "../../utils/store";
import {MENU_DATA} from "../../mocks/restData.js";
import RestaurentMenu from "../RestaurentMenu";
import Header from "../Header";
global.fetch = jest.fn(()=>{
    return Promise.resolve(
        {
            json: () => Promise.resolve(MENU_DATA),
        }
    )
});


test("cart should update on item add",async()=>{
  const body =   render(
        <StaticRouter>
            <Provider store = {store}>
                 <Header></Header>
                 <RestaurentMenu></RestaurentMenu>
           </Provider>
        </StaticRouter>
        
    
    );
    console.log(body);
     await waitFor(() => expect(body.getByTestId("menu")));
     const menu = body.getByTestId("menu");
    const btns = menu.getElementsByClassName("menu-btn");
   
     fireEvent.click(btns[0]);
     fireEvent.click(btns[1]);
     fireEvent.click(btns[2]);
     const cartItem = body.getByTestId("numberofCartItem");
     expect(cartItem.innerHTML).toBe("3");
   

});


