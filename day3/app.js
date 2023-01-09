import React from 'react';
import ReactDOM from 'react-dom/client';

const heading1 = React.createElement("h1",{
    id:"head1",
    className:"clh1"
    },"heading1 from React");

const heading2 = React.createElement("h2",{
        id:"head2",
        className:"clh2"
    },"heading 2 from React");
       
const divContainer = React.createElement("div",{
        id:"contdiv"
        },[heading1,heading2]);

        

const heading3 = (<h2 id="head2">this a React React Element</h2>);

function HeaderCompAnother(){
    return <h4>this is another functional comp</h4>
}

const HeaderComponent = ()=>{
    return(
       <div>
        {1+2}
        {heading3}
        {HeaderCompAnother()}
        <h1 className="header">Header from functional component</h1>
       </div>
        
    
    )
}


console.log(heading1);
//now i have to create root first
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(<HeaderComponent></HeaderComponent>);