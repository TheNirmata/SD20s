"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";
import Dawn from "../../../public/static-images/members-images/dawn.png"
import line from "../../../public/line.png";
import event1 from "../../../public/static-images/events-images/event1.png";
import {Spacer, Card} from "@heroui/react";
import { redirect} from "next/navigation";


const events = [{
  id: 1,
  name: "event Name", 
  when: `When: 01/01/2025`,
  where: `Where: Location A`,
  image: "temp"
  },
  {
    id: 2,
    name: "event Name", 
    when: `When: 02/01/2025`,
    where: `Where: Location B`,
    image: "../../../public/static-images/members-images/event1.png"
  },
  {
    id: 3,
    name: "event Name", 
    when: `When: 03/01/2025`,
    where: `Where: Location C`,
    image: "../../../public/static-images/members-images/event1.png"
  },
];
const UpComingEventsBlock = () => {
  const [eventsList, setEventsList] = useState(events);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setEventsList(events);
    }, 5000);
    return () => clearInterval(interval);
  }
  , [eventsList]);
  

  const handleEvent = (eventId: number) => {
    const foundEvent = events.find((event) => event.id === eventId);
    const currentEventId = foundEvent?.id ? foundEvent.id : 1;
    console.log(`Found ${foundEvent?.name}`);
    if (!foundEvent) {
      console.log('Event not found');
    }else{
      redirect(`/Members/upComingEvents/${encodeURIComponent(currentEventId)}-${encodeURIComponent(foundEvent?.name)}`);
    }
  } ;


  return (
    <div className="flex flex-col items-center justify-center text-[#D9D9D9]">
      <div className="flex flex-row">
        <div className="uppercase text-[48px] leading-tight translate-x-10 translate-y-16">
          <h1 className="leading-none">{`Up Coming \n Events`}</h1>
        </div>
      <div className="-translate-y-20">
        <Image src={Dawn} alt="Dawn" width={125} height={125} />
      </div>
      </div>
      {/* //////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <div className="flex flex-row -translate-y-8">
          <div className="translate-x-5">
            <Image src={line} alt="line" height={555}/>
          </div>
              <div className="space-y-4">
              {events.map((event, i) =>(
                <>
                  <Card className="translate-x-10 border-grey mb-0" key={i}>
                      <div className="flex flex-col ">
                        <div className="relative w-full h-[80px] opacity-[0.5]">
                          <Image 
                            src={event1} 
                            alt="event" 
                            className="h-[55px] w-[314px] object-cover" 
                            />
                        </div>
                          <div className="flex flex-col items-start rounded-lg bg-default-300 uppercase relative mt-[-40px] z-10">
                            <div>
                            <h1 className="text-[32px]">{event.name}</h1>
                            </div>
                            <div className="mb-5 leading-none">
                            <h3>{event.when}</h3>
                            <h3>{event.where}</h3>   
                            </div>                   
                            <Spacer y={2} /> 
                          </div>
                    </div>
                </Card>
              <div className="mt-[-2.5rem] mb-2">
                <button 
                  key={i}
                  onClick={() => handleEvent(event.id)}
                  className="bg-white border-white rounded-md text-black w-[314px] h-[15.7px] m-5 translate-x-5 -translate-y-12">
                  <p className="uppercase text-[12px] justify-center">Tickets</p>
                </button>
                </div>
                </>
              ))}
        </div>
      </div>
    </div>
  );
};
export default UpComingEventsBlock;
