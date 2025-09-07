"use client";
import React from "react"
import { useState } from "react";
import AddEvent from "./AddEvent"

export default function EventList () {
      const [events, setEvents] = useState([
    { id: 1, title: "Meeting", date: "2025-09-05" },
    { id: 2, title: "Workshop", date: "2025-09-10" },
  ]);   
return(
<> 
<div className="p-7">
<div className="ml-17 mt-20  p-3 border-pink-50 shadow-2xl rounded-2xl bg-pink-50">
  <h1 className="text-center mt-3"> add new event</h1>
<div className=" p-7   px-20 text-center">
 
 <AddEvent
        onAdd={(newEvent) =>
          setEvents([...events, { id: Date.now(), ...newEvent }])
        }
      />
      </div>
      </div>
     
      <div className="  mt-20 ml-7 BORDER shadow-2xl p-7 bg-pink-50 rounded-2xl"> <h1> events</h1>
      <div className="">
 {
            events.map((event) => (
                  
              < li className=" p-3  shadow-xl rounded-2xl my-7 bg-white" key = {event.id}>
               <span>{event.title}
                {event.date}
                </span> 
                </li>
            ))
           }
           </div>
</div>


</div>
</>




)



}