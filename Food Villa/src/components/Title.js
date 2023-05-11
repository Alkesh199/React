import logo from "../assets/applogo.jpg";

const Title = () =>{
return (<a href = "/"><img data-testid="logo" className = "max-h-8 max-w-8 lg:max-h-14 lg:max-w-14 rounded-[50%]" src={logo} alt="food logo" /></a>);
}

export default Title;