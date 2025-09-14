"use client";
import React, { useState } from "react";
export default function AddEvent ({ onAdd }){
const [eventTitle, setEventTitle] = useState ("")
const [eventDate, setEventDate] = useState("")
  const AddNewEvent = ()=>{

if (!eventTitle || !eventDate) return;
 onAdd({ title: eventTitle , date: eventDate }); 
 setEventTitle(""); setEventDate("");
        
}

return (<>

<input className="mb-4 rounded-2xl p-2 bg-white" type="text" placeholder="add your event" onChange={(e)=>{setEventTitle(e.target.value)}} value={eventTitle}/>,
<br/>
<input  className="mb-4 rounded-2xl p-2 bg-white" type="date" placeholder="add Date" onChange={(e)=>{setEventDate(e.target.value)} }value={eventDate}/>


<br/>
<button onClick={AddNewEvent} className="border bg-pink-600   text-white px-7 py-3 rounded-xl shadow hover:bg-pink-700">add event</button>
</>)



}