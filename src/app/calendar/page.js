"use client";
import EventList from "@/components/EventList"
import AddEvent from "@/components/AddEvent"
import CalendarComp from "@/components/CalendarComp"
import { useState } from "react";
export default function CalendarPage(props) {
      const [events, setEvents] = useState([
    { id: 1, title: "Meeting", date: "2025-09-05" },
    { id: 2, title: "Workshop", date: "2025-09-10" },
  ]);   
  const handleAddEvent =
  (newEvent) =>{
          setEvents([...events, { id: Date.now(), ...newEvent }])};


return (
<>
<div className=" min-h-screen p-6 gap-6 flex flex-row justify-center   bg-pink-100">

 <div className=" ">
       

<EventList events={events} onAdd={handleAddEvent}/>
 

 </div>
 <div className="  ">
<CalendarComp events={events}/>



</div>
 </div>
</>


)





}