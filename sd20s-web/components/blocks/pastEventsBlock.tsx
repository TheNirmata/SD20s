"use client"
// import react from 'react';
import Image from "next/image";
import { Spacer, Card } from "@heroui/react";
import PastEvent1 from "../../public/static-images/events-images/past-event1.png";
import PaginationFeature from "../pagination/PaginationFeature";
import { ChevronIcon } from "../pagination/PaginationFeature";

const PastEventsBlock = () => {
  const events = [{
    name: "event 1", 
    when: "01/01/2025",
    where: "Location A",
    image: "iamge 1"
    },
    {
      name: "event 2", 
      when: "01/01/2025",
      where: "Location B",
      image: "image 2"
    },
    {
      name: "event 3", 
      when: "01/01/2025",
      where: "Location C",
      image:"image 2"
    },
    {
      name: "event 4", 
      when: "01/01/2025",
      where: "Location D",
      image:"image 4"
    },
    {
      name: "event 5", 
      when: "01/01/2025",
      where: "Location E",
      image:"image 5"
    },
  ];


  return (
    <div className="flex flex-col items-center justify-center text-[#D9D9D9]">
      <div className="uppercase text-[48px]">
          <h1>Past Events</h1>
      </div>
      <div>
        {events.map((event, i) =>(
          <Card 
            key={i}
            className="border-spacing-x-2 m-5 max-w-[314px] w-[314px] h-[79.61px] bg-default-300" 
            >
            <div className="-z-20 -translate-x-30 justify-center items-center h-[10px] opacity-[0.5]">
              <Image className="h-[40px] w-[800px]" src={PastEvent1} alt={`event-${i}`}  />
            </div>
            <div className="flex flex-row">
              <div>
              <h1 className="text-[32px] translate-y-3">{event.name}</h1>
              </div>
              <Spacer x={16} />
              <div className="flex flex-col justify-end items-end translate-x-24">
                <div>{event.when}</div>
                <div>{event.where}</div>
              </div>
              <Spacer y={5} />
            </div>
            <div className="-translate-x-5 -translate-y-5 w-[314px] h-[15.61px]">
              <button type="button" className="bg-[#D9D9D9] text-black rounded-md px-4 py-2 w-[314px] h-[15.61px] m-5 ">
                <div className="-translate-y-3 text-[15px]">
                  <span> View Event Page </span>
                </div>
              </button>
            </div>
          </Card>
        ))}
      </div>
      <PaginationFeature />
    </div>
  )

};
export default PastEventsBlock;