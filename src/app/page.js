import  Link  from "next/link"
import Image from "next/image";
import { FaRegCalendarAlt } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import Footer from "@/components/Footer";
export default function LandingPage() {

  return (
    
      <>
      
         <div className="mt-7  justify-center  h-110 bg-cover pl-8 pt-4 pb-8  rounded-2xl shadow-2xl mb-7 "  style={{ backgroundImage: "url('/image/bgtop.jpg')"}}>
     <h1 className="text-5xl font-bold text-gray-900 mt-20 mb-10">Planify</h1>
     <p className="text-xl"> <span> is smart and easy-to-use tool that helps you orgnize your schedule , <br/>
     stay on track and save time </span> </p>
       <Link href = "/calendar">
    
     <button className="  mt-3 mb-7 bg-blue-500 text-white px-6 py-3 rounded-xl shadow hover:bg-blue-800" >get started</button>
    </Link>
     </div>
{/*  hana section tae why chosing us */ }
   <div className="bg-red-100 py-7">
    <h1 className="text-2xl font-semibold flex justify-center items-center  mt-20">Why Chosing Us</h1> 
    <br />
    <p  className="flex justify-center items-center text-center text-xl">
      we make planning simple , fast and stress-free . with our smart calendar you can organize your schedule <br/> 
      add tasks easly and never miss what matters most. 
      </p> 
      <div className="flex items-center  justify-center gap-20 m-20 ">
        <div className=" bg-pink-200 shadow-2xl rounded-2xl p-6  flex flex-col items-center w-50 h-50 text-xl"> <div><FaRegCalendarAlt  className="mb-3"/> </div>Stay organized with a clear view of your schedule</div>
        <div className=" bg-pink-200 shadow-2xl p-6 rounded-2xl flex flex-col items-center w-50 h-50 text-xl"><SiSimpleanalytics className="mb-3"/> plan ahead and manage your priorities easily </div>
        <div className=" bg-pink-200 shadow-2xl p-6 rounded-2xl flex flex-col items-center w-50 h-50 text-xl"><div><AiOutlineAppstoreAdd className="mb-3"/> </div>Simple & intuitive no complicated setup </div>
      </div>
     {/*<div className=" flex items-center  justify-center  ">
      <img src="/image/insta.jpg" alt="insta"  />
      <img src="/image/heart.jpg" alt="like" />
      <img src="/image/whatsapp.jpg" alt="whatsapp" />
      </div>*/}
   </div>
    {/* section tae stay motivated */}
     <section>
      
      <div className="  mt-6 h-100  flex flex-col items-center justify-center ">
        <h1 className="border-b-2 font-semibold mb-10 text-4xl">Stay Motivated</h1>
        <p className="text-xl text-center">With planify , you can focus on your goals while we keep your <br/>schedule under control.  </p>

     
       
       
        
      </div>
   
      
      </section> 
      <div className="h-70 bg-blue-100"><Footer /></div>
      </>
  );
}
