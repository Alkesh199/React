import {render} from "@testing-library/react";
import Shimmer from "../ShimmerUI";
import { Provider } from "react-redux";
import store from "../../utils/store";

test("Shimmer should shown till data available",()=>{
    const shimmer = render(
        <Provider store={store}>
            <Shimmer></Shimmer>
        </Provider>
    )



    const shimmerSection = shimmer.getByTestId("shimmer");
    expect(shimmerSection.children.length).toBe(20);
    // console.log(shimmerSection);
   
})