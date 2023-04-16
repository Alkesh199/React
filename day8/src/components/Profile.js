import React from 'react';

class Profile extends React.Component{
    
    constructor(props){
         super(props);
         console.log(`child ${this.props.val} constructor`);
         this.state={
           userInfo:{
            name:"xyz Name",
           },
           count:0,
         }
    }

    async componentDidMount(){
        console.log(`child ${this.props.val} componentDidMount`);
        //call any api here and show data in our component 
        const apiData = await fetch(`https://api.github.com/users/${this.props.userName}`);
        const data = await apiData.json();
        console.log(data);
        this.setState({
            userInfo:data,
        }
        );
        

    //    this.timer =  setInterval(()=>{console.log("setInterval")},1000);

    }
    componentDidUpdate(){
        console.log(`child ${this.props.val} componentDidUpdate`);
    }

    componentWillUnmount(){
        console.log(`child ${this.props.val} +componentWillUnMount`);
        //cleanupCode
    //    clearInterval(this.timer);

    }

    render(){
        console.log(`child ${this.props.val} render`);
        return(
            <div>
                
                <p>Git userName:{this.state.userInfo?.login}</p>
                <img src = {this.state.userInfo?.avatar_url}></img>
                <p>Count class : {this.state.count}</p>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1,
                    }
                    ) 
                }}>button class</button>
                
            </div>
        );
    }
}

export default Profile;

// const [count,setCount] = useState("0");
