"use client";
import React from "react"

import AddEvent from "./AddEvent"

export default function EventList ({events, onAdd}) {
  
return(
<> 
<div className="p-7">
  <div className="mt-10  p-5 border-pink-50 shadow-2xl rounded-2xl bg-pink-50">
  <h1 className="text-center mb-4"> add new event</h1>
<div className=" p-3    text-center">
 
 <AddEvent
        onAdd={ onAdd
        }
      />
      </div>
      </div>
     
      <div className="  mt-10  BORDER shadow-2xl p-5 bg-pink-50 rounded-2xl"> <h1> events</h1>
      <div className="">
 {
            events.map((event) => (
                  
              < li className=" p-3  shadow-xl rounded-2xl my-3 bg-white" key = {event.id}>
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