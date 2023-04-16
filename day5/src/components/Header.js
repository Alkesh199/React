import Title from "./Title.js";

const Header = () =>{
    return (
        <div className='header-container'>
           <Title />
           <div className = "item-nav">
            <ul>
                <li>Home</li>
                <li>About </li>
                <li>contact us</li>
                <li>cart</li>
            </ul>
           </div>
        </div>
    );
}

export default Header;