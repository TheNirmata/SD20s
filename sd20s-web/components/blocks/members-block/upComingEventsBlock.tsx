"use client"
// import react from 'react';
import Image from "next/image";
import Dawn from "../../../public/static-images/members-images/dawn.png"
import line from "../../../public/line.png";
import event1 from "../../../public/static-images/events-images/event1.png";
import {Spacer, Card} from "@heroui/react";


const UpComingEventsBlock = () => {
  const events = [{
    name: "event Name", 
    when: "Monday, Janurary 1, 2025",
    where: "Location A",
    image: "temp"
    },
    {
      name: "event Name", 
      when: "Friday, Janurary 2, 2025",
      where: "Location B",
      image: "../../../public/static-images/members-images/event1.png"
    },
    {
      name: "event Name", 
      when: "Sunday, Janurary 3, 2025",
      where: "Location C",
      image: "../../../public/static-images/members-images/event1.png"
    },
  ];
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
                            <div className="mb-5">
                            <h3>{event.when}</h3>
                            <h3>{event.where}</h3>   
                            </div>                    
                          </div>
                        <div className="mt-[-2.5rem] mb-2">
                          <button className="bg-white border-white rounded-md text-black w-[314px] h-[15.7px] m-5 -translate-x-5">
                            <p className="uppercase text-[12px] justify-center">Tickets</p>
                          </button>
                          </div>
                    </div>
                </Card>
              ))}
        </div>
      </div>
    </div>
  );
};
export default UpComingEventsBlock;
