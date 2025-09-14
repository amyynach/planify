
"use client";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";

import dayGridPluging from "@fullcalendar/daygrid";
import iteractionPlugin from "@fullcalendar/interaction";


export default function CalendarComp({events}){
const [date,setDate] = useState(new Date())
return (
<div className="  bg-white  h-[700px] w-[700px] py-10 px-5  rounded-2xl ">
<h1 className="mb-10 text-2xl font-semibold" >calendar</h1>
 < FullCalendar
 plugins={[dayGridPluging,iteractionPlugin]}
 initialView="dayGridMonth"
 events ={events}
className ="  "
height="auto"
/>

</div> 






)



}