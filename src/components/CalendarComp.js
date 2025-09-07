
"use client";
import { useState } from "react";
import FullCalendar from "@fullcalendar/react";

import dayGridePluging from "@fullcalendar/daygrid";
import iteractionPluging from "@fullcalendar/interaction";


export default function CalendarComp(events){
const [date,setDate] = useState(new Date())
return (
<div className=" h-200 bg-white   w-250 pt-10  ">
<h1 className="mb-10 text-2xl font-semibold" >calendar</h1>
 < FullCalendar
 plugins={[dayGridePluging,iteractionPluging]}
 initialView="dayGridMonth"

className =" "
/>

</div> 






)



}