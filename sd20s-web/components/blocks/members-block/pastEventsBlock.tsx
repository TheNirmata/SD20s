"use client"
import React from 'react';
import Image from "next/image";
import { Spacer, Card } from "@heroui/react";
import PastEvent1 from "../../../public/static-images/events-images/past-event1.png";
import PaginationFeature from "../../pagination/PaginationFeature";
import { redirect } from "next/navigation";
// import { useRouter } from "next/router";


const PastEventsBlock = () => {
  // const router = useRouter();

  const events = [{
    id: 1,
    name: "event 1", 
    when: "01/01/2025",
    where: "Location A",
    image: "iamge 1"
    },
    {
      id: 2,
      name: "event 2", 
      when: "01/01/2025",
      where: "Location B",
      image: "image 2"
    },
    {
      id: 3,
      name: "event 3", 
      when: "01/01/2025",
      where: "Location C",
      image:"image 2"
    },
    {
      id: 4,
      name: "event 4", 
      when: "01/01/2025",
      where: "Location D",
      image:"image 4"
    },
    {
      id: 5,
      name: "event 5", 
      when: "01/01/2025",
      where: "Location E",
      image:"image 5"
    },
  ];
  

  const handlePastEvent = (eventIdx: number) => {
    console.log('View Event Page');
    const foundEventPastEvent = events.find((_, i) => i === eventIdx);
    console.log(`Found ${foundEventPastEvent?.name}`);
    if (!foundEventPastEvent) {
      console.log('Event not found');
    }else{
      redirect(`/Members/pastEvents/${encodeURIComponent(foundEventPastEvent?.id)}-${encodeURIComponent(foundEventPastEvent?.name)}`);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center text-[#D9D9D9]">
      <div className="uppercase text-[48px]">
          <h1>Past Events</h1>
      </div>
      <div>
        {/* <div className=" h-[85px] w-[800px] bg-default-300 flex flex-col justify-center items-center"> */}
        {events.map((event, i) =>(
          <Card 
            key={i}
            className="m-5 max-w-[314px] w-[314px] h-[79.61px] bg-default-300" 
            >
            <div className="-z-20 -translate-x-30 justify-center items-center h-[10px] opacity-[0.5]">
              <Image className="h-[55px] w-[800px] object-cover" src={PastEvent1} alt={`event-${i}`}  />
            </div>
            <Spacer y={3} />
            <div className="flex flex-row">
              <div>
              <h1 className="text-[32px] translate-y-3">{event.name}</h1>
              </div>
              <Spacer x={36} />
              <div className="flex flex-col justify-end items-end  translate-x-2 leading-none">
                <div>{event.when}</div>
                <div>{event.where}</div>
              </div>
              <Spacer y={5} />
            </div>
            <div className="-translate-x-5 -translate-y-5 w-[314px] h-[17px]">
              <button onClick={() => handlePastEvent(i)} type="button" className="bg-[#D9D9D9] text-black rounded-md px-4 py-2 w-[314px] h-[16px] m-5">
                <div className="-translate-y-3 text-[15px]">
                  <span> View Event Page </span>
                </div>
              </button>
            </div>
          </Card>
        ))}
        {/* </div> */}
      </div>
      <PaginationFeature />
    </div>
  )

};
export default PastEventsBlock;