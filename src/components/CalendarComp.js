
"use client";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";

import dayGridPluging from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";


export default function CalendarComp({events}){
const [date,setDate] = useState(new Date())
return (
<div className="  bg-white  min-h-screen w-[700px] py-10 px-5  rounded-2xl ">
<h1 className="mb-10 text-2xl font-semibold" >calendar</h1>
 < FullCalendar
 plugins={[dayGridPluging,interactionPlugin]}
 initialView="dayGridMonth"
 events ={events}

height="auto"
/>

</div> 






)



}