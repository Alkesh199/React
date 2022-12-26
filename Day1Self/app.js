let root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);

let hElem = React.createElement("h2",{id:"hEle"},"Chapter 01 - Inception");
let headingDiv = React.createElement("div",{id:"hDiv"},[hElem]);

let l1 = React.createElement("li",{},"What is Emmet?");
let l2 = React.createElement("li",{},"Difference between a Library and Framework?");
let l3 = React.createElement("li",{},"What is CDN? Why do we use it?");
let l4 = React.createElement("li",{},"Why is React known as React?");
let l5 = React.createElement("li",{},"What is crossorigin in script tag?");
let l6 = React.createElement("li",{},"What is diference between React and ReactDOM");
let l7 = React.createElement("li",{},"What is difference between react.development.js and react.production.js files via CDN?");
let l8 = React.createElement("li",{},"What is async and defer? - see my Youtube video");


let ulEle = React.createElement("ul",{id:"ulEle"},[l1,l2,l3,l4,l5,l6,l7,l8]);
let ulDiv = React.createElement("div",{id:"ulDiv"},[ulEle]);

let allEle = React.createElement("div",{id:"main-div"},[headingDiv,ulDiv]);


root.render(allEle);
