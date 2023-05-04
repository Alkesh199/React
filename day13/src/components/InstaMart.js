import {useState} from "react";

const Section = (props) =>{

    const [isVisible,setIsVisible] = useState(false);
    
    return(
        <div className="max-w-[1320px] m-auto px-8 ">
             <div className ="flex items-center justify-between border-b-2 border-b-gray-700">
                <h1 className="font-bold py-5 text-lg text-orange-900">{props.heading}</h1>
                {!isVisible && <button onClick={()=>setIsVisible(true)} className=" text-orange-900 font-bold text-xl w-8">&#43;</button>}
                { isVisible && <button onClick={()=>setIsVisible(false)} className="text-orange-900 font-bold text-xl w-8">&#45;</button>}
             </div>
             {isVisible && <p className="py-5 border-b-2 border-b-gray-700">{props.description}</p>}
        </div>
    );
}


const InstaMart = () =>{
    return(
      <div className="max-w-[1320px] m-auto my-6 border-2 border-gray-700 rounded bg-gray-400">
    
         <Section heading={"About InstaMart"} description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}></Section>
         <Section heading={"Team InstaMart"} description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}></Section>
         <Section heading={"Career"} description={"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."}></Section>
         

      </div>
    );
}

export default InstaMart;