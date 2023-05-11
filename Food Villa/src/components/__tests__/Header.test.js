import { Provider } from "react-redux";
import Header from "../Header";
import {render} from "@testing-library/react";
import {StaticRouter} from "react-router-dom/server";
import store from "../../utils/store";


test("logo should be there on load of header component",()=>{
   const header =  render(
         <StaticRouter>
             <Provider store={store}>
                 <Header />
             </Provider>
         </StaticRouter>
    
        
    );

    const logo = header.getAllByTestId("logo");
    // console.log(logo[0]);
    expect(logo[0].alt).toBe("food logo");
})

test("default status should be online",()=>{
    const header =  render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
       
   );

   const onlineDiv = header.getByTestId("onlineheaderbig");
//    console.log(onlineDiv);
   expect(onlineDiv.classList[2]).toBe("bg-lime-600");


})

test("cart item should be zero on onload",()=>{
    const header =  render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
       
   );
 let cartItem = header.getByTestId("numberofCartItem");
 expect(cartItem.innerHTML).toBe("0");

})

test("login button should be there on load",()=>{
    const header =  render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
            </Provider>
        </StaticRouter>
       
   );

   const logInBtn = header.getByTestId("loginBtn");
    expect(logInBtn.innerHTML).toBe("login");
})
