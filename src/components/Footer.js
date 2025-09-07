import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { TfiPinterest } from "react-icons/tfi";
export default function Footer () {
 return ( <>
 <div >
        <div className="flex flex-row items-center justify-center p-10 gap-20 text-2xl">
                <div className="flex flex-col  items-center "><FaInstagram  className="mb-3"/> <p>Instagram</p></div>
                <div className="flex flex-col  items-center "><RiFacebookCircleLine className="mb-3"/>  Join Us</div>
                <div className="flex flex-col  items-center "><TfiPinterest  className="mb-3"/> Follow Us</div>
        </div>
<div className="flex flex-row items-center justify-center pt-10 "><p>PLANIFY  ©  2025 </p></div>
</div>
</>)
}