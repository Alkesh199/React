import { useState } from "react";

const ContactUs =()=>{
    const [name,setName] = useState("");
    const [email,setEmail]=useState("");
    const [emailError,setEmailError]= useState(false);
    const [nameError,setNameError] =useState(false);
    

    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    const validateName = (e) =>{
       
        if(e.target.value.length<3){
           setNameError(true);
        }
        else{
            setNameError(false);
        }
        setName(e.target.value);
        
    }

    const validateEmail = (e) =>{
         
       
         if(!e.target.value.match(emailRegex)){
           setEmailError(true);
         }
         else{
            setEmailError(false)
         }
         setEmail(e.target.value);
    }

    
    const handleSubmitButton = (e) =>{
        e.preventDefault();
        if(name.length>0 && email.length>0){
        alert("Thanks for your submission, we will get back to you soon...");
        }


        setTimeout(() => {
            window.location.href="/";
        }, 1000);
       
        

        
    }

    return (
        <>
             <div className="max-w-[1320px] mx-6 lg:mx-auto flex justify-center items-center flex-wrap flex-col my-16">
                <p className="lg:text-3xl text-xl font-bold text-green-700">We'd Love to Hear From You....</p>
                <form className="mt-14" onSubmit={handleSubmitButton}>
                        <div className="mb-4">
                             <label htmlFor="userName" className="font-bold">Name:</label><br />
                             <input type="text"  className="mb-2 border p-2 mt-3 border-black rounded lg:w-[600px] focus:bg-yellow-100" name = "userName" onChange={validateName} ></input>
                             {nameError && <p className="mt-[-8px] text-[10px] text-red-500 font-semibold">name should be min 3 char</p>}
                        </div>
                        <div className="mb-4">
                             <label htmlFor="userEmail" className="font-bold">Email:</label><br />
                             <input type="Email"  className="mb-2 p-2 mt-3 border border-black rounded lg:w-[600px] focus:bg-yellow-100" name = "userEmail" onChange={validateEmail} ></input>
                             {emailError && <p className="mt-[-8px] text-[10px] text-red-500 font-semibold">please Enter a Valid 
                             Email address</p>}
                        </div>
                        <div className="mb-4">
                             <label htmlFor="message" className="font-bold">Messsage:</label><br />
                             <textarea type="text"  className="mb-2 p-2 mt-3 border border-black rounded w-[100%] lg:w-[600px] min-h-[200px] focus:bg-yellow-100" name = "message" placeholder="type your message here..."></textarea>
                        </div>

                        <div className="flex justify-around">
                            <button type="reset" className ="border-2 border-green-700  py-1 px-2 w-20  font-bold rounded hover:bg-green-700 hover:animate-pulse">Clear</button>
                            <input type="submit" value="Submit" className ="border-2 border-green-700  font-bold py-1 px-2 w-20 rounded hover:bg-green-700 hover:animate-pulse"  onClick={handleSubmitButton}></input>
                        </div>
                   
                </form>

                
             </div>
            

        </>
    );
}

export default ContactUs;