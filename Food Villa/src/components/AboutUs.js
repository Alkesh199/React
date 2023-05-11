import aboutImg from "../assets/about-us.png";

const AboutUs = () =>{
    return(
        <div className="max-w-[1320px] mx-6 lg:mx-auto flex justify-center items-center flex-wrap flex-col lg:flex-row my-16">
            <div className="lg:w-[40%]">
                 <p className="text-green-700 font-bold text-2xl">Food Villa</p>
                 <p className="font-semibold text-xl my-4">Delicious Food is Waiting For You....</p>
                 <p className="font-normal text-base mb-5 text-gray-500">We build innovative products & solutions that deliver unparalleled convenience to urban consumers.
The best part? Every bit of your work at Food Vills will help elevate the lives of our users across India.</p>
<p className="font-normal text-base mb-5 text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            <div className="lg:w-[40%] lg:mx-6">
                <img src={aboutImg} alt="about-us-img" className="rounded-xl"></img>
            </div>
             
        </div>
    )
}

export default AboutUs;