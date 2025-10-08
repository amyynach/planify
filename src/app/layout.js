import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import "./globals.css";
import Footer from "@/components/Footer";
import CalendarComp from "@/components/CalendarComp";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
           <nav>
    
            <div className="flex justify-between">
               <div className="flex justify-start font-semibold text-sm p-3 ">
                 <Link href="/" className=" hover:text-blue-500 items-center p-2 ">Home</Link>
                 <Link href= " /about " className=" hover:text-blue-500 items-center p-2 ">your to do list</Link>
                 <Link href="/calendrier" className=" hover:text-blue-500 p-2 ">calendar</Link>
                  <Link href="/calendar" className=" hover:text-blue-500 p-2 ">add event</Link>
               </div> 
               <div className="  flex justify-end font-semibold text-2xl p-3 mt-2 ">Planify</div>   
           </div>    
        </nav>
        {children}
         
      </body>
    </html>
  );
}


