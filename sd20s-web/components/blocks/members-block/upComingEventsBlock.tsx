"use client"
// import react from 'react';
import Image from "next/image";
import Dawn from "../../../public/static-images/members-images/dawn.png"
import line from "../../../public/line.png";
import { Card } from "@heroui/react";
import event1 from  "../../../public/static-images/events-images/event1.png";
import softStar  from "../../../public/static-images/modal/soft-star.png";


const UpComingEventsBlock = () => {
  const events = [{
    name: "event 1", 
    when: "Monday, Janurary 1, 2025",
    where: "Location A",
    image: "../../../public/static-images/events-images/event1.png"
    },
    {
      name: "event 2", 
      when: "Friday, Janurary 2, 2025",
      where: "Location B",
      image: "../../../public/static-images/events-images/event1.png"
    },
    {
      name: "event 3", 
      when: "Sunday, Janurary 3, 2025",
      where: "Location C",
      image: "../../../public/static-images/events-images/event1.png"
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center text-[#D9D9D9]">
      <div className="flex flex-row">
        <div className="uppercase text-[48px] leading-tight translate-x-10 translate-y-10">
          <h1 className="leading-none">{`Up Coming \n Events`}</h1>
        </div>
      <div className="-translate-y-20">
        <Image src={Dawn} alt="Dawn" width={125} height={125} />
      </div>
      </div>
      <div className="-translate-y-20 flex flex-row">
          <div className=" w-[5px] h-[480px] -translate-x-1">
            <Image src={line} alt="line" layout="fill" objectFit="cover" />
          </div>
            <div className="-translate-y-7 flex flex-col w-[320px]">
            {events.map((event, i) =>(
              <Card 
                className="-translate-x-5 border-spacing-x-2 m-4 p-4 max-w-[310px] w-[310px] h-[140px] bg-default-300 rounded-lg"
                key={i}
                style={{ 
                  backgroundImage: `url(${event.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                
                }}
                >
                    <div className="flex flex-col -z-10  w-[314px]">
                    <Image src={event1} alt={`event-${i}`} className="h-[50px] -z-10"/>
                    </div>
                    <div>
                  <div className="h-24 rounded-lg bg-default-300 uppercase text-[17px]" >
                      <div className="-translate-y-2 leading-none">
                        <h1 className="text-[28px]">{event.name}</h1>
                        <h3>{event.when}</h3>
                        <h3>{event.where}</h3>
                      </div>
                    </div>
                    <div className="-translate-x-5 -translate-y-12 justify-center items-center">
                      <button className="bg-white border-white rounded-md text-black w-[314px] h-[15.7px] m-5">
                        <p className="uppercase text-[12px] justify-center">Tickets</p>
                      </button>
                    </div>
                  </div>
              </Card>
            ))}
            </div>
      </div>
      <div className="flex flex-col">
      <div className="items-center">
        <Image
          src={softStar}
          alt="soft-star"
          width={35}
          height={41}
          className="translate-x-32 -translate-y-20"
          />
      </div>
      <div>
        <button className="translate-x-2 -translate-y-20 bg-white border-white rounded-md text-black w-[256px] h-[48px] m-5">
          <p className="uppercase text-[24px]">View All Events</p>
        </button>
      </div>
    </div>
  </div>
  );
};
export default UpComingEventsBlock;
