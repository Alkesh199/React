import { useState } from "react";
const ProfileSecond = (props) =>{

    const [count,setCount] = useState(0);
    return(
        <>
      <p>this is profile Functional Component</p>
      <p>Name :{props.name}</p>
      <p>Role :{props.role}</p>
      <p>Count Function :{count}</p>
      <button onClick={()=>setCount(count+1)}>Button Function </button>
      </>
    );
}

export default ProfileSecond;