import EventList from "@/components/EventList"
import AddEvent from "@/components/AddEvent"
import CalendarComp from "@/components/CalendarComp"

export default function CalendarPage(props) {
return (
<>
<div className=" h-max flex flex-row justify-center items-center gap-10 bg-pink-100">

 <div>
       

<EventList/>
 

 </div>
 <div>
<CalendarComp/>



</div>
 </div>
</>


)





}