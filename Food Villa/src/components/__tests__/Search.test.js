import Body from "../Body";
import {render, waitFor, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import {StaticRouter} from "react-router-dom/server";
import store from "../../utils/store";
import {REST_DATA} from "../../mocks/restData.js";

global.fetch = jest.fn(()=>{
    return Promise.resolve(
        {
            json: () => Promise.resolve(REST_DATA),
        }
    )
});


test("restaurent should load on  homepage",async()=>{
  const body =   render(
        <StaticRouter>
            <Provider store = {store}>
                 <Body />
           </Provider>
        </StaticRouter>
        
    
    );
    console.log(body);
     await waitFor(() => expect(body.getByTestId("search-btn")));
     const rest = body.getByTestId("restro-div");
     expect(rest.children.length).toBe(15);
   

});


test("search result should come on Food(string) search",async ()=>{
    const body =   render(
        <StaticRouter>
            <Provider store = {store}>
                 <Body />
           </Provider>
        </StaticRouter>
        
    
    );
    // console.log(body);
     await waitFor(() => expect(body.getByTestId("search-btn")));
     const searchInput = body.getByTestId("search-input");
    fireEvent.change(searchInput,{target:{
        value:"food"
    }});
    const searchBtn = body.getByTestId("search-btn");
    fireEvent.click(searchBtn);
    const rest = body.getByTestId("restro-div");
    expect(rest.children.length).not.toBe(0);
})


